import type { Metadata } from "next";
import { SITE_URL } from "./site";

/** Global English + x-default */
export function buildHreflangAlternates(path: string = "") {
  const url = `${SITE_URL}${path}`;
  return {
    canonical: url,
    languages: {
      en: url,
      "x-default": url,
    },
  };
}

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  nofollow = false,
  image,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  nofollow?: boolean;
  image?: string;
}): Metadata {
  const robots =
    noindex || nofollow
      ? { index: !noindex, follow: !nofollow }
      : { index: true, follow: true };

  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.BING_SITE_VERIFICATION;
  const pageUrl = `${SITE_URL}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: buildHreflangAlternates(path),
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: "DisputeForensic",
      locale: "en",
      type: image ? "article" : "website",
      ...(image
        ? { images: [{ url: image, alt: title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    robots,
    ...(googleVerification && {
      verification: { google: googleVerification },
    }),
    ...(bingVerification && {
      other: { "msvalidate.01": bingVerification },
    }),
  };
}
