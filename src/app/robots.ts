import type { MetadataRoute } from "next";
import { siteOrigin } from "@/data/site";

/** `/robots.txt` — crawl rules for search and AI bots. */
export default function robots(): MetadataRoute.Robots {
  const base = siteOrigin();

  const sharedDisallow = [
    "/wp-admin/",
    "/?s=",
    "/search/",
    "/*?replytocom=",
    "/*?utm_",
    "/*&utm_",
    "/thank-you/",
    "/wp-json/wp/v2/users",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/wp-admin/admin-ajax.php"],
        disallow: sharedDisallow,
      },
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
