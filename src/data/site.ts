/** Canonical site origin (sitemap, schema, canonical links). */
export function siteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return "https://esalettertexas.com";
}

/**
 * Origin used for `og:image` / Twitter image URLs.
 * In dev, defaults to localhost so preview tools can load the file from `next dev`.
 * Override with NEXT_PUBLIC_OG_ORIGIN when testing against a staging URL.
 */
export function ogImageOrigin(): string {
  const override = process.env.NEXT_PUBLIC_OG_ORIGIN?.trim();
  if (override) {
    return override.replace(/\/$/, "");
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return siteOrigin();
}

/** Site-wide constants for SEO, schema, and canonical URLs. */
export const SITE = {
  name: "ESA Letter Texas",
  legalName: "ESA Letter Texas",
  url: siteOrigin(),
  /**
   * Default Open Graph / Twitter card (WebP) — same file on all pages unless overridden.
   * Path: `/og/og-card.webp` (also keep `og-card.jpg` for manual Facebook debugger tests if WebP fails).
   */
  defaultOgImage: "/og/og-card.webp",
  defaultOgImageFallback: "/og/og-card.jpg",
  defaultOgImageWidth: 449,
  defaultOgImageHeight: 561,
  defaultOgImageAlt:
    "Woman with golden retriever holding a Texas emotional support animal letter from ESA Letter Texas",
  locale: "en_US",
  email: "support@esalettertexas.com",
} as const;
