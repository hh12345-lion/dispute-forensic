import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { sjeVsPaeBlock, hotTubbingIntroBlock } from "@/data/shared-content";

export const metadata = createMetadata({
  title: "How to Instruct a Forensic Expert Witness | Step-by-Step Guide",
  description:
    "Step-by-step guide for legal teams on instructing the right forensic expert witness: identifying the discipline, credentials, SJE vs PAE, and letters of instruction. Domestic and international disputes.",
  path: "/how-to-instruct",
});

const steps = [
  {
    title: "What Is the Core Issue?",
    content:
      "Identify the primary evidential question. Financial loss, fraud, or valuation → Forensic Accounting. Technical failure or construction claims → Forensic Engineering & Quantum. Electronic evidence, data theft, or e-discovery → Digital Forensics. Market impact, competition damages, or investment treaty quantum → Forensic Economics. Complex disputes may require multiple disciplines.",
  },
  {
    title: "What Proceedings?",
    content:
      "UK civil court proceedings require CPR Part 35 compliant experts. Family financial remedy cases require FPR Part 25 compliance. International arbitration follows IBA Rules on Evidence (Articles 5 and 6). Regulatory proceedings (FCA, CMA) and statutory adjudication have distinct timetables and procedural requirements.",
  },
  {
    title: "SJE or Party-Appointed?",
    content:
      "Check whether the court has directed a Single Joint Expert (SJE) or whether each party will appoint their own expert (PAE). SJEs require a joint letter of instruction; PAEs require separate instructions with clear scope boundaries. Both arrangements require the expert's primary duty to the court.",
  },
  {
    title: "Sector Expertise",
    content:
      "Does the expert understand the sector's specific dynamics, construction contract forms, financial services regulation, technology IP structures, or energy project economics? Sector experience significantly improves report quality and credibility under cross-examination.",
  },
  {
    title: "Credentials Check",
    content:
      "Verify discipline-specific credentials: ACA/CFE for forensic accounting; MRICS/CEng for construction quantum; FBCS/EnCE for digital forensics; PhD Economics for competition and treaty work. Confirm prior testimony experience and professional indemnity insurance.",
  },
  {
    title: "Letter of Instruction",
    content:
      "Prepare a clear letter of instruction setting out: the specific questions for the expert; documents provided; assumptions to be made; fee agreement and timetable; and confirmation that the expert understands their overriding duty to the court under CPR Part 35.",
  },
  {
    title: "Documents to Provide",
    content:
      "Provide all relevant documents at the outset, pleadings, key contracts, financial records, programme data, or electronic evidence preservation protocols. In digital forensics cases, issue preservation letters promptly to prevent loss of metadata and electronic evidence.",
  },
];

const timeline = [
  ["Day 1–3", "Enquiry submitted", "Initial response within 1 business day"],
  ["Week 1", "Discipline assessment", "Expert profile and fee estimate agreed"],
  ["Week 1–2", "Instruction letter signed", "Documents provided and scope confirmed"],
  ["Weeks 2–8", "Analysis and investigation", "Interim queries addressed"],
  ["Weeks 4–12", "Draft expert report", "Comments incorporated"],
  ["Final", "Signed report exchanged", "Joint meeting and trial preparation"],
];

const redFlags = [
  "No active professional practice in the relevant discipline",
  "Cannot provide examples of CPR Part 35 or IBA Rules compliant reports",
  "Unwilling to confirm independence and duty to the court in writing",
  "No professional indemnity insurance",
  "Attempts to opine outside their area of expertise across multiple disciplines",
  "Fee estimate significantly below market without explanation",
  "No prior court, tribunal, or arbitration testimony experience",
];

export default function HowToInstructPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "How to Instruct", path: "/how-to-instruct" },
        ])}
      />
      <PageHero
        title="How to Instruct a Forensic Expert Witness"
        subtitle="A step-by-step guide for legal teams on identifying the right forensic discipline, vetting credentials, preparing letters of instruction, and managing multi-discipline expert teams in domestic courts and international arbitration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How to Instruct" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <p className="text-sm font-semibold text-accent">
                Step {i + 1}
              </p>
              <h2 className="mt-2 text-lg font-bold text-heading">
                {step.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {step.content}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mx-auto mt-12 max-w-3xl text-xl font-bold text-heading sm:text-2xl">
          Typical Engagement Timeline
        </h2>
        <ResponsiveTable className="mx-auto mt-4 max-w-3xl">
          <table className="w-full min-w-[500px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Stage
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Activity
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Outcome
                </th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row) => (
                <tr key={row[0]}>
                  <td className="border border-border px-4 py-3 text-body">
                    {row[0]}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {row[1]}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>

        <article className="prose-content mx-auto mt-10 max-w-3xl">
          <h2>Red Flags When Selecting an Expert</h2>
          <ul>
            {redFlags.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>

          <h2>{sjeVsPaeBlock.heading}</h2>
          {sjeVsPaeBlock.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}

          <h2>Preparing for Concurrent Evidence (Hot-Tubbing)</h2>
          {hotTubbingIntroBlock.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <p>
            <Link
              href="/guides/hot-tubbing-concurrent-evidence-guide"
              className="text-accent"
            >
              Full hot-tubbing guide →
            </Link>{" "}
            |{" "}
            <Link href="/qualifications" className="text-accent">
              Qualifications →
            </Link>
          </p>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
