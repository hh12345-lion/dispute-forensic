import { photos, type Photo, type PhotoKey } from "@/lib/photos";

/** The photograph that opens each page, keyed by path. */
const PAGE_PHOTOS: Record<string, PhotoKey> = {
  "/forensic-disciplines": "tbmCutter",
  "/disciplines": "steelFracture",
  "/disciplines/forensic-accounting": "worldBank",
  "/disciplines/forensic-engineering-quantum": "bridgeCollapse",
  "/disciplines/digital-forensics": "headCrash",
  "/disciplines/forensic-economics": "portCranes",
  "/services": "hearingRoom",
  "/case-types": "ntsbInvestigators",
  "/case-types/commercial-fraud-financial-crime": "worldBank",
  "/case-types/construction-engineering-disputes": "constructionCrane",
  "/case-types/cybercrime-data-disputes": "serverRacks",
  "/case-types/competition-law-cartel-damages": "portCranes",
  "/case-types/ip-theft-misappropriation": "circuitBoard",
  "/case-types/shareholder-commercial-disputes": "hearingRoom",
  "/case-types/professional-negligence": "steelFracture",
  "/case-types/international-arbitration": "maxwellChambers",
  "/case-types/matrimonial-financial-disputes": "hearingRoom",
  "/case-types/regulatory-investigations": "ntsbInvestigators",
  "/sectors": "refinery",
  "/sectors/construction-infrastructure": "tbmCutter",
  "/sectors/financial-services-banking": "worldBank",
  "/sectors/technology-software-digital": "serverTechnician",
  "/sectors/energy-utilities": "offshoreWind",
  "/sectors/professional-services": "hearingRoom",
  "/sectors/life-sciences-healthcare": "circuitBoard",
  "/guides": "hddInner",
  "/blog": "serverTechnician",
  "/how-to-instruct": "maxwellChambers",
  "/qualifications": "steelFracture",
  "/experts": "ntsbInvestigators",
  "/glossary": "hddInner",
  "/what-is-forensic-expert-witness": "bridgeCollapse",
  "/contact": "maxwellChambers",
};

/** Guides are matched by the subject in their slug. */
const GUIDE_KEYWORDS: [RegExp, PhotoKey][] = [
  [/delay/, "tbmCutter"],
  [/ediscovery/, "serverRacks"],
  [/digital/, "serverTechnician"],
  [/construction/, "constructionCrane"],
  [/economic-damages/, "refinery"],
  [/economics|competition/, "portCranes"],
  [/accounting/, "worldBank"],
  [/loss/, "steelFracture"],
  [/multi-discipline/, "maxwellChambers"],
  [/hot-tubbing|determination/, "hearingRoom"],
];

export function photoFor(path: string | null): Photo | null {
  if (!path) return null;
  const clean = path.replace(/\/$/, "") || "/";
  let key: PhotoKey | undefined = PAGE_PHOTOS[clean];
  if (!key && clean.startsWith("/guides/")) key = GUIDE_KEYWORDS.find(([re]) => re.test(clean))?.[1] ?? "hddInner";
  return key ? photos[key] : null;
}
