import type { Metadata } from "next";
import type { BlogPostRecord } from "@/data/blog/types";
import type { BlogCategory } from "@/data/blog/categories";
import { SITE } from "@/data/site";
import type { PageSeoFields, BlogPostSeoFields } from "@/data/seo/types";
import { STATIC_PAGE_SEO } from "@/data/seo/static-pages";

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const base = SITE.url.replace(/\/$/, "");
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

function resolveOgImage(image?: string): string {
  const src = image ?? SITE.defaultOgImage;
  return absoluteUrl(src);
}

function robotsFromOverride(robots?: PageSeoFields["robots"]): Metadata["robots"] {
  if (!robots) return undefined;
  return {
    index: robots.index,
    follow: robots.follow,
    noarchive: robots.noarchive,
    nosnippet: robots.nosnippet,
  };
}

/** Map CMS SEO fields to Next.js Metadata (canonical, robots, OG). */
export function buildPageMetadata(fields: PageSeoFields): Metadata {
  const canonical =
    fields.canonicalOverride ?? absoluteUrl(fields.canonicalPath);
  const ogTitle = fields.openGraph?.title ?? fields.metaTitle;
  const ogDescription = fields.openGraph?.description ?? fields.metaDescription;
  const ogImage = resolveOgImage(fields.openGraph?.image);

  return {
    title: fields.metaTitle,
    description: fields.metaDescription,
    alternates: { canonical },
    robots: robotsFromOverride(fields.robots),
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      images: [{ url: ogImage, alt: ogTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

/** Lookup static marketing/support page SEO by canonical path. */
export function pageMetadata(canonicalPath: string): Metadata {
  const fields = STATIC_PAGE_SEO[canonicalPath];
  if (!fields) {
    throw new Error(`Missing STATIC_PAGE_SEO entry for ${canonicalPath}`);
  }
  return buildPageMetadata(fields);
}

export function buildBlogPostMetadata(post: BlogPostRecord): Metadata {
  const seo: BlogPostSeoFields | undefined = post.seo;
  const fields: PageSeoFields = {
    metaTitle: seo?.metaTitle ?? `${post.title} | ESA Letter Texas`,
    metaDescription: seo?.metaDescription ?? post.excerpt,
    canonicalPath: `/blog/${post.slug}/`,
    canonicalOverride: seo?.canonicalOverride,
    robots: seo?.robots,
    openGraph: {
      ...seo?.openGraph,
      image: seo?.openGraph?.image ?? post.image,
    },
    schemaTypeOverride: seo?.schemaTypeOverride ?? "Article",
  };
  return buildPageMetadata(fields);
}

export function buildBlogCategoryMetadata(category: BlogCategory): Metadata {
  return buildPageMetadata({
    ...(category.seo ?? {}),
    metaTitle: category.seo?.metaTitle ?? `${category.name} | ESA Letter Texas Blog`,
    metaDescription: category.seo?.metaDescription ?? category.intro.slice(0, 155),
    canonicalPath: `/blog/category/${category.slug}/`,
    schemaTypeOverride: category.seo?.schemaTypeOverride ?? "WebPage",
  });
}

/** Root layout defaults — individual routes override via `pageMetadata` or `buildPageMetadata`. */
export function rootLayoutMetadata(): Metadata {
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return {
    metadataBase: new URL(SITE.url),
    ...buildPageMetadata(STATIC_PAGE_SEO["/"]),
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}
