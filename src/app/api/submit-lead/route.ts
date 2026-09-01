import { NextResponse } from "next/server";
import { isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getLeadWebhookUrl,
  notifyLeadWebhook,
  parseContactLeadBody,
} from "@/lib/leadNotification";
import { getSiteDomain } from "@/lib/seo";
import {
  appendContactToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";

/**
 * POST /api/submit-lead
 * Writes to Google Sheets when configured and POSTs the standard n8n webhook.
 * Succeeds if at least one path works — webhook failure must not block Sheets.
 */
export async function POST(request: Request) {
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

  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!webhookUrl && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "NOT_CONFIGURED",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
      },
      { status: 503 }
    );
  }

  const writtenToSheet = await writeSubmissionToSheetSafely(
    () => appendContactToSheet(lead),
    "submit-lead"
  );

  let forwarded = false;
  if (webhookUrl) {
    forwarded = await notifyLeadWebhook(lead, webhookUrl);
    if (!forwarded) {
      console.error("[submit-lead] webhook delivery failed", {
        domain: getSiteDomain(),
        writtenToSheet,
      });
    }
  }

  if (!forwarded && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "DELIVERY_FAILED",
        message:
          "Could not deliver your enquiry. Check webhook URL and Google Sheets credentials in Netlify.",
        forwarded: false,
        writtenToSheet: false,
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    forwarded,
    writtenToSheet,
    domain: getSiteDomain(),
  });
}
