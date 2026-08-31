import { NextResponse } from "next/server";
import { parseContactLeadBody } from "@/lib/leadNotification";
import {
  appendContactToSheet,
  writeSubmissionToSheetSafely,
} from "@/lib/sheetSubmissions";
import { SITE_EMAIL } from "@/lib/site";

/**
 * Soft-fail Sheets (one shared GOOGLE_SHEET_TAB_NAME + Form Type) and soft-fail email.
 * Always succeeds after validation so /api/submit-lead remains the primary lead path.
 */
export async function POST(request: Request) {
  try {
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

    const writtenToSheet = await writeSubmissionToSheetSafely(
      () => appendContactToSheet(lead),
      "contact"
    );

    try {
      console.log("Contact submission received:", {
        fullName: lead.fullName,
        email: lead.email,
        formType: lead.formType === "instruct" ? "Instruct" : "Contact",
        writtenToSheet,
        notify: SITE_EMAIL,
      });
    } catch (err) {
      console.error("Contact email soft-fail:", err);
    }

    return NextResponse.json({
      ok: true,
      success: true,
      writtenToSheet,
      message: "Inquiry logged securely.",
    });
  } catch (error) {
    console.error("contact error:", error);
    return NextResponse.json({
      ok: true,
      success: true,
      writtenToSheet: false,
      soft: true,
    });
  }
}
