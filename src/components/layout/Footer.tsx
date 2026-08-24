import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { footerCopyright, footerDisclaimer } from "@/data/nav";

const disciplineChips = [
  { href: "/disciplines/forensic-accounting", label: "Forensic Accounting" },
  { href: "/disciplines/forensic-engineering-quantum", label: "Engineering & Quantum" },
  { href: "/disciplines/digital-forensics", label: "Digital Forensics" },
  { href: "/disciplines/forensic-economics", label: "Forensic Economics" },
];

const caseTypeChips = [
  { href: "/case-types/commercial-fraud-financial-crime", label: "Commercial Fraud" },
  { href: "/case-types/construction-engineering-disputes", label: "Construction" },
  { href: "/case-types/competition-law-cartel-damages", label: "Competition Law" },
  { href: "/case-types/cybercrime-data-disputes", label: "Cybercrime & Data" },
  { href: "/case-types/international-arbitration", label: "Intl. Arbitration" },
  { href: "/case-types", label: "All case types" },
];

const resourceLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/glossary", label: "Glossary" },
  { href: "/how-to-instruct", label: "How to Instruct" },
  { href: "/forensic-disciplines", label: "Disciplines overview" },
  { href: "/contact", label: "Contact" },
];

function ChipLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center border border-white/15 px-3 py-1.5 text-xs text-white/75 transition-colors hover:border-accent/60 hover:bg-white/5 hover:text-white"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-primary text-white">
      <div className="mx-auto min-w-0 max-w-[90rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-serif text-lg font-semibold text-white"
          >
            <span className="text-accent" aria-hidden>
              ◆
            </span>
            DisputeForensic
          </Link>
          <span className="hidden text-white/20 sm:inline" aria-hidden>
            /
          </span>
          <SiteEmailLink className="text-sm text-white/60 hover:text-accent" />
        </div>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
          Global forensic expert witness matching for legal teams — accounting,
          engineering, digital forensics, and economics.
        </p>

        <div className="mt-8 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
            Disciplines
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {disciplineChips.map((chip) => (
              <ChipLink key={chip.href} {...chip} />
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
            Case types
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {caseTypeChips.map((chip) => (
              <ChipLink key={chip.href + chip.label} {...chip} />
            ))}
          </div>
        </div>

        <nav
          className="mt-8 flex flex-wrap items-center gap-x-1 gap-y-2 text-sm text-white/55"
          aria-label="Footer resources"
        >
          {resourceLinks.map((link, i) => (
            <span key={link.href} className="inline-flex items-center gap-1">
              {i > 0 && (
                <span className="px-1 text-white/20 select-none" aria-hidden>
                  ·
                </span>
              )}
              <Link href={link.href} className="hover:text-accent">
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <p className="mt-8 max-w-3xl border-l-2 border-white/10 pl-4 text-xs leading-relaxed text-white/40">
          {footerDisclaimer}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-5 text-[11px] uppercase tracking-[0.12em] text-white/40">
          <span className="normal-case tracking-normal text-white/35">
            {footerCopyright}
          </span>
          <span className="text-white/15" aria-hidden>
            |
          </span>
          <Link href="/cookies" className="hover:text-white/70">
            Cookies
          </Link>
          <Link href="/privacy" className="hover:text-white/70">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white/70">
            Terms
          </Link>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
