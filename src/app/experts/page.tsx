import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import { getAllExperts } from "@/data/experts";

export const metadata = createMetadata({
  title: "Our Forensic Expert Witnesses | Multi-Discipline Network",
  description:
    "DisputeForensic.com connects legal teams worldwide with qualified forensic expert witnesses across accounting, engineering, digital forensics, and economics.",
  path: "/experts",
});

export default function ExpertsPage() {
  const experts = getAllExperts();

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Experts", path: "/experts" },
          ]),
          ...experts.map((e) => personSchema(e)),
        ]}
      />
      <PageHero
        title="Our Forensic Expert Witnesses"
        subtitle="DisputeForensic.com connects legal teams in domestic courts and international arbitration with qualified forensic expert witnesses across forensic accounting, forensic engineering and quantum, digital forensics, and forensic economics."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Experts" },
        ]}
      />
      <Section>
        <div className="grid gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <article
              key={expert.id}
              className="rounded-[8px] border border-border bg-white p-6 shadow-[var(--shadow-card)]"
            >
              <h2 className="text-xl font-bold text-heading">{expert.name}</h2>
              <p className="mt-1 text-sm font-medium text-accent">
                {expert.jobTitle}
              </p>
              <p className="mt-1 text-xs font-medium text-body/70">
                {expert.disciplines.join(" · ")}
              </p>
              <p className="mt-4 text-body leading-relaxed">
                {expert.description}
              </p>
              <ul className="mt-4 space-y-1">
                {expert.credentials.map((c) => (
                  <li key={c} className="text-sm text-body">
                    • {c}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-body/80">
          Experts shown represent the calibre and credentials of specialists in
          our multi-discipline network. Specific expert matching depends on
          discipline, case type, sector, and availability.
        </p>
      </Section>
      <CTASection />
    </>
  );
}
