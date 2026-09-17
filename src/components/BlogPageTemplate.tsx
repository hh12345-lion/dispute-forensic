import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RelatedLinks } from "@/components/RelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import type { RelatedLink } from "@/lib/seo-internal-links";
import type { BlogPost } from "@/data/types";
import type { BreadcrumbItem } from "@/components/PageHero";

interface BlogPageTemplateProps {
  post: BlogPost;
  breadcrumbs: BreadcrumbItem[];
  relatedLinks: RelatedLink[];
}

/** Render markdown-style [label](href) as Next.js links when href is internal. */
function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      parts.push(text.slice(last, match.index));
    }
    const label = match[1];
    const href = match[2];
    if (href.startsWith("/")) {
      parts.push(
        <Link
          key={key++}
          href={href}
          className="text-accent underline-offset-2 hover:underline"
        >
          {label}
        </Link>,
      );
    } else {
      parts.push(
        <a
          key={key++}
          href={href}
          className="text-accent underline-offset-2 hover:underline"
          rel="noopener noreferrer"
        >
          {label}
        </a>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

export function BlogPageTemplate({
  post,
  breadcrumbs,
  relatedLinks,
}: BlogPageTemplateProps) {
  const path = `/blog/${post.slug}`;
  const schemas = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.h1, path },
    ]),
    articleSchema({
      headline: post.h1,
      description: post.metaDescription,
      path,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: post.image,
    }),
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <PageHero
        title={post.h1}
        subtitle={post.excerpt}
        breadcrumbs={breadcrumbs}
      />
      <Section>
        <article className="prose-content mx-auto max-w-3xl">
          <div className="mb-8 overflow-hidden border border-border">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <p className="mb-8 text-sm text-highlight">
            Published {post.datePublished}
            {post.lastReviewed ? ` · Last reviewed ${post.lastReviewed}` : null}
          </p>

          {post.blocks.map((block, index) => {
            if (block.type === "h2") {
              return <h2 key={index}>{block.text}</h2>;
            }
            if (block.type === "h3") {
              return <h3 key={index}>{block.text}</h3>;
            }
            if (block.type === "ul") {
              return (
                <ul key={index}>
                  {block.items.map((item) => (
                    <li key={item}>
                      <RichText text={item} />
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "disclaimer") {
              return (
                <p key={index} className="mt-10 text-sm italic text-highlight">
                  <strong>Disclaimer:</strong> <RichText text={block.text} />
                </p>
              );
            }
            return (
              <p key={index} className="text-body leading-relaxed">
                <RichText text={block.text} />
              </p>
            );
          })}

          <RelatedLinks links={relatedLinks} />
        </article>
      </Section>
      <CTASection />
    </>
  );
}
