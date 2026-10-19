import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  href?: string;
  children?: ReactNode;
  /** Optional photograph shown above the title in a cut-corner frame. */
  image?: { src: string; alt: string };
}

export function Card({ title, description, href, children, image }: CardProps) {
  const inner = (
    <>
      {image ? (
        <div className="chamfer-sm relative -mx-5 -mt-5 mb-5 aspect-[16/10] bg-stone sm:-mx-6 sm:-mt-6">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 92vw, 280px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
        </div>
      ) : null}
      <h3 className="font-serif text-lg font-semibold text-heading">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>}
      {children}
      {href && (
        <span className="mt-4 inline-flex items-center gap-2 font-serif text-xs font-semibold uppercase tracking-wide text-accent">
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-copper" />
          Read more
        </span>
      )}
    </>
  );

  const className =
    "chamfer-sm group block min-w-0 h-full overflow-hidden border border-border border-t-[3px] border-t-accent bg-surface p-5 transition-colors hover:border-t-wine hover:bg-section-warm sm:p-6";

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <div className={className}>{inner}</div>;
}
