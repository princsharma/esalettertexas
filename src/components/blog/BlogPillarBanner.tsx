import Link from "next/link";
import type { BlogCategory } from "@/data/blog/categories";

/** T8 required link to the matching silo pillar (from category CMS field). */
export function BlogPillarBanner({ category }: { category: BlogCategory }) {
  return (
    <div className="rounded-card border border-brand-200 bg-brand-50 p-5 shadow-card sm:p-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Silo guide</p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
        Start with our pillar page for full context, then browse category posts below.
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Link
          href={category.pillarHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-gradient-brand px-4 py-2 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5"
        >
          {category.pillarLabel}
          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        {category.supportingPillars?.map((pillar) => (
          <Link
            key={pillar.href}
            href={pillar.href}
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            {pillar.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
