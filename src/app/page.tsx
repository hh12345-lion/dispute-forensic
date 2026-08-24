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
  ["Expert witness services", "8", "Full dispute lifecycle"],
  ["Multi-discipline matching", "Yes", "Coordinated expert teams"],
  ["International forums", "ICC, LCIA, ICSID", "UNCITRAL and domestic courts"],
  ["Response time", "1 business day", "Enquiry acknowledgement"],
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
        subtitle="DisputeForensic.com is a multi-discipline forensic expert witness portal, connecting legal teams with qualified experts across forensic accounting, forensic engineering and quantum, digital forensics, and forensic economics."
      />
      <Section>
        <p className="mx-auto max-w-2xl text-center text-body leading-relaxed">
          {SITE_SCOPE}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] w-full items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Submit Enquiry
          </Link>
          <Link
            href="/forensic-disciplines"
            className="inline-flex min-h-[44px] w-full items-center justify-center border border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-section-alt sm:w-auto"
          >
            Explore Disciplines
          </Link>
        </div>
      </Section>

      <Section alt>
        <h2 className="font-serif text-balance text-2xl font-semibold text-heading sm:text-3xl">
          Four Forensic Expert Witness Disciplines
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-body">
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
        <h2 className="font-serif text-balance text-2xl font-semibold text-heading sm:text-3xl">
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
        <h2 className="font-serif text-balance text-2xl font-semibold text-heading sm:text-3xl">
          Forensic Expert Witness: Key Facts
        </h2>
        <ResponsiveTable className="mt-6">
          <table className="w-full min-w-[600px] border-collapse text-sm">
            <thead>
              <tr className="bg-section-warm">
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
      </Section>

      <Section>
        <h2 className="font-serif text-balance text-2xl font-semibold text-heading sm:text-3xl">
          A Global Multi-Discipline Forensic Portal
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-body">
          Whether your dispute sits in a domestic court or an international
          tribunal, DisputeForensic.com matches you with the right expert,
          forensic accountant, quantum specialist, digital forensics analyst, or
          forensic economist. We work with legal teams across jurisdictions.{" "}
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
