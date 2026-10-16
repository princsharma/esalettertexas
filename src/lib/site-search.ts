import { BLOG_POSTS } from "@/data/blog/posts";
import { getSitemapUrls } from "@/lib/sitemap-urls";

export type SearchResult = {
  href: string;
  title: string;
  excerpt?: string;
};

/** Lightweight site search (blog + templated URLs). No header UI required. */
export function searchSite(query: string, limit = 20): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q || q.length < 2) return [];

  const fromSitemap: SearchResult[] = getSitemapUrls()
    .filter((u) => u.label.toLowerCase().includes(q) || u.path.toLowerCase().includes(q))
    .map((u) => ({ href: u.path, title: u.label }));

  const fromBlog: SearchResult[] = BLOG_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.slug.toLowerCase().includes(q),
  ).map((p) => ({
    href: `/blog/${p.slug}/`,
    title: p.title,
    excerpt: p.excerpt,
  }));

  const seen = new Set<string>();
  const merged: SearchResult[] = [];
  for (const row of [...fromBlog, ...fromSitemap]) {
    if (seen.has(row.href)) continue;
    seen.add(row.href);
    merged.push(row);
    if (merged.length >= limit) break;
  }
  return merged;
}
