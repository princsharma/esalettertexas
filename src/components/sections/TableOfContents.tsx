import Image from "next/image";

export type TocItem = { id: string; label: string };
export type TocImage = { src: string; alt: string };

/** M2: Table of contents. Auto-links to each H2 section's id; required on long-form T2 pages.
 *  Optional `image` renders a content thumbnail alongside the list on wider cards. */
export function TableOfContents({
  items,
  title = "On this page",
  image,
}: {
  items: TocItem[];
  title?: string;
  image?: TocImage;
}) {
  return (
    <nav
      aria-label={title}
      className="overflow-hidden rounded-card border border-brand-100 bg-[linear-gradient(160deg,var(--color-brand-50)_0%,var(--color-brand-100)_100%)] p-5 sm:p-6"
    >
      <div className={image ? "flex flex-col gap-5 sm:flex-row sm:items-stretch" : undefined}>
        <div className="min-w-0 flex-1">
          <p className="text-caption text-brand-600 font-semibold">{title}</p>

          <ol className="mt-3 space-y-1.5">
            {items.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center gap-2.5 rounded-control px-2 py-1.5 -mx-2 text-md font-medium text-neutral-700 transition-colors duration-150 hover:bg-white hover:text-brand-700"
                >
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white text-[14px] font-bold text-brand-600 ring-1 ring-brand-200 transition-colors duration-150 group-hover:bg-brand-600 group-hover:text-white group-hover:ring-brand-600">
                    {i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {image && (
          <div className="relative aspect-[4/3] w-full flex-none overflow-hidden rounded-control shadow-card ring-1 ring-brand-950/5 sm:aspect-auto sm:w-44">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, 11rem"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </nav>
  );
}
