import {
  appendRowWithRetry,
  getGoogleSheetsConfigHint,
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
    sheetName: process.env.GOOGLE_SHEET_TAB_NAME?.trim() || "Sheet1",
  };
}

export async function appendContactToSheet(
  lead: ContactLeadInput
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    throw new Error(getGoogleSheetsConfigHint());
  }
  await appendRowWithRetry(
    buildLeadSheetRow(lead, getSiteDomain()),
    2,
    sharedTab()
  );
}

export async function appendInstructToSheet(
  lead: ContactLeadInput
): Promise<void> {
  if (!isGoogleSheetsConfigured()) {
    throw new Error(getGoogleSheetsConfigHint());
  }
  await appendRowWithRetry(
    buildLeadSheetRow(
      { ...lead, formType: "instruct" },
      getSiteDomain()
    ),
    2,
    sharedTab()
  );
}

/** Soft-fail wrapper. Returns whether a row was written. */
export async function writeSubmissionToSheetSafely(
  writer: () => Promise<void>,
  context: string
): Promise<boolean> {
  if (!isGoogleSheetsConfigured()) {
    console.warn(`[sheets] skip (${context}): ${getGoogleSheetsConfigHint()}`);
    return false;
  }

  try {
    await writer();
    console.log(`[sheets] row appended (${context})`, {
      tab: process.env.GOOGLE_SHEET_TAB_NAME?.trim() || "Sheet1",
      brand: BRAND_NAME,
    });
    return true;
  } catch (error: unknown) {
    const err = error as {
      message?: string;
      code?: number;
      response?: { status?: number; data?: { error?: { message?: string } } };
    };
    const apiMessage = err?.response?.data?.error?.message;
    console.error("[sheets] append failed:", {
      context,
      brand: BRAND_NAME,
      message: apiMessage || err?.message,
      code: err?.code,
      status: err?.response?.status,
      configHint: getGoogleSheetsConfigHint(),
      spreadsheetId: process.env.GOOGLE_SHEET_ID
        ? `${process.env.GOOGLE_SHEET_ID.slice(0, 8)}...`
        : "missing",
      tab: process.env.GOOGLE_SHEET_TAB_NAME?.trim() || "Sheet1",
      timestamp: new Date().toISOString(),
    });
    return false;
  }
}
