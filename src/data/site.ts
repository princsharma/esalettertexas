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

function httpsOrigin(host: string): string {
  return `https://${host.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
}

/**
 * Public Vercel host. `VERCEL_URL` is the unique deployment host, and Vercel
 * Authentication blocks it, so social previews cannot load images from there.
 */
function hostedOrigin(): string | undefined {
  if (process.env.VERCEL_ENV === "production") {
    const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
    if (production) return httpsOrigin(production);
  }
  if (process.env.VERCEL_ENV === "preview") {
    const branch = process.env.VERCEL_BRANCH_URL?.trim();
    if (branch) return httpsOrigin(branch);
  }
  const deployment = process.env.VERCEL_URL?.trim();
  if (deployment) return httpsOrigin(deployment);
  return undefined;
}

/** Canonical site origin (sitemap, schema, canonical links). */
export function siteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  return hostedOrigin() ?? developmentOrigin() ?? "https://esalettertexas.com";
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
