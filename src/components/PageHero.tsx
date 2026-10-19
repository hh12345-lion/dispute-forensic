import Link from "next/link";
import { HeroPhoto } from "@/components/HeroPhoto";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

/**
 * Page opening on cream: the title leads, the intro and breadcrumbs follow, and the page
 * photograph sits in a cut-corner frame on a copper plate.
 */
export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-cream">
      <div aria-hidden="true" className="chamfer-tl absolute -left-10 top-0 hidden h-full w-40 bg-wine/[0.06] lg:block" />
      <div className="relative mx-auto grid min-w-0 max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-center lg:gap-14 lg:px-8 lg:py-20">
        <div className="min-w-0">
          <h1 className="text-balance font-serif text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-[2.9rem] lg:leading-[1.12]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">{subtitle}</p>
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mt-8 min-w-0 border-t border-border pt-4">
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 font-serif text-xs text-body/70 sm:text-sm">
                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-1.5">
                    {i > 0 && (
                      <span aria-hidden className="text-copper">
                        /
                      </span>
                    )}
                    {item.href ? (
                      <Link href={item.href} className="transition-colors hover:text-accent">
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-heading">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </div>
        <HeroPhoto />
      </div>
    </section>
  );
}
