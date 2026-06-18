import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms/ContactForm";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata = createMetadata({
  title: "Instruct a Forensic Expert Witness | DisputeForensic.com",
  description:
    "Submit your case details to be matched with the right forensic expert witness for your discipline and dispute type. Serving legal teams worldwide. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "All 4 forensic disciplines covered",
  "Domestic litigation and international arbitration",
  "CPR Part 35, IBA Rules, and equivalent standards",
  "SJE and party-appointed available",
  "Response within 1 business day",
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHero
        title="Instruct a Forensic Expert Witness"
        subtitle="Tell us your dispute type, jurisdiction, and forensic discipline needed. We match you with the right expert from our multi-discipline network. All enquiries are treated confidentially, wherever you instruct from."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <p className="mx-auto mb-10 max-w-3xl text-body leading-relaxed">
          Whether you need a forensic accountant for loss quantification, a
          quantum expert for a construction claim, a digital forensics specialist
          for data theft evidence, or a forensic economist for competition
          damages, submit your case details and we will match you with a
          qualified expert.{" "}
          <Link href="/how-to-instruct" className="text-accent underline">
            How to instruct guide →
          </Link>
        </p>

        <div className="grid min-w-0 gap-8 lg:grid-cols-3 lg:gap-10">
          <div className="min-w-0 lg:order-1 lg:col-span-2">
            <ContactForm />
          </div>
          <aside className="min-w-0 rounded-[8px] border border-border bg-section-alt p-5 sm:p-6 lg:order-2">
            <h2 className="text-lg font-bold text-heading">
              Why Instruct Through Us
            </h2>
            <ul className="mt-4 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-body">
                  <span className="text-accent" aria-hidden>
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-body">
              Email us directly:{" "}
              <SiteEmailLink className="font-medium text-accent hover:underline" />
            </p>
            <p className="mt-4 text-sm text-body">
              Not sure which discipline you need?{" "}
              <Link href="/forensic-disciplines" className="text-accent underline">
                View all disciplines
              </Link>{" "}
              or{" "}
              <Link href="/glossary" className="text-accent underline">
                browse the glossary
              </Link>
              .
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
