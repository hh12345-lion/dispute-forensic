export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.disputeforensic.com";

export const SITE_NAME = "DisputeForensic";
export const SITE_EMAIL = "contact@disputeforensic.com";

/** Short copy for footers and intros: global reach, not tied to one jurisdiction. */
export const SITE_SCOPE =
  "DisputeForensic.com connects legal teams worldwide with forensic expert witnesses across accounting, engineering, digital forensics, and economics, for domestic litigation and international forums including ICC, LCIA, ICSID, and UNCITRAL.";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/dispute-forensic";

export const COLORS = {
  primary: "#3B2F2C",
  accent: "#AC4E1A",
  highlight: "#7A6A63",
  background: "#FBF9F5",
  sectionAlt: "#F6F2EC",
  border: "#D4CCC1",
  heading: "#591E35",
  body: "#3B2F2C",
} as const;
