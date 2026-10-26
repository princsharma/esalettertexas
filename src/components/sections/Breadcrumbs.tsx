import Link from "next/link";
import { breadcrumbListSchema } from "@/lib/schema";

export type BreadcrumbItem = { label: string; href?: string };

/** Slim breadcrumb strip, sits between the header and the page hero. */
export function Breadcrumbs({
  items,
  /** Canonical path of the current page (e.g. `/cost/`) for Rich Results when the last crumb has no link. */
  pageUrl,
}: {
  items: BreadcrumbItem[];
  pageUrl?: string;
}) {
  const schema = breadcrumbListSchema(items, pageUrl);

  return (
    <div className="border-b border-neutral-200 bg-neutral-100">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="py-2.5 sm:py-3">
          <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-neutral-500 sm:text-sm">
            {items.map((item, i) => (
              <li key={item.label} className="flex min-w-0 max-w-full items-center gap-1.5">
                {i > 0 && (
                  <svg
                    className="h-3.5 w-3.5 flex-none text-neutral-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="font-medium transition-colors duration-150 hover:text-brand-700"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="line-clamp-2 font-semibold text-neutral-800 sm:line-clamp-1">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
