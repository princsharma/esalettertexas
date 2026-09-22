import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HERO_IMAGES } from "@/data/hero-images";

const DEFAULT_BULLETS = [
  "Signed by a licensed Texas therapist",
  "Delivered as a verifiable PDF, ready to send",
  "Accepted by landlords, HOAs & property managers",
];

const DEFAULT_MINI_STEPS = ["Assessment", "Therapist review", "Your letter"];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
  );
}

function BandBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-accent-400/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-brand-300/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]"
      />
    </>
  );
}

/** CTA Band. Reusable, repeats mid-page and at page end. Full-bleed
 *  dark background on every variant (matches the other dark sections like
 *  ProcessSteps/Your Rights); no inset "card on white" look.
 *  `showLetter` renders a longer, richer layout with benefit bullets and a mock signed-letter graphic.
 *  `showSteps` renders a mini interactive step tracker on the hero-gradient background. */
export function CtaBand({
  title,
  subhead,
  ctaLabel = "Apply Now",
  ctaHref = "/#apply",
  showLetter = false,
  bullets = DEFAULT_BULLETS,
  showSteps = false,
  steps = DEFAULT_MINI_STEPS,
 
}: {
  title: string;
  subhead?: string;
  ctaLabel?: string;
  ctaHref?: string;
  showLetter?: boolean;
  bullets?: string[];
  showSteps?: boolean;
  steps?: string[];

  }) {
  if (showLetter) {
    return (
      <section className="relative overflow-hidden bg-gradient-brand section-py">
        <BandBackground />

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div className="text-center lg:text-left">
              <span className="mx-auto mb-4 hidden h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm md:flex lg:mx-0">
                <svg className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.5 3.5c-1.5-2-5-1.5-5 2 0 3 3 5 5 6.5 2-1.5 5-3.5 5-6.5 0-3.5-3.5-4-5-2z" />
                </svg>
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance] md:text-[2.75rem]">
                {title}
              </h2>
              {subhead && (
                <p className="mx-auto mt-2 max-w-xl text-brand-100 lg:mx-0">{subhead}</p>
              )}

              <ul className="mx-auto mt-5 max-w-md space-y-2.5 text-left lg:mx-0">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-brand-50">
                    <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-white/15 text-white">
                      <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <Button
                href={ctaHref}
                size="lg"
                className="group relative mt-7 inline-flex items-center gap-2 shadow-lg shadow-accent-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-900/40"
              >
                {ctaLabel}
                <ArrowIcon />
              </Button>
            </div>

            {/* Mock signed-letter graphic */}
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[24rem] lg:max-w-none xl:w-[28rem]">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[1.75rem] bg-white/10 blur-2xl sm:-inset-6"
              />
              <div className="group relative rotate-2 rounded-card bg-white p-6 shadow-letter transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0 hover:shadow-letter-hover sm:p-8">
                <div className="absolute inset-x-0 -top-px h-2 rounded-t-card bg-gradient-accent" />
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-700 sm:text-sm">
                    Official ESA Letter
                  </span>
                  <svg className="h-5 w-5 text-brand-400 sm:h-6 sm:w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h5.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm7 1V4l3 3h-2a1 1 0 01-1-1V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                  Reviewed and signed by S. Alvarez, LPC, licensed to practice in Texas.
                </p>

                <p className="mt-5 text-sm leading-relaxed text-neutral-600 sm:mt-7">
                  This letter confirms that the above-named client is currently under my care and
                  that their emotional support animal is a necessary part of their treatment plan,
                  as recognized under the Fair Housing Act.
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5 sm:mt-8 sm:pt-6">
                  {/* Flip-card avatar: photo on the front, name + verified badge on the back */}
                  <div className="flip-card h-20 w-20 flex-none sm:h-24 sm:w-24" tabIndex={0}>
                    <div className="flip-card-inner h-full w-full">
                      <div className="flip-card-face flip-card-front h-full w-full overflow-hidden rounded-full ring-2 ring-brand-100">
                        <Image
                          src={HERO_IMAGES.therapist}
                          alt="Licensed reviewing therapist"
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flip-card-face flip-card-back flex h-full w-full flex-col items-center justify-center gap-1 rounded-full bg-success-500/15 text-success-600 ring-2 ring-success-500/20">
                        <svg className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path
                            fillRule="evenodd"
                            d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-wide">Verified</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl italic leading-none text-brand-700 sm:text-2xl">S. Alvarez</p>
                    <p className="mt-1.5 text-xs text-neutral-500">Licensed Therapist, LPC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (showSteps) {
    return (
      <section className="relative overflow-hidden bg-gradient-hero section-py">
        <BandBackground />

        <Container className="relative">
          <div className="relative mx-auto max-w-2xl text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm">
              <svg className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M10.5 3.5c-1.5-2-5-1.5-5 2 0 3 3 5 5 6.5 2-1.5 5-3.5 5-6.5 0-3.5-3.5-4-5-2z" />
              </svg>
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance] md:text-[2.75rem]">
              {title}
            </h2>
            {subhead && <p className="mx-auto mt-2 max-w-xl text-brand-100">{subhead}</p>}

            {/* Interactive step chips: each pill lifts, glows, and reveals its number on hover;
                connector arrows echo the How-It-Works cards so both "3 steps" moments match. */}
            <ul className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-3">
              {steps.map((step, i) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="group inline-flex cursor-default items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-2 pl-2 pr-4 text-sm font-medium text-brand-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-lg hover:shadow-accent-900/30">
                    <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white transition-colors duration-300 group-hover:bg-accent-500">
                      {i + 1}
                    </span>
                    {step}
                  </span>
                  {i < steps.length - 1 && (
                    <svg
                      className="hidden h-4 w-4 flex-none text-accent-300 sm:block"
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
                  )}
                </li>
              ))}
            </ul>

            <Button
              href={ctaHref}
              size="lg"
              className="group relative mt-8 inline-flex items-center gap-2 shadow-lg shadow-accent-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-900/40"
            >
              {ctaLabel}
              <ArrowIcon />
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-brand section-py">
      <BandBackground />

      <Container className="relative flex flex-col items-center gap-7 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:gap-5 md:text-left">
          <span className="hidden h-14 w-14 flex-none items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-sm md:flex">
            <svg className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10.5 3.5c-1.5-2-5-1.5-5 2 0 3 3 5 5 6.5 2-1.5 5-3.5 5-6.5 0-3.5-3.5-4-5-2z" />
            </svg>
          </span>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white [text-wrap:balance] md:text-[2.75rem]">
              {title}
            </h2>
            {subhead && (
              <p className="mt-2 max-w-xl text-brand-100">{subhead}</p>
            )}
          </div>
        </div>

        <Button
          href={ctaHref}
          size="lg"
          className="group relative flex flex-none items-center gap-2 shadow-lg shadow-accent-900/30 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-900/40"
        >
          {ctaLabel}
          <ArrowIcon />
        </Button>
      </Container>
    </section>
  );
}
