"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type FaqItem = { question: string; answer: string };
function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-card border bg-brand-50 shadow-card transition-all duration-300 ${
        isOpen ? "border-brand-300 shadow-card-hover" : "border-brand-100 hover:border-brand-200"
      }`}
    >
      <button
        type="button"
        className="group flex w-full items-center gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span
          className={`flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-bold transition-colors duration-300 ${
            isOpen ? "bg-gradient-brand-soft text-white" : "bg-white text-brand-600 group-hover:bg-brand-100"
          }`}
        >
          Q
        </span>
        <span className="flex-1 font-bold text-neutral-900">{item.question}</span>
        <svg
          className={`h-5 w-5 flex-none text-brand-600 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 4a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H5a1 1 0 110-2h4V5a1 1 0 011-1z" />
        </svg>
      </button>

      {/* Grid-rows trick animates height without measuring content */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex items-start gap-4 px-5 pb-5 pl-[4.25rem]">
            <p className="text-sm leading-relaxed text-neutral-600">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** M5: FAQ accordion. Also emits FAQPage JSON-LD schema. */
export function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  subhead,
}: {
  items: FaqItem[];
  title?: string;
  subhead?: string;
}) {
  // Each card's open/closed state is independent; opening a card in one
  // column must never close a card in the other column.
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(() => new Set([0]));

  function toggle(i: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
     <div id="faq" className="scroll-mt-20">
    <section className="relative overflow-hidden bg-white section-py">
      {/* Dotted texture: keeps this section visually distinct from the mint
          sections (locations, pricing) directly above and below it */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_65%_65%_at_50%_0%,black_35%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-100/40 blur-3xl"
      />

      <Container className="relative max-w-5xl">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand-soft text-white shadow-sm">
          <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a1.5 1.5 0 112.28 1.93c-.31.35-.72.62-.94.85-.28.29-.28.66-.28.94v.09a.75.75 0 001.5 0v-.02c.02-.06.09-.14.24-.3.32-.33.9-.76 1.36-1.28A3 3 0 106.5 9.5a.75.75 0 001.5 0 1.5 1.5 0 01.94-1.56zM10 15a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <SectionHeading title={title} subhead={subhead} align="center" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[0, 1].map((column) => (
            <div key={column} className="flex flex-col gap-4">
              {items
                .map((item, i) => ({ item, i }))
                .filter((_, idx) => idx % 2 === column)
                .map(({ item, i }) => (
                  <FaqCard
                    key={item.question}
                    item={item}
                    isOpen={openIndexes.has(i)}
                    onToggle={() => toggle(i)}
                  />
                ))}
            </div>
          ))}
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
    </div>
  );
}
