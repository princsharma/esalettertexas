import { notFound } from "next/navigation";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPillarBanner } from "@/components/blog/BlogPillarBanner";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Breadcrumbs, CtaBand } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BLOG_CATEGORIES } from "@/data/blog/categories";
import {
  categoryArchiveHref,
  getCategoryBySlug,
  getPostsForCategoryArchive,
  toBlogCard,
} from "@/lib/blog";
import { buildBlogCategoryMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
};

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return buildBlogCategoryMetadata(category);
}

export default async function BlogCategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);
  const { items, totalPages } = getPostsForCategoryArchive(slug, page);
  const basePath = categoryArchiveHref(slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: category.name },
        ]}
      />

      <section className="section-py bg-white">
        <Container className="max-w-3xl">
          <SectionHeading title={category.name} subhead={category.intro} align="center" />
          <div className="mt-8">
            <BlogPillarBanner category={category} />
          </div>
        </Container>
      </section>

      <section className="section-py bg-brand-50">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((post) => (
              <BlogPostCard key={post.slug} post={toBlogCard(post)} />
            ))}
          </div>
          <BlogPagination basePath={basePath} page={page} totalPages={totalPages} />
        </Container>
      </section>

      <CtaBand
        title="Get Your ESA Letter in as Little as 24 Hours"
        subhead="Licensed Texas therapists. HIPAA compliant."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
      />
    </>
  );
}
