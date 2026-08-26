import { getSiteDomain } from "@/lib/seo";

/** Outbound webhook JSON key `Brand name` — fixed per site for n8n routing. */
export const BRAND_NAME = "DisputeForensic";

export type LeadFormType = "contact" | "instruct";

export interface ContactLeadInput {
  fullName: string;
  email: string;
  phone: string;
  formType?: LeadFormType;
}

export interface LeadWebhookPayload {
  "Full Name": string;
  Email: string;
  "Phone Number": string;
  "Brand name": string;
  domain: string;
}

export function getLeadWebhookUrl(): string | undefined {
  const url =
    process.env.Lead_notification_url || process.env.LEAD_NOTIFICATION_URL;
  return url?.trim() || undefined;
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

export function parseContactLeadBody(body: unknown): ContactLeadInput | null {
  if (!body || typeof body !== "object") return null;

  const b = body as Record<string, unknown>;
  const fullName = sanitize(String(b.fullName ?? b.full_name ?? ""));
  const email = sanitize(String(b.email ?? "")).toLowerCase();

  if (!fullName || !email) return null;

  const formTypeRaw = sanitize(String(b.formType ?? b.form_type ?? "contact"));
  const formType: LeadFormType =
    formTypeRaw === "instruct" ? "instruct" : "contact";

  return {
    fullName,
    email,
    phone: b.phone != null ? String(b.phone).trim() : "",
    formType,
  };
}

export function buildWebhookPayload(lead: ContactLeadInput): LeadWebhookPayload {
  return {
    "Full Name": lead.fullName,
    Email: lead.email,
    "Phone Number": lead.phone,
    "Brand name": BRAND_NAME,
    domain: getSiteDomain(),
  };
}

export async function notifyLeadWebhook(
  lead: ContactLeadInput,
  webhookUrl: string
): Promise<boolean> {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(buildWebhookPayload(lead)),
      signal: AbortSignal.timeout(12_000),
    });
    return res.ok;
  } catch (err) {
    console.error("Lead webhook failed:", err);
    return false;
  }
}
