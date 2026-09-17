import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { DEFAULT_TRUST_ITEMS } from "@/data/trust-bar";

const DEFAULT_ICON = (
  <path d="M10 1.5l2.47 5.6 6.03.6-4.55 4.1 1.3 5.9L10 14.9l-5.25 2.8 1.3-5.9-4.55-4.1 6.03-.6L10 1.5z" />
);

/** One distinct icon per known trust claim — mirrors the matching Hero trust
 *  badges so the same claim reads as the same glyph site-wide. Anything not
 *  in this map (a custom `items` list) falls back to the star. */
const TRUST_ICONS: Record<string, ReactNode> = {
  "Licensed TX therapists": (
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zM3 17c0-3.314 3.134-6 7-6s7 2.686 7 6H3z"
      clipRule="evenodd"
    />
  ),
  "HIPAA compliant": (
    <path d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z" />
  ),
  "Moneyback guarantee": (
    <path
      fillRule="evenodd"
      d="M10 1.5a1 1 0 01.4.083l6 2.5A1 1 0 0117 5v4.5c0 4.35-2.905 7.842-6.6 9.386a1 1 0 01-.8 0C5.905 17.342 3 13.85 3 9.5V5a1 1 0 01.6-.917l6-2.5A1 1 0 0110 1.5zm3.7 6.3a1 1 0 00-1.4-1.4L9 9.68l-1.3-1.3a1 1 0 00-1.4 1.42l2 2a1 1 0 001.4 0l4-4.02z"
      clipRule="evenodd"
    />
  ),
  "24-48hr turnaround": (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V5z"
      clipRule="evenodd"
    />
  ),
};

/** M2 — Trust bar */
export function TrustBar({ items = DEFAULT_TRUST_ITEMS }: { items?: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-neutral-200 bg-brand-50 py-6 md:py-7">
      {/* Soft ambient glow — small and restrained, this is a slim strip, not a full section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
      />
      <Container className="relative">
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {items.map((item) => (
            <li key={item}>
              <span className="group flex items-center gap-2.5 rounded-full border border-brand-200/70 bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card sm:px-4.5 sm:py-2.5 sm:text-base">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:rotate-12 group-hover:bg-brand-600 group-hover:text-white">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    {TRUST_ICONS[item] ?? DEFAULT_ICON}
                  </svg>
                </span>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
