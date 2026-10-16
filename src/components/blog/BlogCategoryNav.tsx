import Link from "next/link";
import type { BlogCategory } from "@/data/blog/categories";
import { categoryArchiveHref } from "@/lib/blog";

export function BlogCategoryNav({ categories }: { categories: BlogCategory[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={categoryArchiveHref(cat.slug)}
          className="group rounded-card border border-neutral-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Category</p>
          <h3 className="mt-1 text-lg font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
            {cat.name}
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-600">
            {cat.intro.split(".")[0]}.
          </p>
          <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700">
            View archive
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
