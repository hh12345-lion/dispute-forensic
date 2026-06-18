import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import {
  footerColumns,
  footerCopyright,
  footerDisclaimer,
} from "@/data/nav";
import { SITE_SCOPE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/80">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-8">
          <p className="text-sm text-white/70">
            <SiteEmailLink className="text-white/90 hover:text-white" />
          </p>
          <p className="mt-4 text-sm text-white/60">{footerDisclaimer}</p>
          <p className="mt-3 text-sm text-white/55">{SITE_SCOPE}</p>
          <p className="mt-2 text-sm text-white/50">{footerCopyright}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Link href="/cookies" className="text-white/60 hover:text-white">
              Cookie Policy
            </Link>
            <Link href="/privacy" className="text-white/60 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white">
              Terms of Use
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
