import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

/** Slim breadcrumb strip, sits between the header and the page hero. */
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: item.href } : {}),
    })),
  };

  return (
    <div className="border-b border-neutral-100 bg-neutral-50">
      <div className="container-page">
        <nav aria-label="Breadcrumb" className="py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-neutral-500">
            {items.map((item, i) => (
              <li key={item.label} className="flex items-center gap-1.5">
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
                  <span className="font-semibold text-neutral-800">{item.label}</span>
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
