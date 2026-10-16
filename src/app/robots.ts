import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

/** Phase 1: allow indexing and point crawlers to the sitemap. */
export default function robots(): MetadataRoute.Robots {
  const base = SITE.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
