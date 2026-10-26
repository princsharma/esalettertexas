import Link from "next/link";
import { Breadcrumbs } from "@/components/sections";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/data/site";
import { absoluteUrl, pageMetadata } from "@/lib/seo";
import { formatSitemapLastModified, getSitemapRowMeta } from "@/lib/sitemap-meta";
import { getSitemapSections, getSitemapUrls } from "@/lib/sitemap-urls";

export const metadata = pageMetadata("/sitemap/");

function FrequencyBadge({ value }: { value: string }) {
  return (
    <span className="inline-flex rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium capitalize text-neutral-600">
      {value}
    </span>
  );
}

export default function SitemapIndexPage() {
  const sections = getSitemapSections();
  const allUrls = getSitemapUrls();
  const total = allUrls.length;

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "XML Sitemap" }]} />

      <section className="section-py bg-neutral-50">
        <Container>
          <div className="overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card">
            {/* Hero band */}
            <div className="relative bg-brand-950 px-6 py-10 sm:px-10 sm:py-12">
              <div
                className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-accent-400 to-brand-400"
                aria-hidden="true"
              />
              <h1 className="text-h1 text-white">XML Sitemap</h1>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-brand-100">
                This sitemap lists every indexable page on {SITE.name} in build-phase order for search
                engines and audits. Crawlers should use the machine-readable feed at{" "}
                <Link
                  href="/sitemap.xml"
                  className="font-semibold text-accent-300 underline decoration-accent-400/80 underline-offset-2 hover:text-white"
                >
                  /sitemap.xml
                </Link>
                .
              </p>
            </div>

            {/* Meta chips */}
            <div className="flex flex-wrap items-center gap-3 border-b border-neutral-200 bg-neutral-50/80 px-6 py-4 sm:px-10">
              <span className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-neutral-800 shadow-sm">
                {total} URLs indexed
              </span>
              <span className="rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-semibold text-neutral-800 shadow-sm">
                Sitemap protocol 0.9
              </span>
            </div>

            {/* Table by build phase */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:px-10">
                      URL
                    </th>
                    <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Last modified
                    </th>
                    <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                      Change frequency
                    </th>
                    <th className="px-6 py-3.5 text-right text-xs font-semibold uppercase tracking-wider text-neutral-500 sm:px-10">
                      Priority
                    </th>
                  </tr>
                </thead>
                {sections.map((section) => (
                  <tbody key={`${section.phase}-${section.title}`} className="divide-y divide-neutral-100">
                    <tr className="bg-brand-50/60">
                      <td
                        colSpan={4}
                        className="px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-brand-800 sm:px-10"
                      >
                        <span className="mr-2 inline-flex rounded bg-brand-200/80 px-2 py-0.5 text-[10px] text-brand-900">
                          Phase {section.phase}
                        </span>
                        {section.title}
                        <span className="ml-2 font-normal text-brand-600">({section.urls.length})</span>
                      </td>
                    </tr>
                    {section.urls.map((entry) => {
                      const href = absoluteUrl(entry.path);
                      const { changeFrequency, priority } = getSitemapRowMeta(entry.path);
                      const lastMod = formatSitemapLastModified(entry.lastModified);

                      return (
                        <tr key={entry.path} className="transition-colors hover:bg-brand-50/30">
                          <td className="px-6 py-3.5 sm:px-10">
                            <Link
                              href={entry.path}
                              className="font-semibold text-neutral-900 underline decoration-accent-500 decoration-2 underline-offset-[3px] hover:text-brand-800 hover:decoration-brand-600"
                              title={entry.label}
                            >
                              {href}
                            </Link>
                          </td>
                          <td className="whitespace-nowrap px-4 py-3.5 text-neutral-600">{lastMod}</td>
                          <td className="px-4 py-3.5">
                            <FrequencyBadge value={changeFrequency ?? "weekly"} />
                          </td>
                          <td className="px-6 py-3.5 text-right font-bold tabular-nums text-neutral-900 sm:px-10">
                            {priority.toFixed(1)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
