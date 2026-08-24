import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  alt?: boolean;
  className?: string;
  id?: string;
}

export function Section({ children, alt, className = "", id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-10 sm:py-12 md:py-16 ${alt ? "bg-section-alt" : "bg-surface"} ${className}`}
    >
      <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
