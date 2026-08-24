import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { SiteEmailLink } from "@/components/SiteEmailLink";

export const metadata: Metadata = {
  title: "Page Not Found | DisputeForensic.com",
  description: "The page you requested could not be found.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/disciplines", label: "Disciplines" },
  { href: "/forensic-disciplines", label: "Forensic Disciplines" },
  { href: "/case-types", label: "Case Types" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <PageHero
        title="Page Not Found"
        subtitle="The page you are looking for does not exist or may have been moved."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "404" },
        ]}
      />
      <Section>
        <div className="mx-auto min-w-0 max-w-xl text-center">
          <p
            className="text-7xl font-bold leading-none text-accent sm:text-8xl"
            aria-hidden
          >
            404
          </p>
          <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">
            Try one of the links below, return to the homepage, or contact us if
            you need help finding forensic expert witness resources.
          </p>

          <nav
            className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3"
            aria-label="Helpful links"
          >
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-[44px] items-center rounded-full border border-border bg-section-alt px-4 py-2 text-sm font-medium text-body transition-colors hover:border-accent hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="mt-8 text-sm text-body">
            Email:{" "}
            <SiteEmailLink className="font-medium text-accent hover:underline" />
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex min-h-[44px] w-full items-center justify-center rounded bg-accent px-8 py-3 font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Return to Homepage
          </Link>
        </div>
      </Section>
    </>
  );
}
