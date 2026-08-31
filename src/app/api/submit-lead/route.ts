import { NextResponse } from "next/server";
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
 * Webhook primary, then soft-fail Sheets on the same request.
 * (Live /api/contact was 404 on Netlify — sheet writes must not depend on it alone.)
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
  let webhookOk = false;
  if (webhookUrl) {
    webhookOk = await notifyLeadWebhook(lead, webhookUrl);
    if (!webhookOk) {
      return NextResponse.json(
        { error: "Failed to deliver lead to webhook" },
        { status: 502 }
      );
    }
  } else {
    console.warn(
      "[submit-lead] Lead_notification_url not set — continuing with Sheets fallback"
    );
  }

  const writtenToSheet = await writeSubmissionToSheetSafely(
    () => appendContactToSheet(lead),
    "submit-lead"
  );

  if (!webhookOk && !writtenToSheet) {
    return NextResponse.json(
      {
        error: "Lead storage is not configured",
        message:
          "Set Lead_notification_url and/or Google Sheets env vars on Netlify.",
      },
      { status: 503 }
    );
  }

  return NextResponse.json({
    ok: true,
    forwarded: webhookOk,
    writtenToSheet,
    domain: getSiteDomain(),
  });
}
