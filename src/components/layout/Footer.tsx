import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies/CookieSettingsButton";
import { SiteEmailLink } from "@/components/SiteEmailLink";
import { footerColumns, footerDisclaimer } from "@/data/nav";
import { photos } from "@/lib/photos";

/**
 * Umber footer: a band of three photographs across the disciplines in cut-corner frames, then
 * the light stacked logo beside the link columns, and a base line with the legal links.
 */
export function Footer() {
  const strip = [photos.tbmCutter, photos.headCrash, photos.maxwellChambers];

  return (
    <footer className="mt-auto bg-umber text-cream">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {strip.map((p) => (
            <div key={p.src} className="chamfer relative aspect-[16/9] bg-wine">
              <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 32vw, 360px" className="object-cover opacity-90" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:px-8">
        <div>
          <Link href="/" aria-label="Dispute Forensic home" className="inline-block">
            <img src="/brand/logo-stacked-light.svg" alt="Dispute Forensic" width={364} height={312} className="h-auto w-[180px]" />
          </Link>
          <p className="mt-6 text-sm leading-relaxed text-cream/65">{footerDisclaimer}</p>
          <div className="mt-6 flex flex-col items-start gap-3">
            <Link href="/contact" className="chamfer-sm inline-flex bg-copper px-5 py-3 font-serif text-sm font-semibold text-white transition-colors hover:bg-accent-hover">
              Instruct an Expert
            </Link>
            <SiteEmailLink className="text-sm text-cream/70 underline decoration-copper underline-offset-4 hover:text-white" />
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h2 className="flex items-center gap-2.5 font-serif text-base font-semibold text-white">
                <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-copper" />
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href} className="text-sm text-cream/65 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} DisputeForensic. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
            <Link href="/image-credits" className="hover:text-white">
              Image credits
            </Link>
            <CookieSettingsButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
