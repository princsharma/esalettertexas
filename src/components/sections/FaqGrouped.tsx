"use client";

import { useState } from "react";
import type { FaqItem } from "./FaqAccordion";
import { FaqCard } from "./FaqAccordion";

export type FaqTopicGroup = { id: string; title: string; items: FaqItem[] };

/** M5 grouped FAQ for /faq/ — single-page topic sections without repeated hero chrome. */
export function FaqGrouped({ groups }: { groups: FaqTopicGroup[] }) {
  const [openKeys, setOpenKeys] = useState<Set<string>>(() => new Set());

  function toggle(key: string) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) =>
      g.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };

  return (
    <div className="max-w-5xl mx-auto space-y-12">
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-24">
          <h2 className="text-center text-2xl font-bold text-neutral-900">{group.title}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {group.items.map((item, i) => {
              const key = `${group.id}-${i}`;
              return (
                <FaqCard
                  key={item.question}
                  item={item}
                  isOpen={openKeys.has(key)}
                  onToggle={() => toggle(key)}
                />
              );
            })}
          </div>
        </section>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
