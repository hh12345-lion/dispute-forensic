import { google, sheets_v4 } from "googleapis";

function normalizePrivateKey(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  let key = raw.trim();
  if (
    (key.startsWith('"') && key.endsWith('"')) ||
    (key.startsWith("'") && key.endsWith("'"))
  ) {
    key = key.slice(1, -1).trim();
  }
  // Netlify / .env often store PEM as one line with literal \n
  key = key.replace(/\\n/g, "\n");
  return key;
}

function normalizeEnv(value: string | undefined): string | undefined {
  const trimmed = value?.trim();
  return trimmed || undefined;
}

function getAuthClient() {
  const clientEmail = normalizeEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const privateKey = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

export type CellValue = string | number | boolean | null;

export interface SheetTarget {
  spreadsheetId?: string;
  sheetName?: string;
}

export interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

export interface ReadResult {
  success: boolean;
  rows: CellValue[][];
}

export function isGoogleSheetsConfigured(): boolean {
  const email = normalizeEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL);
  const key = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  const sheetId = normalizeEnv(process.env.GOOGLE_SHEET_ID);

  return Boolean(
    email &&
      key &&
      key.includes("PRIVATE KEY") &&
      sheetId
  );
}

export function getGoogleSheetsConfigHint(): string {
  if (!normalizeEnv(process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL)) {
    return "GOOGLE_SERVICE_ACCOUNT_EMAIL is missing";
  }
  const key = normalizePrivateKey(process.env.GOOGLE_PRIVATE_KEY);
  if (!key) return "GOOGLE_PRIVATE_KEY is missing";
  if (!key.includes("PRIVATE KEY")) {
    return "GOOGLE_PRIVATE_KEY does not look like a PEM key (check \\n newlines in Netlify)";
  }
  if (!normalizeEnv(process.env.GOOGLE_SHEET_ID)) {
    return "GOOGLE_SHEET_ID is missing";
  }
  return "ok";
}

export async function appendRow(
  values: CellValue[],
  target?: SheetTarget
): Promise<AppendResult> {
  if (!isGoogleSheetsConfigured()) {
    throw new Error("Google Sheets env vars are not configured");
  }

  const sheets = getSheetsClient();
  const spreadsheetId =
    target?.spreadsheetId || normalizeEnv(process.env.GOOGLE_SHEET_ID);
  const sheetName =
    target?.sheetName ||
    normalizeEnv(process.env.GOOGLE_SHEET_TAB_NAME) ||
    "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}

export async function readRows(
  range?: string,
  target?: SheetTarget
): Promise<ReadResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = target?.spreadsheetId || process.env.GOOGLE_SHEET_ID;
  const sheetName =
    target?.sheetName || process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1";

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: range || sheetName,
  });

  return {
    success: true,
    rows: (response.data.values as CellValue[][]) || [],
  };
}

export async function getSpreadsheetInfo(spreadsheetId?: string) {
  const sheets = getSheetsClient();
  const id = spreadsheetId || process.env.GOOGLE_SHEET_ID;

  if (!id) {
    throw new Error("Missing spreadsheet ID");
  }

  const response = await sheets.spreadsheets.get({
    spreadsheetId: id,
  });

  return {
    title: response.data.properties?.title,
    sheets: response.data.sheets?.map((s) => ({
      name: s.properties?.title,
      sheetId: s.properties?.sheetId,
      rowCount: s.properties?.gridProperties?.rowCount,
      columnCount: s.properties?.gridProperties?.columnCount,
    })),
  };
}

export async function appendRowWithRetry(
  values: CellValue[],
  maxRetries = 2,
  target?: SheetTarget
): Promise<AppendResult> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await appendRow(values, target);
    } catch (error: unknown) {
      const err = error as { code?: number };
      const isRetryable =
        err?.code === 429 || err?.code === 503 || err?.code === 500;

      if (isRetryable && attempt < maxRetries) {
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise((resolve) => setTimeout(resolve, delay));
        continue;
      }
      throw error;
    }
  }
  throw new Error("Max retries exceeded");
}
