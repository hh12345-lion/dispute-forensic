/**
 * Convert assumptions-in-evidence markdown into src/data/blog.ts
 * Run: npx tsx scripts/import-blog-md.ts [path-to-md]
 */
import fs from "fs";
import path from "path";

const mdPath =
  process.argv[2] ||
  path.join(
    process.env.USERPROFILE || "",
    "Downloads",
    "how-forensic-experts-identify-assumptions-in-evidence.md",
  );

const raw = fs.readFileSync(mdPath, "utf8");
const lines = raw.replace(/\r\n/g, "\n").split("\n");

type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "disclaimer"; text: string };

function rewriteLinks(text: string): string {
  return text
    .replace(
      /https:\/\/(?:www\.)?disputeforensic\.com\/services\/forensic-accounting\/?/g,
      "/disciplines/forensic-accounting",
    )
    .replace(
      /https:\/\/(?:www\.)?disputeforensic\.com\/services\/?/g,
      "/services",
    )
    .replace(
      /https:\/\/(?:www\.)?disputeforensic\.com\/guides\/?/g,
      "/guides",
    );
}

const blocks: Block[] = [];
let i = 0;
let title = "";
let lastReviewed = "September 2026";

while (i < lines.length) {
  const line = lines[i];
  if (line.startsWith("# ")) {
    title = line.slice(2).trim();
    i++;
    continue;
  }
  if (line.startsWith("## ")) {
    blocks.push({ type: "h2", text: line.slice(3).trim() });
    i++;
    continue;
  }
  if (line.startsWith("### ")) {
    blocks.push({ type: "h3", text: line.slice(4).trim() });
    i++;
    continue;
  }
  if (line.startsWith("- ")) {
    const items: string[] = [];
    while (i < lines.length && lines[i].startsWith("- ")) {
      items.push(rewriteLinks(lines[i].slice(2).trim()));
      i++;
    }
    blocks.push({ type: "ul", items });
    continue;
  }
  if (line.startsWith("**Disclaimer:**")) {
    blocks.push({
      type: "disclaimer",
      text: rewriteLinks(line.replace(/^\*\*Disclaimer:\*\*\s*/, "").trim()),
    });
    i++;
    continue;
  }
  if (line.startsWith("*Last Reviewed:")) {
    lastReviewed = line
      .replace(/^\*Last Reviewed:\s*/, "")
      .replace(/\*$/, "")
      .trim();
    i++;
    continue;
  }
  if (!line.trim()) {
    i++;
    continue;
  }
  const paras: string[] = [];
  while (
    i < lines.length &&
    lines[i].trim() &&
    !lines[i].startsWith("#") &&
    !lines[i].startsWith("- ") &&
    !lines[i].startsWith("*") &&
    !lines[i].startsWith("**Disclaimer")
  ) {
    paras.push(lines[i].trim());
    i++;
  }
  if (paras.length) {
    blocks.push({ type: "p", text: rewriteLinks(paras.join(" ")) });
  }
}

const excerptBlock = blocks.find((b) => b.type === "p") as
  | { type: "p"; text: string }
  | undefined;
const excerpt = excerptBlock?.text ?? "";

const metaDescription =
  "How forensic experts identify and explain assumptions in expert evidence for litigation and arbitration — incomplete records, counterfactuals, sensitivity analysis, and clear reporting for legal teams.";

const out = `import type { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "how-forensic-experts-identify-assumptions-in-evidence",
    title: ${JSON.stringify(title)},
    h1: ${JSON.stringify(title)},
    metaTitle: "Assumptions in Expert Evidence | DisputeForensic Blog",
    metaDescription: ${JSON.stringify(metaDescription)},
    datePublished: "2026-09-17",
    dateModified: "2026-09-17",
    lastReviewed: ${JSON.stringify(lastReviewed)},
    excerpt: ${JSON.stringify(excerpt.slice(0, 220) + (excerpt.length > 220 ? "…" : ""))},
    image: "/blog/assumptions-expert-evidence.jpg",
    imageAlt: "Professional reviewing documents and data tables during forensic expert evidence analysis",
    relatedLinks: [
      { href: "/blog", label: "All Blog Posts" },
      { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
      { href: "/guides/forensic-accounting-disputes-guide", label: "Forensic Accounting Disputes Guide" },
      { href: "/how-to-instruct", label: "How to Instruct" },
      { href: "/guides", label: "All Guides" },
      { href: "/contact", label: "Contact" },
    ],
    blocks: ${JSON.stringify(blocks, null, 6).replace(/^/gm, "    ").trimStart()},
  },
];

export const blogSlugs = blogPosts.map((p) => p.slug);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
`;

const dest = path.join(process.cwd(), "src/data/blog.ts");
fs.writeFileSync(dest, out);
console.log("Wrote", dest, "blocks:", blocks.length);
