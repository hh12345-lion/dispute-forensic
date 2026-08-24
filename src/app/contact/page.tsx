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
    "Submit your case details to be matched with the right forensic expert witness. Serving legal teams worldwide. Response within 1 business day.",
  path: "/contact",
});

const trustPoints = [
  "All four forensic disciplines covered",
  "Domestic litigation and international arbitration",
  "Confidential enquiry handling",
  "Response within one business day",
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
        subtitle="Tell us about your dispute and the forensic discipline you need. We match you with a qualified expert from our global network. All enquiries are treated confidentially."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <Section>
        <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0">
            <ContactForm />
          </div>
          <aside className="min-w-0 border border-border bg-section-alt p-5 sm:p-6">
            <h2 className="font-serif text-lg font-semibold text-heading">
              What happens next
            </h2>
            <ul className="mt-4 space-y-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-body">
                  <span className="mt-0.5 text-accent" aria-hidden>
                    —
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
              Not sure which discipline?{" "}
              <Link href="/forensic-disciplines" className="text-accent underline">
                View all disciplines
              </Link>
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
