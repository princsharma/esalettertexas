import type { PageSeoFields } from "./types";
import { PAGE_SEO_REGISTRY } from "./seo-registry";

/** Utility routes not listed in the 51-URL SEO spreadsheet. */
const UTILITY_PAGE_SEO: Record<string, PageSeoFields> = {
  "/search/": {
    metaTitle: "Search | ESA Letter Texas",
    metaDescription: "Search ESA Letter Texas guides, blog posts, and silo pages.",
    canonicalPath: "/search/",
    robots: { index: false, follow: true },
  },
  "/sitemap/": {
    metaTitle: "XML Sitemap | ESA Letter Texas",
    metaDescription:
      "Tabular XML sitemap of every indexable ESA Letter Texas URL with last modified dates, change frequency, and priority.",
    canonicalPath: "/sitemap/",
    robots: { index: false, follow: true },
  },
};

/** CMS registry for static routes — spreadsheet URLs + utility pages. */
export const STATIC_PAGE_SEO: Record<string, PageSeoFields> = {
  ...PAGE_SEO_REGISTRY,
  ...UTILITY_PAGE_SEO,
};
