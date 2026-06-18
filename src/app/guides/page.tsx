import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { Card } from "@/components/Card";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { getAllGuides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Guides: Forensic Expert Witnesses | All Disciplines",
  description:
    "In-depth guides on forensic expert witnesses for legal teams worldwide: forensic accounting, construction quantum, digital forensics, competition economics, and more.",
  path: "/guides",
});

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
        ])}
      />
      <PageHero
        title="Guides: Forensic Expert Witnesses for Complex Disputes"
        subtitle="In-depth guides on instructing forensic expert witnesses across all disciplines, from forensic accounting and construction quantum to digital forensics, competition economics, hot-tubbing, and multi-discipline teams. Applicable across jurisdictions."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Guides" },
        ]}
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          {guides.map((g) => (
            <Card
              key={g.slug}
              title={g.title}
              description={g.paragraphs[0].slice(0, 160) + "…"}
              href={`/guides/${g.slug}`}
            />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
