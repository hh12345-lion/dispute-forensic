import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import { ContentPageTemplate } from "@/components/ContentPageTemplate";
import { getDiscipline } from "@/data/disciplines";
import { mergeDisciplineLinks } from "@/lib/seo-internal-links";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getDiscipline(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/disciplines/${slug}`,
  });
}

export default async function DisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getDiscipline(slug);
  if (!page) notFound();

  return (
    <ContentPageTemplate
      page={page}
      hubPath="/disciplines"
      relatedLinks={mergeDisciplineLinks(slug, page.relatedLinks)}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Disciplines", href: "/disciplines" },
        { label: page.title },
      ]}
    />
  );
}
