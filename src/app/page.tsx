import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import {
  organizationSchema,
  professionalServiceSchema,
  serviceNode,
  websiteSchema,
} from "@/lib/schema";
import { getAllDisciplines } from "@/data/disciplines";
import { getAllServices, getServiceNames } from "@/data/services";
import { HOMEPAGE_SEO_LINKS } from "@/lib/seo-internal-links";
import { SITE_SCOPE } from "@/lib/site";

export const metadata = createMetadata({
  title:
    "Forensic Expert Witness | All Four Disciplines | DisputeForensic",
  description:
    "Connect with forensic expert witnesses across accounting, engineering, digital forensics, and economics for litigation and international arbitration worldwide.",
  path: "/",
});

const stats = [
  ["Core forensic disciplines", "4", "Accounting, engineering, digital, economics"],
  ["Geographic coverage", "Worldwide", "Domestic courts and international arbitration"],
  ["Court framework (civil)", "CPR Part 35", "Civil Procedure Rules (UK)"],
  ["Court framework (family)", "FPR Part 25", "Family Procedure Rules (UK)"],
  ["Arbitration evidence rules", "IBA Rules Art 5/6", "ICC, LCIA, ICSID, UNCITRAL"],
  ["Typical hourly rate range", "£150–£600+/hr", "Discipline-dependent"],
  ["Expert witness services", "8", "Full dispute lifecycle"],
  ["Multi-discipline matching", "Yes", "Coordinated expert teams"],
];

export default function HomePage() {
  const services = getAllServices();
  const disciplines = getAllDisciplines();

  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      professionalServiceSchema(getServiceNames()),
      websiteSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd data={homepageSchema} />
      <PageHero
        title="Forensic Expert Witness Services for Legal Teams Worldwide"
        subtitle="DisputeForensic.com is a multi-discipline forensic expert witness portal, connecting solicitors, counsel, in-house legal teams, and international arbitration practitioners with qualified experts across forensic accounting, forensic engineering and quantum, digital forensics, and forensic economics."
      />
      <Section>
        <p className="mx-auto max-w-3xl text-center text-body leading-relaxed">
          {SITE_SCOPE}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-[#1d4ed8] sm:w-auto"
          >
            Instruct an Expert
          </Link>
          <Link
            href="/forensic-disciplines"
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded border-2 border-primary px-8 py-3 font-semibold text-primary transition-colors hover:bg-section-alt sm:w-auto"
          >
            Explore All Disciplines
          </Link>
        </div>
      </Section>

      <Section alt>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          Four Forensic Expert Witness Disciplines
        </h2>
        <p className="mt-3 max-w-3xl text-body leading-relaxed">
          Complex disputes require the right forensic discipline, or a
          coordinated multi-discipline team. DisputeForensic.com covers all four
          core forensic expert witness disciplines under one roof.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((d) => (
            <Card
              key={d.slug}
              title={d.title.replace(" Expert Witness UK", "")}
              description={d.paragraphs[0].slice(0, 140) + "…"}
              href={`/disciplines/${d.slug}`}
            />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          Forensic Expert Witness Services
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card
              key={s.id}
              title={s.name}
              description={s.description.slice(0, 120) + "…"}
              href={`/services#${s.id}`}
            />
          ))}
        </div>
      </Section>

      <Section alt>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          Forensic Expert Witness: Key Facts
        </h2>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-alt">
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Metric
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Figure
                </th>
                <th className="border border-border px-4 py-3 text-left font-semibold text-heading">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {stats.map(([metric, figure, source]) => (
                <tr key={metric}>
                  <td className="border border-border px-4 py-3 text-body">
                    {metric}
                  </td>
                  <td className="border border-border px-4 py-3 font-medium text-heading">
                    {figure}
                  </td>
                  <td className="border border-border px-4 py-3 text-body">
                    {source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ResponsiveTable>
        <p className="mt-4 text-sm text-body/80">
          Rates are indicative and vary by discipline, seniority, jurisdiction,
          and case complexity. Expert duties and procedural rules depend on the
          forum (for example CPR Part 35 in England and Wales, or IBA Rules in
          international arbitration).
        </p>
      </Section>

      <Section>
        <h2 className="text-balance text-2xl font-bold text-heading sm:text-3xl">
          A Global Multi-Discipline Forensic Portal
        </h2>
        <p className="mt-4 max-w-3xl text-body leading-relaxed">
          Whether your dispute sits in a domestic court or an international
          tribunal, DisputeForensic.com matches you with the right expert,
          forensic accountant, quantum specialist, digital forensics analyst, or
          forensic economist. We work with legal teams across jurisdictions; UK
          procedural references on this site illustrate one common framework,
          not an exclusive geographic focus.{" "}
          <Link href="/what-is-forensic-expert-witness" className="text-accent underline">
            What is a forensic expert witness?
          </Link>{" "}
          |{" "}
          <Link href="/case-types" className="text-accent underline">
            Case types
          </Link>{" "}
          |{" "}
          <Link href="/services" className="text-accent underline">
            All services
          </Link>{" "}
          |{" "}
          <Link href="/guides" className="text-accent underline">
            Solicitor guides
          </Link>
        </p>
        <RelatedLinks links={HOMEPAGE_SEO_LINKS} title="Explore Further" />
      </Section>

      <CTASection />
    </>
  );
}
