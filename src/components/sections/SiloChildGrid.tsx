import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type SiloCard = { title: string; description: string; href: string; icon?: ReactNode };

const DEFAULT_PIN_ICON = (
  <path
    fillRule="evenodd"
    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
    clipRule="evenodd"
  />
);

/** M6 — Silo child-page grid. Auto-lists child pages of the current silo (e.g. conditions, cities).
 *  `variant="location"` swaps the badge for a map pin and adds a Texas tag — for city/location grids. */
export function SiloChildGrid({
  eyebrow,
  title,
  subhead,
  items,
  viewAllHref,
  viewAllLabel = "View all",
  variant = "default",
}: {
  eyebrow?: string;
  title: string;
  subhead?: string;
  items: SiloCard[];
  viewAllHref?: string;
  viewAllLabel?: string;
  variant?: "default" | "location";
}) {
  const isLocation = variant === "location";
  return (
       <div id="locations" className="scroll-mt-20">
    <section className={`relative overflow-hidden section-py ${isLocation ? "bg-brand-50" : "bg-white"}`}>
      {/* Background effect — soft brand/accent glows, matching the pricing section for location grids */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl ${
          isLocation ? "bg-brand-200/50" : "bg-brand-100/60"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full blur-3xl ${
          isLocation ? "bg-accent-200/30" : "bg-accent-100/50"
        }`}
      />
      {!isLocation && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
        />
      )}

      <Container className="relative">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading eyebrow={eyebrow} title={title} subhead={subhead} align="center" />
          {viewAllHref && (
            <Link
              href={viewAllHref}
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-all duration-200 hover:border-brand-400 hover:bg-brand-50"
            >
              {viewAllLabel}
              <svg
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item,index) => (
            <Link
              key={index}
              href={item.href}
              className={`animate-fade-up group relative flex flex-col overflow-hidden rounded-card border border-neutral-200 bg-white p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                isLocation ? "hover:border-accent-300" : "hover:border-brand-300"
              }`}
            >
              {/* Accent bar — sweeps in from the left on hover; orange for the location cards */}
              <span
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                  isLocation ? "bg-gradient-accent" : "bg-gradient-brand"
                }`}
              />

              {isLocation && (
                <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-brand-600 transition-colors duration-300 group-hover:bg-brand-100">
                  TX
                </span>
              )}

              <div className="flex flex-1 items-start gap-3.5">
                <span
                  className={`relative flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-bold text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                    isLocation ? "bg-gradient-brand-soft group-hover:-translate-y-0.5" : "bg-brand-600"
                  }`}
                >
                  {isLocation ? (
                    <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      {item.icon ?? DEFAULT_PIN_ICON}
                    </svg>
                  ) : (
                    item.title.charAt(0)
                  )}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="inline-block font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                    {item.title}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 block h-0.5 max-w-0 rounded-full bg-brand-500 transition-all duration-300 group-hover:max-w-full"
                    />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                </div>
              </div>

              <span className="mt-4 flex items-center gap-1.5 border-t border-neutral-100 pt-3.5 text-xs font-semibold text-brand-600 transition-colors duration-300 group-hover:border-brand-100">
                {isLocation ? "View city guide" : "Learn more"}
                <svg
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
    </div>
  );
}
