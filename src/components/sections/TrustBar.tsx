import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DEFAULT_TRUST_ITEMS } from "@/data/trust-bar";

const DEFAULT_ICON = (
  <path d="M10 1.5l2.47 5.6 6.03.6-4.55 4.1 1.3 5.9L10 14.9l-5.25 2.8 1.3-5.9-4.55-4.1 6.03-.6L10 1.5z" />
);

/** One distinct icon per known trust claim: mirrors the matching Hero trust
 *  badges so the same claim reads as the same glyph site-wide. Anything not
 *  in this map (a custom `items` list) falls back to the star. */
const TRUST_ICONS: Record<string, string> = {
  "Licensed TX therapists": "/icons/Licensed TX therapists.webp",
  "HIPAA compliant": "/icons/HIPAA compliant.webp",
  "Moneyback guarantee": "/icons/Moneyback guarantee_1.webp",
};

/** M2: Trust bar */
export function TrustBar({ items = DEFAULT_TRUST_ITEMS }: { items?: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-neutral-200 bg-brand-50 py-6 md:py-7">
      {/* Soft ambient glow: small and restrained, this is a slim strip, not a full section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
      />
      <Container className="relative">
        <ul className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {items.map((item) => (
            <li key={item}>
              <span className="group flex items-center gap-2.5 rounded-full border border-brand-200/70 bg-white px-4 py-2 text-sm font-semibold text-brand-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card sm:px-4.5 sm:py-2.5 sm:text-base">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white ring-1 ring-brand-100 transition-transform duration-300 group-hover:rotate-12">
                  {TRUST_ICONS[item] ? (
                    <Image src={TRUST_ICONS[item]} alt="" width={200} height={200} className="object-contain" />
                  ) : (
                    <svg className="h-6.7 w-6.7 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      {DEFAULT_ICON}
                    </svg>
                  )}
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
