"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { FaqItem } from "./FaqAccordion";
import { FaqCard } from "./FaqAccordion";
import { PAGE_HERO } from "@/data/page-heroes";

export type FaqTopicGroup = {
  id: string;
  title: string;
  items: FaqItem[];
  imageSrc?: string;
  imageAlt?: string;
};

function firstItemKey(groupId: string) {
  return `${groupId}-0`;
}

/** /faq/ — image column + topic-filtered accordion. */
export function FaqGrouped({ groups }: { groups: FaqTopicGroup[] }) {
  const [activeGroupId, setActiveGroupId] = useState(() => groups[0]?.id ?? "");
  const [openKeys, setOpenKeys] = useState<Set<string>>(() => {
    const id = groups[0]?.id;
    return id ? new Set([firstItemKey(id)]) : new Set();
  });

  const activeGroup = useMemo(
    () => groups.find((g) => g.id === activeGroupId) ?? groups[0],
    [groups, activeGroupId],
  );

  const activeImageSrc = activeGroup?.imageSrc ?? PAGE_HERO.faq;
  const activeImageAlt =
    activeGroup?.imageAlt ?? "Texas renter reviewing fair housing and ESA letter guidance";

  function toggle(key: string) {
    setOpenKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function selectGroup(id: string) {
    setActiveGroupId(id);
    setOpenKeys(new Set([firstItemKey(id)]));
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

  if (!activeGroup) return null;

  return (
    <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14 xl:gap-16">
      {/* Left — photo (updates with active category) */}
      <div className="relative mx-auto w-full max-w-md lg:sticky lg:top-24 lg:mx-0 lg:max-w-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-100/60 via-transparent to-accent-100/40 blur-2xl"
        />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-photo ring-1 ring-brand-950/5 sm:aspect-[5/6]">
          <Image
            key={activeImageSrc}
            src={activeImageSrc}
            alt={activeImageAlt}
            fill
            sizes="(max-width: 1024px) 90vw, 420px"
            className="object-cover transition-opacity duration-300"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/75 via-brand-950/15 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-wider text-brand-100">
              ESA Letter Texas
            </p>
            <p className="text-body-lg mt-2 font-medium text-white [text-wrap:balance]">
              {activeGroup.items.length} questions in this topic
            </p>
          </div>
        </div>
      </div>

      {/* Right — filters + accordion */}
      <div className="min-w-0">
        <p className="text-label text-brand-600">Browse by topic</p>
        <h2 className="text-h2 mt-2 text-neutral-900 [text-wrap:balance]">
          {activeGroup.title}
        </h2>
        <p className="text-body mt-2 text-neutral-600">
          Select a category, then expand a question to read the answer.
        </p>

        <div
          className="mt-5 grid grid-cols-4 gap-1.5 sm:gap-2"
          role="tablist"
          aria-label="FAQ topics"
        >
          {groups.map((group) => {
            const isActive = group.id === activeGroupId;
            return (
              <button
                key={group.id}
                id={`faq-tab-${group.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`faq-panel-${group.id}`}
                onClick={() => selectGroup(group.id)}
                className={`w-full min-w-0 rounded-full px-1.5 py-2 text-center text-[11px] font-semibold leading-tight transition-all duration-200 sm:px-2.5 sm:text-xs md:px-3 md:text-sm ${
                  isActive
                    ? "bg-brand-700 text-white shadow-sm ring-1 ring-brand-800"
                    : "bg-brand-50 text-brand-800 ring-1 ring-brand-200 hover:bg-brand-100"
                }`}
              >
                {group.title}
              </button>
            );
          })}
        </div>

        <div
          className="mt-6 space-y-3"
          role="tabpanel"
          id={`faq-panel-${activeGroup.id}`}
          aria-labelledby={`faq-tab-${activeGroupId}`}
        >
          {activeGroup.items.map((item, i) => {
            const key = `${activeGroup.id}-${i}`;
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
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
