import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import {
  FORENSIC_DISCIPLINES_PILLAR_H1,
  FORENSIC_DISCIPLINES_PILLAR_META,
  getForensicDisciplinesPillarSections,
} from "@/data/forensic-disciplines-pillar";

export const metadata = createMetadata({
  title: FORENSIC_DISCIPLINES_PILLAR_META.title,
  description: FORENSIC_DISCIPLINES_PILLAR_META.description,
  path: "/forensic-disciplines",
});

function renderSectionContent(content: string) {
  return content.split(/\n\n+/).map((part, i) => {
    const trimmed = part.trim();
    if (trimmed.startsWith("<table>")) {
      return (
        <ResponsiveTable key={i}>
          <div
            className="prose-content"
            dangerouslySetInnerHTML={{ __html: trimmed }}
          />
        </ResponsiveTable>
      );
    }
    return (
      <p key={i} className="text-body leading-relaxed">
        {trimmed}
      </p>
    );
  });
}

export default function ForensicDisciplinesPage() {
  const sections = getForensicDisciplinesPillarSections();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Forensic Disciplines", path: "/forensic-disciplines" },
          ]),
          articleSchema({
            headline: FORENSIC_DISCIPLINES_PILLAR_H1,
            description: FORENSIC_DISCIPLINES_PILLAR_META.description,
            path: "/forensic-disciplines",
            aboutServiceId: "forensic-loss-quantification",
          }),
        ]}
      />
      <PageHero
        title={FORENSIC_DISCIPLINES_PILLAR_H1}
        subtitle="The complete guide to forensic expert witness disciplines for litigation and arbitration worldwide: forensic accounting, forensic engineering, digital forensics, forensic economics, and when each is needed."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Forensic Disciplines" },
        ]}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2>{section.heading}</h2>
              {renderSectionContent(section.content)}
            </div>
          ))}

          <nav
            className="mt-10 rounded-[8px] border border-border bg-section-alt p-6"
            aria-label="Related resources"
          >
            <h2 className="text-lg font-semibold text-heading">
              Explore Further
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              <li>
                <Link href="/disciplines/forensic-accounting" className="text-sm text-accent hover:underline">
                  Forensic Accounting →
                </Link>
              </li>
              <li>
                <Link href="/disciplines/forensic-engineering-quantum" className="text-sm text-accent hover:underline">
                  Forensic Engineering & Quantum →
                </Link>
              </li>
              <li>
                <Link href="/disciplines/digital-forensics" className="text-sm text-accent hover:underline">
                  Digital Forensics →
                </Link>
              </li>
              <li>
                <Link href="/disciplines/forensic-economics" className="text-sm text-accent hover:underline">
                  Forensic Economics →
                </Link>
              </li>
              <li>
                <Link href="/disciplines" className="text-sm text-accent hover:underline">
                  All Disciplines →
                </Link>
              </li>
              <li>
                <Link href="/case-types" className="text-sm text-accent hover:underline">
                  Case Types →
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-accent hover:underline">
                  Forensic Services →
                </Link>
              </li>
              <li>
                <Link href="/glossary" className="text-sm text-accent hover:underline">
                  Glossary →
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-sm text-accent hover:underline">
                  Solicitor Guides →
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-accent hover:underline">
                  Instruct an Expert →
                </Link>
              </li>
            </ul>
          </nav>
        </article>
      </Section>
      <CTASection />
    </>
  );
}
