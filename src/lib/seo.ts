import type { Metadata } from "next";
import type { BlogPostRecord } from "@/data/blog/types";
import type { BlogCategory } from "@/data/blog/categories";
import { SITE, ogImageOrigin, siteOrigin } from "@/data/site";
import type { PageSeoFields, BlogPostSeoFields } from "@/data/seo/types";
import { STATIC_PAGE_SEO } from "@/data/seo/static-pages";

export function absoluteUrl(
  pathOrUrl: string,
  options?: { forOgImage?: boolean },
): string {
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const base = (options?.forOgImage ? ogImageOrigin() : siteOrigin()).replace(
    /\/$/,
    "",
  );
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${base}${path}`;
}

function isDefaultOgImage(image?: string): boolean {
  return (
    !image ||
    image === SITE.defaultOgImage ||
    image === SITE.defaultOgImageFallback
  );
}

/** Site-wide default share image (WebP). Used for every page unless `openGraph.image` is set explicitly. */
function resolveOgImage(image?: string): string {
  const src = image ?? SITE.defaultOgImage;
  return absoluteUrl(src, { forOgImage: true });
}

function buildOgImages(
  image?: string,
  alt?: string,
): NonNullable<Metadata["openGraph"]>["images"] {
  const altText = alt ?? SITE.defaultOgImageAlt;
  const url = isDefaultOgImage(image)
    ? absoluteUrl(SITE.defaultOgImage, { forOgImage: true })
    : absoluteUrl(image!, { forOgImage: true });

  return [
    {
      url,
      alt: altText,
      type: isDefaultOgImage(image) ? "image/webp" : undefined,
      width: SITE.defaultOgImageWidth,
      height: SITE.defaultOgImageHeight,
    },
  ];
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
  const ogImages = buildOgImages(
    fields.openGraph?.image,
    fields.openGraph?.image ? ogTitle : SITE.defaultOgImageAlt,
  );

  const ogType =
    fields.openGraph?.type === "product"
      ? "website"
      : (fields.openGraph?.type ?? "website");

  return {
    title: fields.metaTitle,
    description: fields.metaDescription,
    alternates: { canonical },
    robots: robotsFromOverride(fields.robots),
    openGraph: {
      type: ogType,
      locale: SITE.locale,
      siteName: SITE.name,
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [resolveOgImage(fields.openGraph?.image)],
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
      /** One site-wide OG card; featured images stay on the article body only. */
      image: seo?.openGraph?.image,
    },
    schemaTypeOverride: seo?.schemaTypeOverride ?? "Article",
  };
  return buildPageMetadata(fields);
}

export function buildBlogCategoryMetadata(category: BlogCategory): Metadata {
  const canonicalPath = `/blog/category/${category.slug}/`;
  const fromRegistry = STATIC_PAGE_SEO[canonicalPath];
  if (fromRegistry) {
    return buildPageMetadata(fromRegistry);
  }
  return buildPageMetadata({
    ...(category.seo ?? {}),
    metaTitle: category.seo?.metaTitle ?? `${category.name} | ESA Letter Texas Blog`,
    metaDescription: category.seo?.metaDescription ?? category.intro.slice(0, 155),
    canonicalPath,
    schemaTypeOverride: category.seo?.schemaTypeOverride ?? "WebPage",
  });
}

/** Root layout defaults — individual routes override via `pageMetadata` or `buildPageMetadata`. */
export function rootLayoutMetadata(): Metadata {
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
  return {
    metadataBase: new URL(siteOrigin()),
    ...buildPageMetadata(STATIC_PAGE_SEO["/"]),
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  };
}
