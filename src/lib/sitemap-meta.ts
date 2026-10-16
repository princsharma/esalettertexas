import type { MetadataRoute } from "next";

export type SitemapRowMeta = {
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

export function getSitemapRowMeta(path: string): SitemapRowMeta {
  const segments = path.split("/").filter(Boolean);
  const isBlogPost =
    path.startsWith("/blog/") && path !== "/blog/" && !path.startsWith("/blog/category/");

  let priority = 0.6;
  if (path === "/") priority = 1;
  else if (segments.length <= 1) priority = 0.8;

  return {
    changeFrequency: isBlogPost ? "monthly" : "weekly",
    priority,
  };
}

export function formatSitemapLastModified(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toISOString().slice(0, 10);
}
