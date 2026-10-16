import type { BlogPostSeoFields } from "@/data/seo/types";

export type BlogPostSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

/** CMS-shaped post — flat URL `/blog/{slug}/` regardless of category. */
export type BlogPostRecord = {
  slug: string;
  title: string;
  excerpt: string;
  categorySlug: string;
  publishedAt: string;
  publishedDisplay: string;
  updatedDisplay?: string;
  image?: string;
  /** Overrides category default silo link when a post maps to a cluster page */
  siloLink?: { label: string; href: string };
  /** CMS SEO overrides (meta, canonical, robots, OG, Article dates). */
  seo?: BlogPostSeoFields;
  sections: BlogPostSection[];
};
