import type { MetadataRoute } from "next";
import { SITEMAP_XML_LASTMOD, SITEMAP_XML_PATHS } from "@/data/sitemap-xml-urls";
import { getSitemapRowMeta } from "@/lib/sitemap-meta";
import { absoluteUrl } from "@/lib/seo";

/** `/sitemap.xml` — approved indexable URLs only. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${SITEMAP_XML_LASTMOD}T00:00:00.000Z`);

  return SITEMAP_XML_PATHS.map((path) => {
    const { changeFrequency, priority } = getSitemapRowMeta(path);
    return {
      url: absoluteUrl(path),
      lastModified,
      changeFrequency,
      priority,
    };
  });
}
