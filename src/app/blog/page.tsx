import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { Breadcrumbs, CtaBand, Hero } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getAllCategories,
  getFeaturedPost,
  getPostsForHub,
  postHref,
  toBlogCard,
} from "@/lib/blog";

export const metadata = pageMetadata("/blog/");

type PageProps = { searchParams: Promise<{ page?: string }> };

export default async function BlogHubPage({ searchParams }: PageProps) {
  const { page: pageParam } = await searchParams;
  const page = Math.max(1, Number.parseInt(pageParam ?? "1", 10) || 1);
  const { items, totalPages } = getPostsForHub(page);
  const featured = getFeaturedPost();
  const categories = getAllCategories();

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <Hero
        variant="compact"
        eyebrow="Blog"
        title="ESA Letter Texas Blog"
        subhead="Qualifying conditions, Texas housing rights, city guides, and practical tips from licensed clinicians—not registry hype."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        secondaryCtaLabel="How it works"
        secondaryCtaHref="/how-it-works/"
        backgroundImage={PAGE_HERO.blog}
      />

      <section className="section-py bg-white">
        <Container>
          <p className="text-sm font-bold uppercase tracking-wide text-brand-600">Featured</p>
          <div className="mt-4 grid gap-8 overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[280px]">
              {featured.image && (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              )}
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <time className="text-sm text-neutral-500">{featured.publishedDisplay}</time>
              <h2 className="text-h2 mt-2 text-neutral-900">{featured.title}</h2>
              <p className="mt-3 text-neutral-600">{featured.excerpt}</p>
              <Link
                href={postHref(featured.slug)}
                className="mt-6 inline-flex w-fit items-center gap-1.5 font-semibold text-brand-700 hover:text-brand-800"
              >
                Read featured post
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-py bg-brand-50">
        <Container>
          <SectionHeading
            eyebrow="Browse"
            title="Categories"
            subhead="Six archives mapped to our silo pillars—rights, conditions, and Texas cities."
            align="center"
          />
          <div className="mt-10">
            <BlogCategoryNav categories={categories} />
          </div>
        </Container>
      </section>

      <section className="section-py bg-white">
        <Container>
          <SectionHeading title="Recent posts" subhead="Newest articles across all categories." align="center" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((post) => (
              <BlogPostCard key={post.slug} post={toBlogCard(post)} />
            ))}
          </div>
          <BlogPagination basePath="/blog/" page={page} totalPages={totalPages} />
        </Container>
      </section>

      <CtaBand
        title="Ready for a Texas ESA Letter?"
        subhead="Confidential assessment with a licensed therapist. Most clients start in minutes."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        showSteps
      />
    </>
  );
}
