import Link from "next/link";
import { Breadcrumbs } from "@/components/sections";
import { SubmitButton } from "@/components/ui/Button";
import { FieldLabel, TextInput } from "@/components/ui/Field";
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
          <h1 className="text-h1 text-neutral-900">Search</h1>
          <form method="get" action="/search/" className="mt-6">
            <FieldLabel htmlFor="site-search-q">Search guides and blog posts</FieldLabel>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-stretch">
              <TextInput
                id="site-search-q"
                type="search"
                name="q"
                defaultValue={q}
                className="min-w-0 flex-1"
                autoComplete="off"
              />
              <SubmitButton size="md" className="w-full shrink-0 sm:w-auto">Search</SubmitButton>
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
