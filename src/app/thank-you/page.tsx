import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata = createMetadata({
  title: "Thank You | DisputeForensic.com",
  description: "Your enquiry has been received.",
  path: "/thank-you",
  noindex: true,
  nofollow: true,
});

const nextSteps = [
  {
    title: "Review",
    text: "We review your enquiry and match you with a qualified forensic expert across the relevant discipline.",
  },
  {
    title: "Response",
    text: "You will hear from us within one business day at the email address you provided.",
  },
  {
    title: "Instruction",
    text: "If appropriate, we arrange a preliminary discussion before formal instruction.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ])}
      />
      <PageHero
        title="Thank You"
        subtitle="Your enquiry has been received successfully."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Thank You" },
        ]}
      />
      <Section>
        <div className="mx-auto min-w-0 max-w-2xl text-center">
          <div
            className="mx-auto flex h-14 w-14 items-center justify-center border-2 border-accent text-xl text-accent"
            aria-hidden
          >
            ✓
          </div>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            A member of our team will review your enquiry and contact you
            shortly. For urgent matters, email{" "}
            <SiteEmailLink className="font-medium text-accent hover:underline" />.
          </p>

          <ol className="mt-10 space-y-4 text-left sm:space-y-6">
            {nextSteps.map((step, i) => (
              <li
                key={step.title}
                className="flex min-w-0 gap-4 border border-border bg-section-alt p-4 sm:p-5"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-primary text-sm font-bold text-primary">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-heading">{step.title}</p>
                  <p className="mt-1 text-sm text-body sm:text-base">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center justify-center border border-primary px-8 py-3 text-sm font-semibold text-primary hover:bg-section-alt"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
