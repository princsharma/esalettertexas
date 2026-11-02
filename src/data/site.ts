/**
 * Origin of the running `next dev` server.
 * Next picks another port when 3000 is already taken and stores it here.
 */
function developmentOrigin(): string | undefined {
  if (process.env.NODE_ENV !== "development") return undefined;
  const fromNext = process.env.__NEXT_PRIVATE_ORIGIN?.trim();
  if (fromNext) return fromNext.replace(/\/$/, "");
  const port = process.env.PORT?.trim();
  if (port) return `http://localhost:${port}`;
  return "http://localhost:3000";
}

/** Canonical site origin (sitemap, schema, canonical links). */
export function siteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }
  return developmentOrigin() ?? "https://esalettertexas.com";
}

/**
 * Origin used for `og:image` / Twitter image URLs.
 * In dev, uses the actual `next dev` origin so preview tools can load the file.
 * Override with NEXT_PUBLIC_OG_ORIGIN when testing against a staging URL.
 */
export function ogImageOrigin(): string {
  const override = process.env.NEXT_PUBLIC_OG_ORIGIN?.trim();
  if (override) {
    return override.replace(/\/$/, "");
  }
  return developmentOrigin() ?? siteOrigin();
}

/** Site-wide constants for SEO, schema, and canonical URLs. */
export const SITE = {
  name: "ESA Letter Texas",
  legalName: "ESA Letter Texas",
  url: siteOrigin(),
  /**
   * Social share image in meta tags (JPEG — Facebook, LinkedIn, X, and SEO extensions).
   * Same file on every page unless `openGraph.image` is overridden.
   */
  defaultOgImageSocial: "/og/og-card.jpg",
  /** WebP asset in `/public/og/` (not used in og:image; keep for performance elsewhere). */
  defaultOgImage: "/og/og-card.webp",
  defaultOgImageFallback: "/og/og-card.jpg",
  defaultOgImageWidth: 449,
  defaultOgImageHeight: 561,
  defaultOgImageAlt:
    "Woman with golden retriever holding a Texas emotional support animal letter from ESA Letter Texas",
  locale: "en_US",
  email: "support@esalettertexas.com",
} as const;
