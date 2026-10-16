import type { BlogPost } from "@/components/sections/BlogGrid";
import { BLOG_CATEGORIES, BLOG_CATEGORY_BY_SLUG, type BlogCategory } from "@/data/blog/categories";
import { BLOG_POSTS } from "@/data/blog/posts";
import type { BlogPostRecord } from "@/data/blog/types";

export const BLOG_POSTS_PER_PAGE = 12;
export const BLOG_HUB_POSTS_PER_PAGE = 8;

export function getAllCategories(): BlogCategory[] {
  return BLOG_CATEGORIES;
}

export function getCategoryBySlug(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORY_BY_SLUG[slug];
}

export function getAllPostSlugs(): string[] {
  return BLOG_POSTS.map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPostRecord | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

function sortNewest(posts: BlogPostRecord[]): BlogPostRecord[] {
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getCategoryName(categorySlug: string): string {
  return BLOG_CATEGORY_BY_SLUG[categorySlug]?.name ?? "Blog";
}

export function postHref(slug: string): string {
  return `/blog/${slug}/`;
}

export function categoryArchiveHref(categorySlug: string): string {
  return `/blog/category/${categorySlug}/`;
}

export function toBlogCard(post: BlogPostRecord): BlogPost {
  return {
    title: post.title,
    excerpt: post.excerpt,
    href: postHref(post.slug),
    category: getCategoryName(post.categorySlug),
    categorySlug: post.categorySlug,
    date: post.publishedDisplay,
    image: post.image,
  };
}

/** Category slugs whose CMS `pillarHref` matches (incl. lifestyle → conditions, news → rights). */
export function getCategorySlugsForPillar(pillarHref: string): string[] {
  return BLOG_CATEGORIES.filter((c) => c.pillarHref === pillarHref).map((c) => c.slug);
}

/** M7: newest posts for a silo pillar (all categories mapped to that pillar). */
export function getPostsForPillarM7(pillarHref: string, limit = 4): BlogPost[] {
  const slugs = new Set(getCategorySlugsForPillar(pillarHref));
  return sortNewest(BLOG_POSTS.filter((p) => slugs.has(p.categorySlug)))
    .slice(0, limit)
    .map(toBlogCard);
}

/** M7: newest posts in a single blog category (archives / view-all). */
export function getPostsForCategoryM7(categorySlug: string, limit = 4): BlogPost[] {
  return sortNewest(BLOG_POSTS.filter((p) => p.categorySlug === categorySlug))
    .slice(0, limit)
    .map(toBlogCard);
}

export function getRecentPosts(limit = 4): BlogPost[] {
  return sortNewest(BLOG_POSTS).slice(0, limit).map(toBlogCard);
}

export function getFeaturedPost(): BlogPostRecord {
  return sortNewest(BLOG_POSTS)[0];
}

export function paginatePosts<T>(items: T[], page: number, perPage: number) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: safePage,
    totalPages,
    total,
  };
}

export function getPostsForCategoryArchive(categorySlug: string, page = 1) {
  const filtered = sortNewest(BLOG_POSTS.filter((p) => p.categorySlug === categorySlug));
  return paginatePosts(filtered, page, BLOG_POSTS_PER_PAGE);
}

export function getPostsForHub(page = 1) {
  const sorted = sortNewest(BLOG_POSTS);
  return paginatePosts(sorted, page, BLOG_HUB_POSTS_PER_PAGE);
}

export function countWords(post: BlogPostRecord): number {
  const text = post.sections
    .flatMap((s) => s.paragraphs)
    .join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function getRelatedPosts(post: BlogPostRecord, limit = 2): BlogPostRecord[] {
  return sortNewest(
    BLOG_POSTS.filter((p) => p.categorySlug === post.categorySlug && p.slug !== post.slug),
  ).slice(0, limit);
}

export function resolveSiloLink(post: BlogPostRecord): { label: string; href: string } {
  if (post.siloLink) return post.siloLink;
  const category = getCategoryBySlug(post.categorySlug);
  if (!category) {
    return { label: "ESA Letter Texas", href: "/" };
  }
  return { label: category.pillarLabel, href: category.pillarHref };
}

/** Allowed silo roots for a category (primary + supporting pillars). */
export function getAllowedSiloHrefsForCategory(categorySlug: string): string[] {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  const supporting = category.supportingPillars?.map((p) => p.href) ?? [];
  return [category.pillarHref, ...supporting];
}

export function hrefMatchesSiloRoots(href: string, allowedPillarHrefs: string[]): boolean {
  if (allowedPillarHrefs.includes(href)) return true;
  return allowedPillarHrefs.some((pillar) => {
    const base = pillar.endsWith("/") ? pillar : `${pillar}/`;
    return href.startsWith(base) && href.length > base.length;
  });
}

/** M7 / T8: category archive URL from a post list (first post’s category). */
export function resolveViewAllHref(posts: BlogPost[]): string {
  const slug = posts[0]?.categorySlug;
  if (slug && getCategoryBySlug(slug)) {
    return categoryArchiveHref(slug);
  }
  return "/blog/";
}
