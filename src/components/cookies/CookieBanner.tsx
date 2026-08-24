"use client";

import Link from "next/link";
import { useCookieConsent } from "./CookieConsentContext";
import { CookiePreferencesPanel } from "./CookiePreferencesPanel";

/**
 * Compact fixed bottom strip, not a modal or card.
 * Full-width bar, minimal height, no CLS (position: fixed).
 */
export function CookieBanner() {
  const {
    status,
    isReady,
    showPreferences,
    acceptAll,
    rejectNonEssential,
    openPreferences,
    closePreferences,
  } = useCookieConsent();

  if (!isReady || status === "granted") return null;

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent"
        aria-live="polite"
        className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-primary text-white shadow-[0_-4px_24px_rgba(0,0,0,0.2)] motion-safe:animate-[dfCookieSlideUp_280ms_ease-out]"
      >
        <div
          className="h-0.5 w-full bg-accent"
          aria-hidden
        />
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-3.5 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-6">
            <p className="min-w-0 flex-1 text-sm leading-snug text-white/90">
              We use cookies to improve your experience and analyse traffic when
              you allow it.{" "}
              <Link
                href="/cookies"
                className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
              >
                Cookie Policy
              </Link>
              {" · "}
              <Link
                href="/privacy"
                className="font-medium text-white underline decoration-white/40 underline-offset-2 hover:decoration-white"
              >
                Privacy Policy
              </Link>
            </p>

            <div className="flex w-full shrink-0 flex-col gap-2 xs:flex-row xs:flex-wrap xs:items-center sm:w-auto sm:gap-2.5">
              <button
                type="button"
                onClick={rejectNonEssential}
                className="min-h-[44px] w-full rounded-lg border border-white/30 bg-transparent px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xs:w-auto"
              >
                Reject Non-Essential
              </button>
              <button
                type="button"
                onClick={openPreferences}
                className="min-h-[44px] w-full rounded-lg border border-white/30 bg-white/10 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xs:w-auto"
              >
                Customise
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="min-h-[44px] w-full rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent xs:w-auto"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPreferences && (
        <CookiePreferencesPanel onClose={closePreferences} />
      )}
    </>
  );
}
