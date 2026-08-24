export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.disputeforensic.com";

export const SITE_NAME = "DisputeForensic";
export const SITE_EMAIL = "contact@disputeforensic.com";

/** Short copy for footers and intros: global reach, not tied to one jurisdiction. */
export const SITE_SCOPE =
  "DisputeForensic.com connects legal teams worldwide with forensic expert witnesses across accounting, engineering, digital forensics, and economics — for domestic litigation and international forums including ICC, LCIA, ICSID, and UNCITRAL.";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/dispute-forensic";

export const COLORS = {
  primary: "#1C1917",
  accent: "#0D9488",
  highlight: "#78716C",
  background: "#FAFAF9",
  sectionAlt: "#F5F5F4",
  border: "#D6D3D1",
  heading: "#1C1917",
  body: "#44403C",
} as const;
