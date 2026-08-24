import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-section-warm">
      <div className="mx-auto min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="border-l-4 border-accent pl-5 sm:pl-8">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-3 min-w-0">
              <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5 text-xs text-body/60 sm:text-sm">
                {breadcrumbs.map((item, i) => (
                  <li key={i} className="flex items-center gap-1">
                    {i > 0 && <span aria-hidden className="text-body/40">/</span>}
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className="text-body/80">{item.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <h1 className="font-serif text-balance text-2xl font-semibold tracking-tight text-heading min-[375px]:text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-body sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
