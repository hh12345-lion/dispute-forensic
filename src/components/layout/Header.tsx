"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/forensic-disciplines", label: "Disciplines" },
  { href: "/services", label: "Services" },
  { href: "/case-types", label: "Case Types" },
  { href: "/sectors", label: "Sectors" },
  { href: "/guides", label: "Guides" },
];

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    if (drawerOpen) {
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }
  }, [drawerOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary text-white">
        <div className="mx-auto flex min-w-0 max-w-[90rem] items-stretch">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-3 px-4 py-3 sm:px-5 lg:px-6"
            onClick={closeDrawer}
            aria-label="DisputeForensic home"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent text-sm font-bold tracking-tighter text-white sm:h-11 sm:w-11 sm:text-base"
              aria-hidden
            >
              DF
            </span>
            <span className="hidden min-w-0 flex-col leading-tight sm:flex">
              <span className="font-serif text-base font-semibold tracking-tight">
                DisputeForensic
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                Expert witness portal
              </span>
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-stretch lg:flex"
            aria-label="Main"
          >
            <ul className="flex min-w-0 flex-1 items-stretch">
              {navLinks.map((link, i) => (
                <li key={link.href} className="flex min-w-0 items-stretch">
                  {i > 0 && (
                    <span
                      className="self-center text-white/15 select-none"
                      aria-hidden
                    >
                      |
                    </span>
                  )}
                  <Link
                    href={link.href}
                    className="group relative flex min-h-[56px] items-center px-4 xl:px-5"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/65 transition-colors group-hover:text-white">
                      {link.label}
                    </span>
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 origin-left scale-x-0 bg-accent transition-transform group-hover:scale-x-100 xl:left-5 xl:right-5"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-stretch">
            <Link
              href="/contact"
              className="hidden min-h-[56px] items-center bg-accent px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-accent-hover lg:inline-flex xl:px-8"
            >
              Enquire
            </Link>

            <button
              type="button"
              className="inline-flex min-h-[56px] min-w-[56px] flex-col items-center justify-center gap-1 px-4 lg:hidden"
              aria-expanded={drawerOpen}
              aria-controls="nav-drawer"
              aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${drawerOpen ? "translate-y-[5px] rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity ${drawerOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${drawerOpen ? "-translate-y-[5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {drawerOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-[60] bg-primary/60 backdrop-blur-[2px] lg:hidden"
            aria-label="Close navigation"
            onClick={closeDrawer}
          />
          <aside
            id="nav-drawer"
            className="fixed inset-y-0 right-0 z-[70] flex w-[min(100%,20rem)] flex-col bg-primary shadow-[-8px_0_32px_rgba(0,0,0,0.35)] motion-safe:animate-[dfDrawerIn_240ms_ease-out] lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Navigation
              </p>
              <button
                type="button"
                className="text-xs uppercase tracking-wider text-white/60 hover:text-white"
                onClick={closeDrawer}
              >
                Close
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              <ol className="space-y-1">
                {navLinks.map((link, i) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex min-h-[48px] items-center gap-4 px-3 transition-colors hover:bg-white/5"
                      onClick={closeDrawer}
                    >
                      <span className="w-6 shrink-0 font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-medium text-white/90">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="border-t border-white/10 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <Link
                href="/contact"
                className="flex min-h-[48px] items-center justify-center bg-accent text-xs font-bold uppercase tracking-[0.16em] text-white hover:bg-accent-hover"
                onClick={closeDrawer}
              >
                Submit Enquiry
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
}
