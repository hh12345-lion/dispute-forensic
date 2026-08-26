/**
 * Public site hostname for outbound lead webhooks (no protocol, no www).
 * Source: NEXT_PUBLIC_SITE_URL
 */
export function getSiteDomain(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://www.disputeforensic.com";

  try {
    const hostname = new URL(
      raw.startsWith("http") ? raw : `https://${raw}`
    ).hostname;
    return hostname.replace(/^www\./i, "");
  } catch {
    return "disputeforensic.com";
  }
}
