import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ResponsiveTable } from "@/components/ui/ResponsiveTable";
import { ServiceFAQs } from "@/components/ServiceFAQs";
import {
  breadcrumbSchema,
  faqPageSchema,
  organizationSchema,
  serviceNode,
} from "@/lib/schema";
import { getAllServices } from "@/data/services";

export const metadata = createMetadata({
  title: "Forensic Expert Witness Services | All Disciplines",
  description:
    "Forensic expert witness services across all disciplines: forensic accounting, forensic engineering quantum, digital forensics, forensic economics, and expert witness reports for disputes worldwide.",
  path: "/services",
});

export default function ServicesPage() {
  const services = getAllServices();
  const allServiceFaqs = services.flatMap((s) => s.faqs);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      ...services.map((s) => serviceNode(s.id, s.name, s.description)),
    ],
  };

  return (
    <>
      <JsonLd
        data={[
          schema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqPageSchema(allServiceFaqs),
        ]}
      />
      <PageHero
        title="Forensic Expert Witness Services"
        subtitle="From forensic loss quantification and fraud investigation to construction quantum, digital forensics, economic damages analysis, and expert determination, our multi-discipline network supports legal teams across domestic litigation and international arbitration."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      {services.map((service, idx) => (
        <Section key={service.id} alt={idx % 2 === 1} id={service.id}>
          <div className="min-w-0">
            <h2 className="text-xl font-bold text-heading sm:text-2xl lg:text-3xl">
              {service.name}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-body sm:mt-4 sm:text-base">
              {service.description}
            </p>
            <h3 className="mt-8 text-lg font-semibold text-heading sm:text-xl">
              Methodology
            </h3>
            <ResponsiveTable className="mt-4">
              <table className="w-full min-w-[280px] border-collapse text-sm sm:min-w-[600px]">
                <thead>
                  <tr className="bg-section-alt">
                    <th className="border border-border px-3 py-2 text-left text-xs font-semibold text-heading sm:px-4 sm:py-3 sm:text-sm">
                      Phase
                    </th>
                    <th className="border border-border px-3 py-2 text-left text-xs font-semibold text-heading sm:px-4 sm:py-3 sm:text-sm">
                      What We Do
                    </th>
                    <th className="border border-border px-3 py-2 text-left text-xs font-semibold text-heading sm:px-4 sm:py-3 sm:text-sm">
                      Deliverable
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {service.methodology.map((row) => (
                    <tr key={row.phase}>
                      <td className="border border-border px-3 py-2 align-top text-xs font-medium text-heading sm:px-4 sm:py-3 sm:text-sm">
                        {row.phase}
                      </td>
                      <td className="border border-border px-3 py-2 align-top text-xs text-body sm:px-4 sm:py-3 sm:text-sm">
                        {row.whatWeDo}
                      </td>
                      <td className="border border-border px-3 py-2 align-top text-xs text-body sm:px-4 sm:py-3 sm:text-sm">
                        {row.deliverable}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ResponsiveTable>
            <p className="mt-4 text-sm text-body">
              Related discipline:{" "}
              <Link
                href={`/disciplines/${service.relatedDiscipline}`}
                className="text-accent hover:underline"
              >
                View discipline →
              </Link>
              {" · "}
              Related case type:{" "}
              <Link
                href={`/case-types/${service.relatedCaseType}`}
                className="text-accent hover:underline"
              >
                View case type →
              </Link>
            </p>
            <ServiceFAQs faqs={service.faqs} serviceId={service.id} />
          </div>
        </Section>
      ))}
      <Section alt>
        <RelatedLinks
          links={[
            { href: "/forensic-disciplines", label: "Forensic Disciplines Guide" },
            { href: "/case-types", label: "All Case Types" },
            { href: "/how-to-instruct", label: "How to Instruct" },
            { href: "/contact", label: "Instruct an Expert" },
          ]}
        />
      </Section>
      <CTASection />
    </>
  );
}
