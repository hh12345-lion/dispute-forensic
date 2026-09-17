import Image from "next/image";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { blogPosts } from "@/data/blog";

export const metadata = createMetadata({
  title: "Blog | Forensic Expert Insights for Legal Teams",
  description:
    "Practical articles on forensic expert evidence, assumptions in analysis, multi-discipline disputes, and instructing forensic experts for litigation and arbitration.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
      <PageHero
        title="Blog"
        subtitle="Practical insights on forensic expert evidence, assumptions in analysis, and instructing specialists across accounting, economics, construction, and digital forensics."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden border border-border border-l-4 border-l-accent bg-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-section-alt">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-highlight">
                  {post.datePublished}
                </p>
                <h2 className="font-serif mt-2 text-lg font-semibold text-heading">
                  {post.title}
                </h2>
                <p className="mt-2 text-body leading-relaxed">{post.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  Read article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}
