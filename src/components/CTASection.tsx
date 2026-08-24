import Link from "next/link";
import { SiteEmailLink } from "@/components/SiteEmailLink";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
}

export function CTASection({
  title = "Need a forensic expert witness?",
  description = "Tell us about your dispute and we will match you with the right specialist across accounting, engineering, digital forensics, or economics. Response within one business day.",
  buttonLabel = "Submit Enquiry",
}: CTASectionProps) {
  return (
    <section className="border-y border-border bg-primary py-12 sm:py-14 md:py-16">
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-xl font-semibold text-white sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 text-sm leading-relaxed text-white/75 sm:text-base">
            {description}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center border border-accent bg-accent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {buttonLabel}
          </Link>
          <p className="mt-6 text-sm text-white/60">
            Or email{" "}
            <SiteEmailLink className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white" />
          </p>
        </div>
      </div>
    </section>
  );
}
