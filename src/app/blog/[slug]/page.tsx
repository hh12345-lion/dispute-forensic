import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { BlogPageTemplate } from "@/components/BlogPageTemplate";
import { getBlogPost, blogSlugs } from "@/data/blog";
import { mergeBlogLinks } from "@/lib/seo-internal-links";

export function generateStaticParams() {
  return blogSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${slug}`,
    image: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <BlogPageTemplate
      post={post}
      relatedLinks={mergeBlogLinks(slug, post.relatedLinks)}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: post.title },
      ]}
    />
  );
}
