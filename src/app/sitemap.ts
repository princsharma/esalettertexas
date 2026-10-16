import type { MetadataRoute } from "next";
import { getSitemapUrls } from "@/lib/sitemap-urls";
import { getSitemapRowMeta } from "@/lib/sitemap-meta";
import { absoluteUrl } from "@/lib/seo";

/** `/sitemap.xml` — all indexable URLs in build-phase order. */
export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapUrls().map((entry) => {
    const { changeFrequency, priority } = getSitemapRowMeta(entry.path);
    return {
      url: absoluteUrl(entry.path),
      lastModified: entry.lastModified ? new Date(entry.lastModified) : new Date(),
      changeFrequency,
      priority,
    };
  });
}
