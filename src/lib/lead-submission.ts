import { appendRow, type CellValue } from "@/lib/google-sheets";
import {
  BRAND_NAME,
  type ContactLeadInput,
} from "@/lib/leadNotification";
import { getSiteDomain } from "@/lib/seo";

export { BRAND_NAME };

/** Row 1 headers on one shared GOOGLE_SHEET_TAB_NAME (Form Type distinguishes rows) */
export const LEAD_SHEET_HEADERS = [
  "Timestamp",
  "Brand Name",
  "Form Type",
  "Full Name",
  "Email",
  "Phone Number",
  "Domain",
] as const;

function formTypeLabel(formType?: string): string {
  return formType === "instruct" ? "Instruct" : "Contact";
}

/** Prevent Sheets from treating +phone as a formula when using USER_ENTERED */
function formatPhoneForSheet(phone: string): string {
  if (!phone) return "";
  if (phone.startsWith("+") || phone.startsWith("=") || phone.startsWith("-")) {
    return `'${phone}`;
  }
  return phone;
}

export function buildLeadSheetRow(
  lead: ContactLeadInput,
  domain = getSiteDomain()
): CellValue[] {
  return [
    new Date().toISOString(),
    BRAND_NAME,
    formTypeLabel(lead.formType),
    lead.fullName,
    lead.email,
    formatPhoneForSheet(lead.phone ?? ""),
    domain,
  ];
}

export async function appendLeadToSheet(lead: ContactLeadInput): Promise<void> {
  await appendRow(buildLeadSheetRow(lead));
}
