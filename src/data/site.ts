/** Site-wide constants for SEO, schema, and canonical URLs. */
export const SITE = {
  name: "ESA Letter Texas",
  legalName: "ESA Letter Texas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://esalettertexas.com",
  defaultOgImage: "/images/Pricing.webp",
  locale: "en_US",
  email: "support@esalettertexas.com",
} as const;
