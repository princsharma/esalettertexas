import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type TrustBadge = { label: string ,
   icon?: string | any
  };

export function Hero({
  eyebrow,
  title,
  subhead,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  trustBadges = [],
  variant = "full",
  image = null,
  backgroundImage = null,
}: {
  eyebrow?: string;
  title: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  trustBadges?: TrustBadge[];
  variant?: "full" | "compact";
  image?: string | null;
  backgroundImage?: string | null;
}) {
  const isFull = variant === "full";

  return (
    <section className="relative overflow-hidden bg-hero-mesh">
      {backgroundImage && (
        <>
          <div aria-hidden="true" className="absolute inset-0">
            <Image src={backgroundImage} alt="" fill priority className="object-cover" />
          </div>
          {/* Brand-tone wash over the photo — keeps the teal/accent mood and text legibility */}
          <div aria-hidden="true" className="absolute inset-0 bg-hero-mesh opacity-90 mix-blend-multiply" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/20 to-transparent" />
        </>
      )}
      {/* Ambient glow orbs — slow drifting float, unique to the hero (other
          hero-toned sections use static blobs) so this reads as its own space */}
      <div
        aria-hidden="true"
        className="animate-float-slow pointer-events-none absolute -top-20 right-[10%] h-80 w-80 rounded-full bg-accent-400/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-float-slow-delayed pointer-events-none absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-brand-300/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-brand-950/40 blur-3xl"
      />
      {/* Soft dot-noise texture — distinct from the line-grid used elsewhere on the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(ellipse_75%_75%_at_50%_20%,black_30%,transparent_100%)]"
      />

      <Container
        className={`relative ${isFull ? "py-16 md:py-24" : "py-14 md:py-16"}`}
      >
        <div className={isFull ? "grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-16" : undefined}>
          <div className={isFull ? "" : "max-w-2xl"}>
            {eyebrow && (
              <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-accent text-white">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>
                <span className="text-sm font-bold text-white sm:text-base">{eyebrow}</span>
              </p>
            )}
            <h1
              className={`${
                isFull ? "text-display" : "text-4xl md:text-5xl font-bold leading-tight tracking-tight"
              } text-white [text-wrap:balance]`}
            >
              {title}
            </h1>
            <p
              className={`mt-5 text-brand-100 ${
                isFull ? "text-lg md:text-xl max-w-xl" : "text-base md:text-lg max-w-xl"
              } leading-relaxed`}
            >
              {subhead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={ctaHref}
                size="lg"
                className="group shadow-lg shadow-accent-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-900/40"
              >
                {ctaLabel}
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
              </Button>
              {secondaryCtaLabel && secondaryCtaHref && (
                <Button
                  href={secondaryCtaHref}
                  size="lg"
                  variant="ghost"
                  className="!text-white ring-1 ring-white/20 hover:!bg-white/10 hover:ring-white/40"
                >
                  {secondaryCtaLabel}
                </Button>
              )}
            </div>

            {trustBadges.length > 0 && (
              <ul className="mt-9 grid gap-4 sm:grid-cols-3">
                {trustBadges.map((b) => (
                  <li key={b.label} className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/10 text-accent-400 ring-1 ring-white/15 backdrop-blur-sm">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-bold text-white md:text-base">{b.label}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Review strip — social proof, sits under the feature list */}
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["JM", "AR", "KP", "TL"].map((initials) => (
                    <span
                      key={initials}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand-soft text-[11px] font-bold text-white ring-2 ring-brand-800"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-accent-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10 2a1 1 0 01.894.553l1.382 2.76 3.046.443a1 1 0 01.555 1.706l-2.205 2.15.52 3.034a1 1 0 01-1.451 1.054L10 12.27l-2.741 1.43a1 1 0 01-1.451-1.054l.52-3.034-2.205-2.15a1 1 0 01.555-1.706l3.046-.443 1.382-2.76A1 1 0 0110 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-brand-200">Trusted by 4,000+ Texans</p>
                </div>
              </div>
              <div className="text-sm font-bold text-white">
                4.9/5 <span className="font-medium text-brand-100">average client rating</span>
              </div>
            </div>
          </div>

          {/* Right column — real photo when provided, dashed placeholder frame otherwise */}
          {isFull && (
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent-600 blur-2xl"
              />
              {image ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-card shadow-photo-deep b">
                  <Image src={image} alt="image of the team" fill priority className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
                </div>
              ) : (
                <div
                className="relative flex aspect-[4/5] flex-col items-center justify-center gap-3 overflow-hidden rounded-card border-2 ring-2 ring-accent-600 border-accent-600 text-center backdrop-blur-sm hover:scale-105 transition-all duration-300 bg-cover bg-center"
                style={{
                  backgroundImage: `url('/hero/ESA Letter Texas.webp')`,
                }}
              >
                {/* Decorative corner circles
                <span
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
                />
                <span
                  aria-hidden="true"
                  className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-brand-300/20"
                />
              
                <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm10 2a2 2 0 11-4 0 2 2 0 014 0zM4 14l3.5-4.5a1 1 0 011.5-.1L11 11l2.5-3a1 1 0 011.5.1L16 12v2H4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span> */}
              </div>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
