import type { ReactNode } from "react";

/** Body H2 section for T2 long-form pages: numbered badge + heading + prose slot. */
export function ArticleSection({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-neutral-100 pt-10 first:border-t-0 first:pt-0"
    >
      <div className="flex items-start gap-4 sm:gap-5">
        <span className="hidden h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-600 ring-1 ring-brand-100 sm:flex">
          {String(index).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 [text-wrap:balance] sm:text-4xl">
            {title}
          </h2>
          <div className="prose-article mt-4 space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

/** subsection inside an ArticleSection. */
export function ArticleSubsection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">{title}</h3>
      <div className="mt-2 space-y-3">{children}</div>
    </div>
  );
}

/** Checklist / bullet list styled to match the site's card-based lists (ESALetterIntro, etc.). */
export function ArticleChecklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-control border border-neutral-200 bg-white px-4 py-3 text-base font-medium text-neutral-800 shadow-sm"
        >
          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-600 text-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Red-flag / negative list, same shape as ArticleChecklist but in the danger tone. */
export function ArticleRedFlags({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-control border border-danger-500/20 bg-danger-500/5 px-4 py-3 text-base font-medium text-neutral-800"
        >
          <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-danger-500/15 text-danger-600">
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
