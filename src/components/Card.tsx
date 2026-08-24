import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  children?: ReactNode;
}

export function Card({ title, description, href, children }: CardProps) {
  const inner = (
    <>
      <h3 className="font-serif text-lg font-semibold text-heading">{title}</h3>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
      )}
      {children}
      {href && (
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide text-accent">
          Read more
        </span>
      )}
    </>
  );

  const className =
    "group block min-w-0 h-full border border-border border-t-[3px] border-t-accent bg-surface p-5 transition-colors hover:border-t-accent-hover hover:bg-section-warm sm:p-6";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
