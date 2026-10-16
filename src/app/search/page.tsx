import Link from "next/link";
import { Breadcrumbs } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { searchSite } from "@/lib/site-search";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/search/");

type PageProps = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: PageProps) {
  const { q = "" } = await searchParams;
  const results = searchSite(q);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} pageUrl="/search/" />
      <section className="section-py bg-white">
        <Container className="max-w-2xl">
          <h1 className="text-2xl font-bold text-neutral-900">Search</h1>
          <form method="get" action="/search/" className="mt-6">
            <label className="block text-sm font-semibold text-neutral-800" htmlFor="site-search-q">
              Search guides and blog posts
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="site-search-q"
                type="search"
                name="q"
                defaultValue={q}
                className="min-w-0 flex-1 rounded-control border border-neutral-200 px-3 py-2.5 text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                autoComplete="off"
              />
              <button
                type="submit"
                className="rounded-control bg-gradient-brand px-4 py-2.5 text-sm font-bold text-white"
              >
                Search
              </button>
            </div>
          </form>

          {q.trim().length >= 2 && (
            <div className="mt-10">
              <p className="text-sm text-neutral-500">
                {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;{q.trim()}&rdquo;
              </p>
              <ul className="mt-4 space-y-4">
                {results.map((row) => (
                  <li key={row.href} className="border-b border-neutral-100 pb-4">
                    <Link href={row.href} className="font-semibold text-brand-800 hover:text-brand-900">
                      {row.title}
                    </Link>
                    {row.excerpt && (
                      <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{row.excerpt}</p>
                    )}
                  </li>
                ))}
              </ul>
              {results.length === 0 && (
                <p className="mt-4 text-sm text-neutral-600">
                  No matches. Browse the{" "}
                  <Link href="/sitemap/" className="font-semibold text-brand-700">
                    sitemap
                  </Link>{" "}
                  or{" "}
                  <Link href="/faq/" className="font-semibold text-brand-700">
                    FAQ
                  </Link>
                  .
                </p>
              )}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
