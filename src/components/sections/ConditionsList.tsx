import { ReactNode } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { TOP_CONDITIONS } from "@/data/home";
import Link from "next/link";
import Image from "next/image";
import { HERO_IMAGES } from "@/data/hero-images";
/** One distinct icon per condition, keyed by title — keeps the list from
 *  reading as six repeats of the same glyph. */
const CONDITION_ICONS: Record<string, ReactNode> = {
  Anxiety: (
    <path
      d="M2 10h2.5l1.5-4 2.5 8 2-6 1.5 2H16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Depression: (
    <>
      <circle cx="7" cy="9.8" r="2.6" />
      <circle cx="10.5" cy="7.6" r="3.4" />
      <circle cx="13.8" cy="10" r="2.2" />
      <rect x="5" y="9.8" width="10.5" height="3.6" rx="1.8" />
    </>
  ),
  PTSD: <path d="M10 2 16 4.3V9c0 4.4-2.6 7.6-6 8.4-3.4-.8-6-4-6-8.4V4.3L10 2Z" />,
  "Panic Disorder": (
    <>
      <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="9.2" y="5.5" width="1.6" height="6" rx="0.8" />
      <circle cx="10" cy="14" r="1" />
    </>
  ),
  "Social Anxiety": (
    <path
      fillRule="evenodd"
      d="M10 2.5C5.86 2.5 2.5 5.3 2.5 8.75c0 1.94.99 3.65 2.55 4.8-.06.9-.33 1.9-.9 2.8a.5.5 0 00.58.73c1.35-.4 2.35-1.05 3.02-1.6.71.14 1.46.22 2.25.22 4.14 0 7.5-2.8 7.5-6.25S14.14 2.5 10 2.5z"
      clipRule="evenodd"
    />
  ),
  ADHD: (
    <>
      <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="10" cy="10" r="1.4" />
    </>
  ),
};

export default function ConditionsList (){
    return (
      <section id="conditions" className="scroll-mt-20 relative overflow-hidden bg-white section-py">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
        />

        <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 text-neutral-950">
          <div>
            <SectionHeading
              eyebrow="Do you qualify?"
              title="Common Conditions That Qualify for an ESA"
              subhead="A wide range of mental health conditions may qualify you for an ESA letter. Explore the most common ones below."
            />

            <ul className="mt-8 space-y-3">
              {TOP_CONDITIONS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group relative flex items-center gap-4 overflow-hidden rounded-card border border-neutral-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card-hover"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-1 origin-top scale-y-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-y-100"
                    />
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white">
                      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        {CONDITION_ICONS[item.title]}
                      </svg>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-neutral-600">
                        {item.description}
                      </span>
                    </span>
                    <svg
                      className="h-4 w-4 flex-none text-brand-400 transition-transform duration-300 group-hover:translate-x-1"
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
                </li>
              ))}
            </ul>

            <Link
              href="/#conditions"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              View all conditions
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
            </Link>
          </div>

          {/* Real photo — right side */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/50 via-white/0 to-accent-200/40 blur-2xl"
            />
            <div className="group relative aspect-[4/5] overflow-hidden rounded-card shadow-photo ring-1 ring-brand-950/5">
              <Image
                src="/images/Common Conditions That Qualify for an ESA.webp"
                alt="A person cuddling their emotional support cat at home"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Brand-teal tint — ties the photo's color into the site's palette */}
              <div className="absolute inset-0 bg-gradient-brand opacity-25 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating reassurance card */}
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-card bg-white p-4 shadow-card-hover ring-1 ring-brand-950/5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-brand-soft text-white">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <div>
                <p className="text-sm font-bold text-neutral-900">Confidential evaluation</p>
                <p className="text-xs text-neutral-500">No judgment, ever</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
}