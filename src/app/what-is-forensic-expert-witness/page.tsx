import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { cprPart35Block } from "@/data/shared-content";
import { getAllDisciplines } from "@/data/disciplines";

export const metadata = createMetadata({
  title:
    "What Is a Forensic Expert Witness? | Role, Disciplines & Expert Duties",
  description:
    "A forensic expert witness applies scientific or specialist methodology to disputes and litigation. Forensic accounting, engineering, digital forensics, and economics explained for legal teams worldwide.",
  path: "/what-is-forensic-expert-witness",
});

export default function WhatIsForensicExpertWitnessPage() {
  const disciplines = getAllDisciplines();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          {
            name: "What Is a Forensic Expert Witness?",
            path: "/what-is-forensic-expert-witness",
          },
        ])}
      />
      <PageHero
        title="What Is a Forensic Expert Witness?"
        subtitle="How forensic experts differ from lay witnesses, the four core disciplines, and how expert duties apply in domestic courts and international arbitration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "What Is a Forensic Expert Witness?" },
        ]}
      />
      <Section>
        <div className="prose-content mx-auto max-w-3xl">
          <h2>Definition</h2>
          <p>
            A forensic expert witness is a qualified specialist who applies the
            rigorous methodology and professional standards of their discipline,
            whether accounting, engineering, computing, or economics, to provide
            independent expert evidence in legal proceedings. The word
            &quot;forensic&quot; derives from the Latin forensis (of the forum),
            meaning knowledge presented in a public, legal setting for the
            resolution of disputes.
          </p>
          <p>
            Unlike a lay witness who can only testify about facts they personally
            observed, a forensic expert witness may express opinions within their
            area of expertise, supported by analysis, investigation, and
            professional judgment. Forensic expert witnesses owe their primary
            duty to the court or tribunal (for example under CPR Part 35 in
            England and Wales, or IBA Rules in international arbitration), not
            to the instructing party.
          </p>

          <h2>How Forensic Experts Differ from Other Experts</h2>
          <p>
            Forensic expert witnesses combine deep disciplinary expertise with
            the procedural requirements of litigation. They produce written
            reports that comply with CPR Part 35 (or IBA Rules in international
            arbitration), attend joint expert meetings, produce joint statements,
            and may give oral evidence including concurrent evidence
            (hot-tubbing) at trial. Their analysis must be objective,
            independent, and distinguish clearly between facts and opinions.
          </p>

          <h2>When Are Forensic Expert Witnesses Needed?</h2>
          <ul>
            <li>
              Financial disputes requiring loss quantification, fraud
              investigation, or business valuation
            </li>
            <li>
              Construction and engineering disputes requiring quantum, delay, or
              technical failure analysis
            </li>
            <li>
              Disputes turning on electronic evidence, data theft, cybercrime,
              IP misappropriation, or e-discovery
            </li>
            <li>
              Competition law damages claims, regulatory proceedings, or
              investment treaty arbitration requiring economic analysis
            </li>
            <li>
              Complex disputes requiring coordinated multi-discipline forensic
              teams
            </li>
          </ul>

          <h2>CPR Part 35 & Expert Duties</h2>
          {cprPart35Block.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <p>
            <Link href="/qualifications" className="text-accent">
              Expert qualifications and CPR compliance →
            </Link>
          </p>

          <h2>The Four Core Forensic Disciplines</h2>
          <p>
            DisputeForensic.com covers all four core forensic expert witness
            disciplines. Select a discipline for detailed guidance on credentials,
            typical disputes, and when to instruct:
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
          {disciplines.map((d) => (
            <Card
              key={d.slug}
              title={d.title.replace(" Expert Witness UK", "")}
              description={d.paragraphs[0].slice(0, 120) + "…"}
              href={`/disciplines/${d.slug}`}
            />
          ))}
        </div>
        <div className="prose-content mx-auto mt-10 max-w-3xl">
          <p>
            For a comprehensive overview of all disciplines and when multiple
            experts are needed, see our{" "}
            <Link href="/forensic-disciplines" className="text-accent">
              Forensic Expert Witness Disciplines guide
            </Link>
            . To instruct an expert for your dispute,{" "}
            <Link href="/contact" className="text-accent">
              submit your case details
            </Link>
            .
          </p>
        </div>
      </Section>
      <CTASection />
    </>
  );
}
