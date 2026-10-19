"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navCaseTypeLinks,
  navDisciplineLinks,
  navResourcesLinks,
  navSectorLinks,
  navServiceLinks,
} from "@/data/nav";

type Group = {
  key: string;
  label: string;
  href: string;
  items: { href: string; label: string }[];
  prefixes: string[];
};

const groups: Group[] = [
  {
    key: "disciplines",
    label: "Disciplines",
    href: "/forensic-disciplines",
    items: [{ href: "/forensic-disciplines", label: "Forensic Disciplines" }, ...navDisciplineLinks],
    prefixes: ["/forensic-disciplines", "/disciplines"],
  },
  {
    key: "services",
    label: "Services",
    href: "/services",
    items: [{ href: "/services", label: "All Services" }, ...navServiceLinks],
    prefixes: ["/services"],
  },
  { key: "case-types", label: "Case Types", href: "/case-types", items: navCaseTypeLinks, prefixes: ["/case-types"] },
  { key: "sectors", label: "Sectors", href: "/sectors", items: navSectorLinks, prefixes: ["/sectors"] },
  {
    key: "resources",
    label: "Resources",
    href: "/guides",
    items: [...navResourcesLinks, { href: "/glossary", label: "Glossary" }, { href: "/experts", label: "Our Experts" }],
    prefixes: ["/guides", "/blog", "/how-to-instruct", "/qualifications", "/glossary", "/experts", "/what-is-forensic-expert-witness"],
  },
];

const isOn = (pathname: string, g: Group) => g.prefixes.some((p) => pathname === p || pathname.startsWith(p + "/"));

/**
 * Two-part masthead: a cream plate carrying the full-colour logo, its corner cut like the speech
 * mark, joined to a burgundy bar with the section menus. The current section carries a copper
 * rule. The mobile menu opens without JavaScript.
 */
export function Header() {
  const pathname = usePathname() || "/";

  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_-22px_rgba(59,47,44,0.8)]">
      <div className="relative bg-wine">
        <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Open menu" />
        <div className="mx-auto flex h-[72px] max-w-[90rem] items-stretch lg:h-[84px]">
          <Link
            href="/"
            aria-label="Dispute Forensic home"
            className="relative flex shrink-0 items-center bg-cream pl-4 pr-10 sm:pl-6 lg:pl-8 lg:pr-14"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 26px), calc(100% - 26px) 100%, 0 100%)" }}
          >
            <img src="/brand/logo.svg" alt="Dispute Forensic" width={656} height={248} className="h-10 w-auto lg:h-12" />
          </Link>

          <nav aria-label="Main" className="hidden min-w-0 flex-1 items-stretch justify-center xl:flex">
            {groups.map((g) => {
              const on = isOn(pathname, g);
              return (
                <div key={g.key} className="nav-item relative flex items-stretch">
                  <Link
                    href={g.href}
                    aria-current={on ? "page" : undefined}
                    className={`relative flex items-center gap-1.5 px-4 font-serif text-[0.92rem] font-semibold transition-colors ${
                      on ? "text-white" : "text-cream/75 hover:text-white"
                    }`}
                  >
                    {g.label}
                    <svg aria-hidden="true" viewBox="0 0 10 6" className="h-1.5 w-2.5 text-copper">
                      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    {on ? <span aria-hidden="true" className="absolute inset-x-4 bottom-0 h-1 bg-copper" /> : null}
                  </Link>
                  <div className="nav-panel absolute left-0 top-full z-50 w-[22rem] pt-0">
                    <div className="chamfer-sm border-t-4 border-copper bg-white p-3 shadow-card">
                      <ul className="grid gap-0.5">
                        {g.items.map((item) => {
                          const here = pathname === item.href;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                aria-current={here ? "page" : undefined}
                                className={`flex items-center gap-2.5 px-3 py-2 text-sm transition-colors ${
                                  here ? "bg-cream font-semibold text-heading" : "text-body hover:bg-cream hover:text-heading"
                                }`}
                              >
                                <span aria-hidden="true" className={`h-2 w-2 shrink-0 rotate-45 ${here ? "bg-copper" : "bg-stone"}`} />
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-2 pr-3 sm:pr-5 lg:pr-8">
            <Link
              href="/contact"
              aria-current={pathname === "/contact" ? "page" : undefined}
              className="chamfer-sm hidden bg-copper px-5 py-3 font-serif text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:inline-flex"
            >
              Instruct an Expert
            </Link>
            <label
              htmlFor="mobile-nav-toggle"
              className="menu-toggle inline-flex min-h-[44px] cursor-pointer items-center gap-2 px-3 font-serif text-sm font-semibold text-cream xl:hidden"
            >
              <span className="menu-icon" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              Menu
            </label>
          </div>
        </div>

        <nav
          aria-label="Mobile"
          className="hidden max-h-[calc(100vh-72px)] overflow-y-auto border-t border-white/10 bg-wine px-4 pb-6 max-xl:peer-checked:block sm:px-6"
        >
          {groups.map((g) => {
            const on = isOn(pathname, g);
            return (
              <details key={g.key} className="fold border-b border-white/10" open={on}>
                <summary className="flex cursor-pointer items-center justify-between py-4 font-serif text-lg font-semibold text-cream">
                  <span className="flex items-center gap-2.5">
                    {on ? <span aria-hidden="true" className="h-2 w-2 rotate-45 bg-copper" /> : null}
                    {g.label}
                  </span>
                  <span aria-hidden="true" className="fold-mark" />
                </summary>
                <ul className="grid gap-0.5 pb-4 pl-1">
                  {g.items.map((item) => {
                    const here = pathname === item.href;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={here ? "page" : undefined}
                          className={`block py-2 ${here ? "font-semibold text-white" : "text-cream/70"}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
          <Link href="/contact" className="chamfer-sm mt-6 flex justify-center bg-copper px-5 py-3.5 font-serif text-sm font-semibold text-white">
            Instruct an Expert
          </Link>
        </nav>
      </div>
    </header>
  );
}
