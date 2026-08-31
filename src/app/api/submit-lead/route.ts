import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getLeadWebhookUrl,
  notifyLeadWebhook,
  parseContactLeadBody,
} from "@/lib/leadNotification";
import { appendLeadToSheet } from "@/lib/lead-submission";

async function softFailAppendSheet(
  lead: NonNullable<ReturnType<typeof parseContactLeadBody>>,
  context: string
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;

  try {
    await appendLeadToSheet(lead);
  } catch (err) {
    console.error("Google Sheets error:", {
      context,
      message: err instanceof Error ? err.message : "Unknown error",
      sheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
      tab: process.env.GOOGLE_SHEET_TAB_NAME,
      timestamp: new Date().toISOString(),
    });
  }
}

/**
 * POST /api/submit-lead
 * Webhook is primary. Sheets: one shared tab + Form Type; soft-fail only.
 */
export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "WEBHOOK_MISSING",
        message:
          "Lead_notification_url / LEAD_NOTIFICATION_URL is not configured.",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const lead = parseContactLeadBody(body);
  if (!lead) {
    return NextResponse.json(
      { error: "fullName and email are required" },
      { status: 400 }
    );
  }

  if (webhookUrl) {
    const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk) {
      return NextResponse.json(
        { error: "Failed to deliver lead to webhook" },
        { status: 502 }
      );
    }

    await softFailAppendSheet(lead, "submit-lead");
    return NextResponse.json({ ok: true });
  }

  await softFailAppendSheet(lead, "submit-lead-sheets-only");
  return NextResponse.json({ ok: true });
}
