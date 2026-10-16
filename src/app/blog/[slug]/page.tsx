import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import {
  AuthorBox,
  Breadcrumbs,
  CtaBand,
  TableOfContents,
} from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { CONDITIONS_REVIEWER } from "@/data/silos/conditions";
import { BLOG_POSTS } from "@/data/blog/posts";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  categoryArchiveHref,
  countWords,
  getCategoryName,
  getPostBySlug,
  getRelatedPosts,
  resolveSiloLink,
  toBlogCard,
} from "@/lib/blog";
import { articleSchema } from "@/lib/schema";
import { absoluteUrl, buildBlogPostMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildBlogPostMetadata(post);
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const silo = resolveSiloLink(post);
  const related = getRelatedPosts(post, 2);
  const words = countWords(post);
  const showToc = words > 1000;
  const toc = post.sections.map((s) => ({ id: s.id, label: s.title }));

  const pageUrl = absoluteUrl(`/blog/${post.slug}/`);

  return (
    <>
      <JsonLd data={articleSchema(post, pageUrl)} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          {
            label: getCategoryName(post.categorySlug),
            href: categoryArchiveHref(post.categorySlug),
          },
          { label: post.title },
        ]}
      />

      <article className="section-py bg-white">
        <Container className="max-w-3xl">
          <header>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              {getCategoryName(post.categorySlug)}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-neutral-900 sm:text-4xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500">
              <time dateTime={post.publishedAt}>Published {post.publishedDisplay}</time>
              {post.updatedDisplay && <span>Updated {post.updatedDisplay}</span>}
            </div>
          </header>

          {post.image && (
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-card shadow-card">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}

          <div className="mt-8 not-prose">
            <AuthorBox {...CONDITIONS_REVIEWER} />
          </div>

          {showToc && (
            <div className="mt-10">
              <TableOfContents items={toc} />
            </div>
          )}

          <div className="prose prose-neutral mt-10 max-w-none">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2>{section.title}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="not-prose mt-10">
            <CtaBand
              title="See If You Qualify for an ESA Letter"
              subhead="Confidential online assessment with a licensed Texas therapist."
              ctaLabel="Apply Now"
              ctaHref="/apply-now/"
            />
          </div>

          <div className="mt-8 rounded-card border border-brand-200 bg-brand-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
              Continue in our silo guide
            </p>
            <Link
              href={silo.href}
              className="mt-2 inline-flex items-center gap-1.5 font-bold text-brand-800 hover:text-brand-900"
            >
              {silo.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-xl font-bold text-neutral-900">Related posts</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <BlogPostCard key={r.slug} post={toBlogCard(r)} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>

      <CtaBand
        id="final-cta"
        title="Get Your ESA Letter in as Little as 24 Hours"
        subhead="Licensed Texas therapists. HIPAA compliant. Moneyback guarantee."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        showSteps
      />
    </>
  );
}
