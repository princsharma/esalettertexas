import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { DEFAULT_TRUST_ITEMS, TRUST_ITEM_ICONS } from "@/data/trust-bar";

const DEFAULT_ICON = (
  <path d="M10 1.5l2.47 5.6 6.03.6-4.55 4.1 1.3 5.9L10 14.9l-5.25 2.8 1.3-5.9-4.55-4.1 6.03-.6L10 1.5z" />
);

const ICON_IMG_CLASS =
  "h-7 w-7 flex-none object-contain sm:h-8 sm:w-8 md:h-9 md:w-9";

function TrustBarIcon({ item }: { item: string }) {
  const src = TRUST_ITEM_ICONS[item];
  if (src) {
    return (
      <Image
        key={src}
        src={src}
        alt={`${item} icon`}
        width={50}
        height={50}
        className={ICON_IMG_CLASS}
      />
    );
  }
  return (
    <svg className="h-6.7 w-6.7 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      {DEFAULT_ICON}
    </svg>
  );
}

function TrustBarIconWell({ item }: { item: string }) {
  return (
    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white ring-1 ring-brand-100 transition-transform duration-300 group-hover:rotate-12 sm:h-12 sm:w-12">
      <TrustBarIcon item={item} />
    </span>
  );
}

/** M2: Trust bar */
export function TrustBar({ items = DEFAULT_TRUST_ITEMS }: { items?: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-neutral-200 bg-neutral-100 py-6 md:py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 left-1/2 h-40 w-72 -translate-x-1/2 rounded-full bg-brand-200/40 blur-3xl"
      />
      <Container className="relative">
        <ul
          className="flex flex-nowrap items-center justify-start gap-3 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-4 md:overflow-visible md:pb-0 lg:gap-6 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <li key={item} className="shrink-0">
              <span
                className="group flex items-center gap-2.5 whitespace-nowrap rounded-full border border-brand-200/70 bg-white px-3.5 py-2 text-sm font-semibold text-brand-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card sm:gap-3 sm:px-4 sm:py-2.5 sm:text-base"
              >
                <TrustBarIconWell item={item} />
                <span>{item}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
