import Link from "next/link";

export type RelatedLink = { label: string; href: string };

/** M8 — Related pages block. Manually curated 3-5 internal links; sidebar or end-of-content. */
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
      className="rounded-card border border-neutral-200 bg-neutral-50 p-5"
    >
      <h3 className="text-caption text-neutral-500">{title}</h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm font-medium text-brand-700 transition-colors duration-150 hover:text-brand-800 hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
