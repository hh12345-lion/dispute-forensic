/**
 * Single source of truth for indexable public URLs.
 * Used by scripts/generate-seo.ts, scripts/verify-seo.ts, and CI.
 *
 * Canonical host must match middleware apex → www redirect (disputeforensic.com → www).
 */
import { CASE_TYPE_SLUGS } from "@/data/case-types";
import { DISCIPLINE_SLUGS } from "@/data/disciplines";
import { GUIDE_SLUGS } from "@/data/guides";
import { blogSlugs } from "@/data/blog";
import { SECTOR_SLUGS } from "@/data/sectors";

export const CANONICAL_HOST =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.disputeforensic.com";

/**
 * Indexable static marketing routes.
 * Add new first-class pages here, then run: npm run seo:generate
 */
export const APP_STATIC_PATHS = [
  "/",
  "/services",
  "/forensic-disciplines",
  "/disciplines",
  "/case-types",
  "/sectors",
  "/what-is-forensic-expert-witness",
  "/qualifications",
  "/how-to-instruct",
  "/guides",
  "/blog",
  "/experts",
  "/glossary",
  "/cookies",
] as const;

/**
 * Routes that exist in the app but must NOT appear in sitemap.xml.
 * /contact is indexable (metadata) but excluded from sitemap per SEO spec.
 * /thank-you, /privacy, /terms use noindex in page metadata.
 */
export const SITEMAP_EXCLUDED_PATHS = [
  "/contact",
  "/thank-you",
  "/privacy",
  "/terms",
] as const;

/**
 * Paths disallowed in robots.txt (not served as normal indexable HTML).
 * Template in scripts/generate-seo.ts → renderRobots().
 */
export const ROBOTS_DISALLOW_PATHS = [
  "/thank-you",
  "/privacy",
  "/terms",
  "/api/",
  "/_next/",
  "/.netlify/",
] as const;

export interface PublicUrlInventory {
  allPaths: string[];
  allUrls: string[];
  counts: {
    static: number;
    disciplines: number;
    caseTypes: number;
    sectors: number;
    guides: number;
    blogs: number;
    total: number;
  };
}

export function buildPublicUrlInventory(): PublicUrlInventory {
  const disciplinePaths = DISCIPLINE_SLUGS.map((slug) => `/disciplines/${slug}`);
  const caseTypePaths = CASE_TYPE_SLUGS.map((slug) => `/case-types/${slug}`);
  const sectorPaths = SECTOR_SLUGS.map((slug) => `/sectors/${slug}`);
  const guidePaths = GUIDE_SLUGS.map((slug) => `/guides/${slug}`);
  const blogPaths = blogSlugs.map((slug) => `/blog/${slug}`);

  const staticPaths = [...APP_STATIC_PATHS];
  const dynamicPaths = [
    ...disciplinePaths,
    ...caseTypePaths,
    ...sectorPaths,
    ...guidePaths,
    ...blogPaths,
  ];

  const excluded = new Set<string>(SITEMAP_EXCLUDED_PATHS);
  const allPaths = [...new Set([...staticPaths, ...dynamicPaths])]
    .filter((path) => !excluded.has(path))
    .sort((a, b) => a.localeCompare(b));

  return {
    allPaths,
    allUrls: allPaths.map((path) => toAbsoluteUrl(path)),
    counts: {
      static: staticPaths.length,
      disciplines: disciplinePaths.length,
      caseTypes: caseTypePaths.length,
      sectors: sectorPaths.length,
      guides: guidePaths.length,
      blogs: blogPaths.length,
      total: allPaths.length,
    },
  };
}

export function toAbsoluteUrl(path: string): string {
  if (path === "/") return `${CANONICAL_HOST}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${CANONICAL_HOST}${normalized}`;
}

/** Heuristic changefreq per path (sitemaps.org). */
export function getSitemapChangefreq(path: string): string {
  if (path === "/") return "weekly";
  if (
    path === "/forensic-disciplines" ||
    path === "/guides" ||
    path === "/blog"
  ) {
    return "weekly";
  }
  return "monthly";
}

/** Priorities per docs/SEO-ARCHITECTURE.md Appendix B. */
export function getSitemapPriority(path: string): number {
  if (path === "/") return 1.0;
  if (path === "/services" || path === "/forensic-disciplines") return 0.95;
  if (path === "/disciplines") return 0.93;
  if (path === "/case-types") return 0.92;
  if (path.startsWith("/disciplines/")) return 0.92;
  if (path === "/sectors") return 0.9;
  if (path === "/what-is-forensic-expert-witness") return 0.9;
  if (path === "/qualifications" || path === "/how-to-instruct") {
    return 0.88;
  }
  if (path.startsWith("/case-types/")) return 0.88;
  if (path === "/guides" || path === "/blog") return 0.87;
  if (path.startsWith("/sectors/")) return 0.86;
  if (path === "/experts") return 0.8;
  if (path.startsWith("/guides/") || path.startsWith("/blog/")) return 0.8;
  if (path === "/glossary") return 0.75;
  if (path === "/cookies") return 0.65;
  return 0.7;
}
