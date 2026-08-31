import {
  appendRowWithRetry,
  isGoogleSheetsConfigured,
  type SheetTarget,
} from "@/lib/google-sheets";
import {
  BRAND_NAME,
  buildLeadSheetRow,
} from "@/lib/lead-submission";
import type { ContactLeadInput } from "@/lib/leadNotification";
import { getSiteDomain } from "@/lib/seo";

function sharedTab(): SheetTarget {
  return {
    sheetName: process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1",
  };
}

export async function appendContactToSheet(
  lead: ContactLeadInput
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;
  await appendRowWithRetry(
    buildLeadSheetRow(lead, getSiteDomain()),
    2,
    sharedTab()
  );
}

export async function appendInstructToSheet(
  lead: ContactLeadInput
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;
  await appendRowWithRetry(
    buildLeadSheetRow(
      { ...lead, formType: "instruct" },
      getSiteDomain()
    ),
    2,
    sharedTab()
  );
}

export async function writeSubmissionToSheetSafely(
  writer: () => Promise<void>,
  context: string
): Promise<void> {
  if (!isGoogleSheetsConfigured()) return;

  try {
    await writer();
  } catch (error: unknown) {
    const err = error as {
      message?: string;
      code?: number;
      response?: { status?: number };
    };
    console.error("Google Sheets error:", {
      context,
      brand: BRAND_NAME,
      message: err?.message,
      code: err?.code,
      status: err?.response?.status,
      spreadsheetId: `${process.env.GOOGLE_SHEET_ID?.slice(0, 8)}...`,
      tab: process.env.GOOGLE_SHEET_TAB_NAME,
      timestamp: new Date().toISOString(),
    });
  }
}
