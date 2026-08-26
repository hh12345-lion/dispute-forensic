import { NextResponse } from "next/server";
import {
  getLeadWebhookUrl,
  notifyLeadWebhook,
  parseContactLeadBody,
} from "@/lib/leadNotification";

/**
 * POST /api/submit-lead
 * Forwards contact leads to Lead_notification_url (n8n) with the standard
 * five-key JSON: Full Name, Email, Phone Number, Brand name, domain.
 */
export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();

  if (!webhookUrl) {
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

  const webhookOk = await notifyLeadWebhook(lead, webhookUrl);
  if (!webhookOk) {
    return NextResponse.json(
      { error: "Failed to deliver lead to webhook" },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
