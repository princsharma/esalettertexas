import Link from "next/link";

export function BlogPagination({
  basePath,
  page,
  totalPages,
}: {
  basePath: string;
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const hrefFor = (p: number) => (p <= 1 ? basePath : `${basePath}?page=${p}`);
  const prev = page > 1 ? hrefFor(page - 1) : null;
  const next = page < totalPages ? hrefFor(page + 1) : null;

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-4"
      aria-label="Blog pagination"
    >
      {prev ? (
        <Link
          href={prev}
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:text-brand-700"
        >
          Previous
        </Link>
      ) : (
        <span className="rounded-full border border-transparent px-4 py-2 text-sm text-neutral-400">
          Previous
        </span>
      )}
      <span className="text-sm font-medium text-neutral-600">
        Page {page} of {totalPages}
      </span>
      {next ? (
        <Link
          href={next}
          className="rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:border-brand-300 hover:text-brand-700"
        >
          Next
        </Link>
      ) : (
        <span className="rounded-full border border-transparent px-4 py-2 text-sm text-neutral-400">
          Next
        </span>
      )}
    </nav>
  );
}
