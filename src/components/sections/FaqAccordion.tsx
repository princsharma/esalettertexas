"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type FaqItem = { question: string; answer: string };
export function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="conversion-faq-item" data-open={isOpen ? "true" : "false"}>
      <button
        type="button"
        className="conversion-faq-trigger"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span className="conversion-faq-question text-h4">{item.question}</span>
        <span className="conversion-faq-toggle" aria-hidden="true">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Grid-rows trick animates height without measuring content */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="conversion-faq-answer-wrap">
            <p className="conversion-faq-answer text-body text-neutral-600">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** M5: FAQ accordion. Also emits FAQPage JSON-LD schema.
 *  `railGutter` is legacy: only use if extended sidebar must overlap (prefer ArticleLayout column sticky + `#faq`). */
export function FaqAccordion({
  items,
  title = "Frequently Asked Questions",
  subhead,
  railGutter = false,
}: {
  items: FaqItem[];
  title?: ReactNode;
  subhead?: string;
  railGutter?: boolean;
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
    <section className="relative overflow-hidden bg-background section-py">
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

      <Container className={`relative ${railGutter ? "" : "max-w-5xl"}`}>
        <div className={railGutter ? "lg:grid lg:grid-cols-[1fr_18rem] lg:gap-12" : ""}>
          <div className={railGutter ? "min-w-0 mx-auto max-w-5xl lg:mx-0 lg:max-w-none" : ""}>
            <span
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 shadow-sm ring-1 ring-neutral-200"
              aria-hidden="true"
            >
              <Image
                src="/icons/fraquency asked quetion.webp"
                alt=""
                width={30}
                height={30}
                className="icon-decorative h-[30px] w-[30px] object-contain"
              />
            </span>
            <SectionHeading title={title} subhead={subhead} align="center" />

            <div className="card-grid-2 mt-10">
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
          </div>

          {railGutter && <div aria-hidden="true" className="hidden lg:block" />}
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
