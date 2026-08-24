"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { COOKIE_CATEGORY_LABELS } from "@/lib/cookies/constants";
import { useCookieConsent } from "./CookieConsentContext";

interface CookiePreferencesPanelProps {
  onClose: () => void;
}

export function CookiePreferencesPanel({ onClose }: CookiePreferencesPanelProps) {
  const { consent, savePreferences } = useCookieConsent();
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const [draft, setDraft] = useState({
    analytics: consent.analytics,
    marketing: consent.marketing,
    preferences: consent.preferences,
  });

  useEffect(() => {
    closeRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  function handleSave() {
    savePreferences(draft);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-primary/70 backdrop-blur-sm motion-safe:animate-[dfCookieFadeIn_200ms_ease-out]"
        aria-label="Close cookie preferences"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-border bg-white shadow-2xl motion-safe:animate-[dfCookieSlideUp_280ms_ease-out] sm:rounded-2xl"
      >
        <div className="relative border-b border-border bg-gradient-to-r from-primary to-[#15194a] px-5 py-4 sm:px-6">
          <div
            className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#C5A572] via-accent to-[#C5A572]"
            aria-hidden
          />
          <div className="flex items-start justify-between gap-4 pt-1">
            <div>
              <h2 id={titleId} className="text-lg font-bold text-white">
                Cookie Preferences
              </h2>
              <p id={descId} className="mt-1 text-sm text-white/75">
                Manage how we use cookies. Necessary cookies are always active.
              </p>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-lg text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label="Close"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6">
          <ul className="space-y-4">
            <li className="rounded-xl border border-border bg-section-alt p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-heading">
                    {COOKIE_CATEGORY_LABELS.necessary.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {COOKIE_CATEGORY_LABELS.necessary.description}
                  </p>
                </div>
                <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  Always on
                </span>
              </div>
            </li>

            {(
              [
                ["analytics", "analytics"],
                ["marketing", "marketing"],
                ["preferences", "preferences"],
              ] as const
            ).map(([key, field]) => {
              const meta = COOKIE_CATEGORY_LABELS[key];
              const checked = draft[field];
              const switchId = `df-cookie-switch-${field}`;
              return (
                <li
                  key={key}
                  className="rounded-xl border border-border p-4 transition-colors hover:border-accent/30"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 pr-2">
                      <label
                        htmlFor={switchId}
                        className="cursor-pointer font-semibold text-heading"
                      >
                        {meta.title}
                      </label>
                      <p className="mt-1 text-sm leading-relaxed text-body">
                        {meta.description}
                      </p>
                    </div>
                    <input
                      id={switchId}
                      type="checkbox"
                      role="switch"
                      aria-checked={checked}
                      checked={checked}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [field]: e.target.checked }))
                      }
                      className="df-cookie-switch mt-1 h-6 w-11 shrink-0 cursor-pointer appearance-none rounded-full bg-border transition-colors checked:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2"
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-4 text-xs text-body/80">
            See our{" "}
            <Link
              href="/cookies"
              className="font-medium text-accent underline hover:text-accent-hover"
              onClick={onClose}
            >
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="font-medium text-accent underline hover:text-accent-hover"
              onClick={onClose}
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="flex flex-col gap-2 border-t border-border bg-section-alt p-4 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[44px] rounded-xl border border-border bg-white px-5 py-2.5 text-sm font-semibold text-heading transition hover:bg-section-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/40"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="min-h-[44px] rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/60"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
