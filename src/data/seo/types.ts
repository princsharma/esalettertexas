/** CMS-shaped per-page SEO — editable in data layer until a headless CMS is wired. */
export type RobotsSeoOverride = {
  index?: boolean;
  follow?: boolean;
  noarchive?: boolean;
  nosnippet?: boolean;
};

export type OpenGraphType = "website" | "article" | "product";

export type OpenGraphSeoOverride = {
  title?: string;
  description?: string;
  /** Path or absolute URL */
  image?: string;
  type?: OpenGraphType;
};

export type PageSeoFields = {
  metaTitle: string;
  metaDescription: string;
  /** Site path with trailing slash, e.g. `/cost/` */
  canonicalPath: string;
  canonicalOverride?: string;
  robots?: RobotsSeoOverride;
  openGraph?: OpenGraphSeoOverride;
  /** Hint for page templates (Article, HowTo, Product, Service, WebPage). */
  schemaTypeOverride?:
    | "WebPage"
    | "Article"
    | "HowTo"
    | "Product"
    | "Service"
    | "FAQPage";
};

export type BlogPostSeoFields = Partial<
  Omit<PageSeoFields, "canonicalPath" | "metaTitle" | "metaDescription">
> & {
  metaTitle?: string;
  metaDescription?: string;
  canonicalOverride?: string;
  /** ISO 8601 date for Article `dateModified` */
  dateModified?: string;
  schemaTypeOverride?: "Article";
};
