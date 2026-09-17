import { getAllServices } from "@/data/services";

export type RelatedLink = { href: string; label: string };
type Link = RelatedLink;

const CONTACT: Link = { href: "/contact", label: "Contact Us" };
const INSTRUCT: Link = { href: "/how-to-instruct", label: "How to Instruct" };
const DISCIPLINES: Link = {
  href: "/forensic-disciplines",
  label: "Forensic Disciplines Guide",
};
const QUALIFICATIONS: Link = {
  href: "/qualifications",
  label: "Qualifications",
};
const GLOSSARY: Link = { href: "/glossary", label: "Glossary" };

const STANDARD_DISCIPLINE_LINKS: Link[] = [
  { href: "/disciplines", label: "All Disciplines" },
  DISCIPLINES,
  { href: "/case-types", label: "Case Types" },
  { href: "/guides", label: "Solicitor Guides" },
  QUALIFICATIONS,
  INSTRUCT,
  CONTACT,
];

const STANDARD_CASE_TYPE_LINKS: Link[] = [
  { href: "/case-types", label: "All Case Types" },
  DISCIPLINES,
  GLOSSARY,
  INSTRUCT,
  CONTACT,
];

const STANDARD_SECTOR_LINKS: Link[] = [
  { href: "/sectors", label: "All Sectors" },
  DISCIPLINES,
  QUALIFICATIONS,
  INSTRUCT,
  CONTACT,
];

const STANDARD_GUIDE_LINKS: Link[] = [
  { href: "/guides", label: "All Guides" },
  DISCIPLINES,
  QUALIFICATIONS,
  INSTRUCT,
  CONTACT,
];

const STANDARD_BLOG_LINKS: Link[] = [
  { href: "/blog", label: "All Blog Posts" },
  { href: "/guides", label: "Solicitor Guides" },
  DISCIPLINES,
  INSTRUCT,
  CONTACT,
];

/** Per-discipline links, docs/SEO-ARCHITECTURE.md Rule 2 */
const REQUIRED_DISCIPLINE_LINKS: Record<string, Link[]> = {
  "forensic-accounting": [
    { href: "/guides/forensic-accounting-disputes-guide", label: "Forensic Accounting Disputes Guide" },
    { href: "/case-types/commercial-fraud-financial-crime", label: "Commercial Fraud & Financial Crime" },
    { href: "/case-types/shareholder-commercial-disputes", label: "Shareholder & Commercial Disputes" },
    { href: "/case-types/professional-negligence", label: "Professional Negligence" },
    { href: "/sectors/financial-services-banking", label: "Financial Services Sector" },
    { href: "/services#forensic-loss-quantification", label: "Forensic Loss Quantification" },
    { href: "/services#fraud-investigation-asset-tracing", label: "Fraud Investigation & Asset Tracing" },
    { href: "/glossary#forensic-accounting", label: "Forensic Accounting (Glossary)" },
    { href: "/glossary#but-for-analysis", label: "But-For Analysis" },
  ],
  "forensic-engineering-quantum": [
    { href: "/guides/construction-quantum-forensic-guide", label: "Construction Quantum Guide" },
    { href: "/case-types/construction-engineering-disputes", label: "Construction & Engineering Disputes" },
    { href: "/sectors/construction-infrastructure", label: "Construction & Infrastructure Sector" },
    { href: "/services#construction-quantum-delay", label: "Construction Quantum & Delay Analysis" },
    { href: "/glossary#quantum", label: "Quantum" },
    { href: "/glossary#scott-schedule", label: "Scott Schedule" },
    { href: "/glossary#time-impact-analysis-tia", label: "Time Impact Analysis (TIA)" },
  ],
  "digital-forensics": [
    { href: "/guides/digital-forensics-evidence-guide", label: "Digital Forensics Evidence Guide" },
    { href: "/case-types/cybercrime-data-disputes", label: "Cybercrime & Data Disputes" },
    { href: "/case-types/ip-theft-misappropriation", label: "IP Theft & Misappropriation" },
    { href: "/sectors/technology-software-digital", label: "Technology & Software Sector" },
    { href: "/services#digital-forensics-ediscovery", label: "Digital Forensics & E-Discovery" },
    { href: "/glossary#digital-forensics", label: "Digital Forensics (Glossary)" },
    { href: "/glossary#e-discovery-electronic-disclosure", label: "E-Discovery" },
    { href: "/glossary#metadata-analysis", label: "Metadata Analysis" },
  ],
  "forensic-economics": [
    { href: "/guides/forensic-economics-competition-guide", label: "Forensic Economics & Competition Guide" },
    { href: "/case-types/competition-law-cartel-damages", label: "Competition Law & Cartel Damages" },
    { href: "/case-types/international-arbitration", label: "International Arbitration" },
    { href: "/sectors/energy-utilities", label: "Energy & Utilities Sector" },
    { href: "/services#economic-damages-analysis", label: "Economic Damages Analysis" },
    { href: "/glossary#forensic-economics", label: "Forensic Economics (Glossary)" },
    { href: "/glossary#econometric-analysis", label: "Econometric Analysis" },
    { href: "/glossary#chorz-w-factory-standard", label: "Chorzów Factory Standard" },
  ],
};

/** Per case-type links, docs/SEO-ARCHITECTURE.md Rule 3 */
const REQUIRED_CASE_TYPE_LINKS: Record<string, Link[]> = {
  "commercial-fraud-financial-crime": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
    { href: "/guides/forensic-accounting-disputes-guide", label: "Forensic Accounting Disputes Guide" },
    { href: "/services#fraud-investigation-asset-tracing", label: "Fraud Investigation & Asset Tracing" },
    { href: "/glossary#asset-tracing", label: "Asset Tracing" },
  ],
  "construction-engineering-disputes": [
    { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
    { href: "/guides/construction-quantum-forensic-guide", label: "Construction Quantum Guide" },
    { href: "/guides/hot-tubbing-concurrent-evidence-guide", label: "Hot-Tubbing Guide" },
    { href: "/sectors/construction-infrastructure", label: "Construction Sector" },
    { href: "/services#construction-quantum-delay", label: "Construction Quantum & Delay" },
    { href: "/glossary#scott-schedule", label: "Scott Schedule" },
    { href: "/glossary#hot-tubbing", label: "Hot-Tubbing" },
  ],
  "cybercrime-data-disputes": [
    { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
    { href: "/guides/digital-forensics-evidence-guide", label: "Digital Forensics Evidence Guide" },
    { href: "/services#digital-forensics-ediscovery", label: "Digital Forensics & E-Discovery" },
    { href: "/glossary#chain-of-custody-digital", label: "Chain of Custody (Digital)" },
  ],
  "competition-law-cartel-damages": [
    { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
    { href: "/guides/forensic-economics-competition-guide", label: "Competition Damages Guide" },
    { href: "/services#economic-damages-analysis", label: "Economic Damages Analysis" },
    { href: "/glossary#econometric-analysis", label: "Econometric Analysis" },
  ],
  "ip-theft-misappropriation": [
    { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/guides/digital-forensics-evidence-guide", label: "Digital Forensics Evidence Guide" },
    { href: "/guides/multi-discipline-forensic-teams", label: "Multi-Discipline Teams Guide" },
    { href: "/glossary#metadata-analysis", label: "Metadata Analysis" },
  ],
  "shareholder-commercial-disputes": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/guides/forensic-accounting-disputes-guide", label: "Forensic Accounting Disputes Guide" },
    { href: "/services#business-share-valuation", label: "Business & Share Valuation" },
    { href: "/glossary#saamco-principle", label: "SAAMCo Principle" },
  ],
  "professional-negligence": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/services#forensic-loss-quantification", label: "Forensic Loss Quantification" },
    { href: "/glossary#saamco-principle", label: "SAAMCo Principle" },
  ],
  "international-arbitration": [
    { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
    { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
    { href: "/guides/forensic-economics-competition-guide", label: "Forensic Economics Guide" },
    { href: "/glossary#iba-rules-on-evidence", label: "IBA Rules on Evidence" },
    { href: "/glossary#chorz-w-factory-standard", label: "Chorzów Factory Standard" },
  ],
  "matrimonial-financial-disputes": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/services#business-share-valuation", label: "Business & Share Valuation" },
    { href: "/qualifications", label: "Qualifications (FPR Part 25)" },
  ],
  "regulatory-investigations": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
    { href: "/services#regulatory-investigation-support", label: "Regulatory Investigation Support" },
  ],
};

/** Per guide links, docs/SEO-ARCHITECTURE.md Rule 4 */
const REQUIRED_GUIDE_LINKS: Record<string, Link[]> = {
  "forensic-accounting-disputes-guide": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/case-types/commercial-fraud-financial-crime", label: "Commercial Fraud & Financial Crime" },
    { href: "/case-types/shareholder-commercial-disputes", label: "Shareholder Disputes" },
    { href: "/services#forensic-loss-quantification", label: "Forensic Loss Quantification" },
  ],
  "construction-quantum-forensic-guide": [
    { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
    { href: "/case-types/construction-engineering-disputes", label: "Construction Disputes" },
    { href: "/services#construction-quantum-delay", label: "Construction Quantum & Delay" },
    { href: "/glossary#quantum", label: "Quantum" },
  ],
  "digital-forensics-evidence-guide": [
    { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
    { href: "/case-types/cybercrime-data-disputes", label: "Cybercrime & Data Disputes" },
    { href: "/case-types/ip-theft-misappropriation", label: "IP Theft" },
    { href: "/services#digital-forensics-ediscovery", label: "Digital Forensics & E-Discovery" },
  ],
  "forensic-economics-competition-guide": [
    { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
    { href: "/case-types/competition-law-cartel-damages", label: "Competition Law & Cartel Damages" },
    { href: "/services#economic-damages-analysis", label: "Economic Damages Analysis" },
    { href: "/glossary#econometric-analysis", label: "Econometric Analysis" },
  ],
  "hot-tubbing-concurrent-evidence-guide": [
    { href: "/case-types/construction-engineering-disputes", label: "Construction Disputes" },
    { href: "/case-types/international-arbitration", label: "International Arbitration" },
    { href: "/glossary#hot-tubbing", label: "Hot-Tubbing" },
    { href: "/glossary#concurrent-evidence-hot-tubbing", label: "Concurrent Evidence" },
    { href: "/glossary#joint-statement-experts", label: "Joint Statement (Experts)" },
  ],
  "multi-discipline-forensic-teams": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
    { href: "/case-types/commercial-fraud-financial-crime", label: "Commercial Fraud" },
    { href: "/case-types/ip-theft-misappropriation", label: "IP Theft" },
    { href: "/case-types/international-arbitration", label: "International Arbitration" },
  ],
};

/** Per sector links, docs/SEO-ARCHITECTURE.md content clusters */
const REQUIRED_SECTOR_LINKS: Record<string, Link[]> = {
  "construction-infrastructure": [
    { href: "/disciplines/forensic-engineering-quantum", label: "Forensic Engineering & Quantum" },
    { href: "/case-types/construction-engineering-disputes", label: "Construction Disputes" },
    { href: "/guides/construction-quantum-forensic-guide", label: "Construction Quantum Guide" },
  ],
  "financial-services-banking": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/case-types/commercial-fraud-financial-crime", label: "Commercial Fraud" },
    { href: "/case-types/shareholder-commercial-disputes", label: "Shareholder Disputes" },
  ],
  "technology-software-digital": [
    { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
    { href: "/case-types/cybercrime-data-disputes", label: "Cybercrime & Data" },
    { href: "/case-types/ip-theft-misappropriation", label: "IP Theft" },
  ],
  "energy-utilities": [
    { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
    { href: "/case-types/competition-law-cartel-damages", label: "Competition Law" },
    { href: "/guides/multi-discipline-forensic-teams", label: "Multi-Discipline Teams" },
  ],
  "professional-services": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/case-types/professional-negligence", label: "Professional Negligence" },
    { href: "/case-types/shareholder-commercial-disputes", label: "Shareholder Disputes" },
  ],
  "life-sciences-healthcare": [
    { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
    { href: "/case-types/regulatory-investigations", label: "Regulatory Investigations" },
    { href: "/services#regulatory-investigation-support", label: "Regulatory Investigation Support" },
  ],
};

export const HOMEPAGE_SEO_LINKS: Link[] = [
  DISCIPLINES,
  { href: "/what-is-forensic-expert-witness", label: "What Is a Forensic Expert Witness?" },
  { href: "/guides", label: "Solicitor Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/case-types", label: "Case Types" },
  GLOSSARY,
  QUALIFICATIONS,
  CONTACT,
];

function mergeLinks(
  existing: Link[] | undefined,
  required: Link[],
  standard: Link[] = []
): Link[] {
  const seen = new Set<string>();
  const result: Link[] = [];
  for (const link of [...(existing ?? []), ...required, ...standard]) {
    if (!seen.has(link.href)) {
      seen.add(link.href);
      result.push(link);
    }
  }
  return result;
}

export function mergeCaseTypeLinks(
  slug: string,
  pageLinks?: Link[]
): Link[] {
  return mergeLinks(
    pageLinks,
    REQUIRED_CASE_TYPE_LINKS[slug] ?? [],
    STANDARD_CASE_TYPE_LINKS
  );
}

export function mergeSectorLinks(slug: string, pageLinks?: Link[]): Link[] {
  return mergeLinks(
    pageLinks,
    REQUIRED_SECTOR_LINKS[slug] ?? [],
    STANDARD_SECTOR_LINKS
  );
}

export function mergeDisciplineLinks(
  slug: string,
  pageLinks?: Link[]
): Link[] {
  const serviceLinks = getAllServices()
    .slice(0, 2)
    .map((s) => ({
      href: `/services#${s.id}`,
      label: s.name,
    }));
  return mergeLinks(
    pageLinks,
    [...(REQUIRED_DISCIPLINE_LINKS[slug] ?? []), ...serviceLinks],
    STANDARD_DISCIPLINE_LINKS
  );
}

export function mergeGuideLinks(slug: string, pageLinks?: Link[]): Link[] {
  return mergeLinks(
    pageLinks,
    REQUIRED_GUIDE_LINKS[slug] ?? [],
    STANDARD_GUIDE_LINKS
  );
}

export function mergeBlogLinks(_slug: string, pageLinks?: Link[]): Link[] {
  return mergeLinks(pageLinks, [], STANDARD_BLOG_LINKS);
}
