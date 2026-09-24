import Link from "next/link";

export type RelatedLink = { label: string; href: string };

/** M8: Related pages block. Manually curated 3-5 internal links; sidebar or end-of-content. */
export function RelatedPages({
  title = "Related Pages",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  return (
    <nav
      aria-label={title}
      className="overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card"
    >
      <div className="border-b border-brand-100 bg-[linear-gradient(160deg,var(--color-brand-50)_0%,var(--color-brand-100)_100%)] px-5 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white text-brand-600 ring-1 ring-brand-200">
            <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5z" />
              <path d="M7.414 15.414a2 2 0 01-2.828-2.828l3-3a2 2 0 012.828 0 1 1 0 001.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 00-1.414-1.414l-1.5 1.5z" />
            </svg>
          </span>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-700">{title}</h3>
        </div>
      </div>
      <ul className="space-y-0.5 p-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex items-center justify-between gap-2 rounded-control px-3 py-2.5 text-sm font-semibold text-neutral-700 transition-colors duration-150 hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
              <svg
                className="h-3.5 w-3.5 flex-none text-neutral-300 transition-all duration-150 group-hover:translate-x-0.5 group-hover:text-brand-500"
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
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
