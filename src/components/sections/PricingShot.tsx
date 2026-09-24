import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { HERO_IMAGES } from "@/data/hero-images";



const PRICING_FEATURES = [
  { label: "24-48 hour turnaround", icon: null },
  { label: "Licensed therapist review", icon: "/icons/Licensed TX therapists_1.webp" },
  { label: "Money-back guarantee", icon: "/icons/Moneyback guarantee_1.webp" },
];

const ESA_PRICING = {
  title: "ESA Letter",
  price: "$149",
  billingNote: "one-time",
  badge: "Most Popular",

  description:
    "A confidential ESA assessment reviewed by a licensed Texas mental health professional.",

  inclusions: [
    "Licensed Texas therapist review",
    "Personalized clinical assessment",
    "Signed and verifiable ESA letter when clinically appropriate",
    "Digital delivery",
    "24-48 hour typical turnaround",
    "Landlord verification support",
  ],

  refundPolicy:
    "Money-back guarantee if you do not qualify, subject to the terms of the service.",

  ctaLabel: "Start Your Assessment",
  ctaHref: "/#apply",
};

const PRICING_IMAGE = {
  src: HERO_IMAGES.catAlt,
  alt: "Emotional support animal relaxing comfortably at home",
};

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      className="h-3 w-3"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
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

function LockIcon() {
  return (
    <svg
      className="h-4 w-4 flex-none text-brand-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      className="h-4 w-4 text-accent-500"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10 2a1 1 0 01.894.553l1.382 2.76 3.046.443a1 1 0 01.555 1.706l-2.205 2.15.52 3.034a1 1 0 01-1.451 1.054L10 12.27l-2.741 1.43a1 1 0 01-1.451-1.054l.52-3.034-2.205-2.15a1 1 0 01.555-1.706l3.046-.443 1.382-2.76A1 1 0 0110 2z" />
    </svg>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function PricingShot() {
  return (
    <section
      id="pricing"
      className="scroll-mt-20 relative overflow-hidden bg-brand-50 section-py"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
      />

      <Container className="relative">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading
            eyebrow="Pricing"
            title="Accessible &  Transparent Pricing"
            subhead="Get a professional ESA assessment without complicated plans or hidden fees."
            align="center"
          />
        </div>

        {/* Small feature strip */}
        {/* <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3">
          {PRICING_FEATURES.map((feature) => (
            <div
              key={feature.label}
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-700"
            >
              {feature.icon ? (
                <Image src={feature.icon} alt="" width={50} height={50} className="flex-none object-contain" />
              ) : (
                <svg
                  className="h-10 w-10 flex-none text-brand-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V5z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {feature.label}
            </div>
          ))}
        </div> */}

        {/* Main pricing layout */}
        {/* =====================================================
    MAIN PRICING LAYOUT
===================================================== */}
<div className="mx-auto mt-12 grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

  {/* =====================================================
      PRICING CARD - LEFT
  ====================================================== */}
  <div className="relative order-2 lg:order-1">
    {/* Card glow */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-brand-100/50 via-transparent to-accent-100/40 blur-2xl"
    />

    <div className="group relative overflow-hidden rounded-[1.5rem] border border-brand-200 bg-white p-6 shadow-card-hover ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 sm:p-8 lg:p-9">

      {/* Top gradient line */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-accent"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent-200/30 blur-3xl"
      />

      {/* Popular badge */}
      <div className="relative flex items-center justify-between gap-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
          <StarIcon />
          {ESA_PRICING.badge}
        </span>
      </div>

      {/* Title */}
      <div className="relative mt-6">
        <div className="flex items-center gap-3">

          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand-soft text-white shadow-sm">
            <svg
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
          </span>

          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              {ESA_PRICING.title}
            </h3>

            <p className="mt-0.5 text-sm text-neutral-500">
              Professional evaluation
            </p>
          </div>

        </div>
      </div>

      {/* Description */}
      <p className="relative mt-5 text-sm leading-relaxed text-neutral-600">
        {ESA_PRICING.description}
      </p>

      {/* Price */}
      <div className="relative mt-6 flex items-end gap-2 border-b border-neutral-100 pb-6">
        <span className="text-5xl font-extrabold tracking-tight text-brand-700">
          {ESA_PRICING.price}
        </span>

        <span className="mb-1 text-sm font-medium text-neutral-500">
          {ESA_PRICING.billingNote}
        </span>
      </div>

      {/* Inclusions */}
      <div className="relative mt-6">
        <p className="mb-4 text-xs font-bold uppercase tracking-wider text-neutral-500">
          What's included
        </p>

        <ul className="space-y-3">
          {ESA_PRICING.inclusions.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-relaxed text-neutral-700"
            >
              <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-success-500/15 text-success-600">
                <CheckIcon />
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Button
        href={ESA_PRICING.ctaHref}
        size="lg"
        className="group/btn relative mt-8 flex w-full items-center justify-center gap-2 shadow-lg shadow-accent-900/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent-900/30"
      >
        {ESA_PRICING.ctaLabel}
        <ArrowIcon />
      </Button>

      {/* Refund / privacy note */}
      <div className="relative mt-5 rounded-xl bg-brand-50 px-4 py-3">
        <p className="flex items-start gap-2 text-xs leading-relaxed text-neutral-600">
          <LockIcon />
          <span>{ESA_PRICING.refundPolicy}</span>
        </p>
      </div>

      {/* Bottom reassurance */}
      <div className="relative mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-semibold text-neutral-500">
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success-500" />
          Confidential
        </span>

        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success-500" />
          Licensed professionals
        </span>

        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-success-500" />
          Secure assessment
        </span>
      </div>

    </div>
  </div>


  {/* =====================================================
      CAT IMAGE - RIGHT
  ====================================================== */}
  <div className="relative order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0">

    {/* Glow */}
    <div
      aria-hidden="true"
      className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-brand-200/60 via-white/20 to-accent-200/40 blur-2xl
      order-1 flex h-full min-h-[620px] lg:order-2"
    />

    {/* Image */}
    <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-photo ring-1 ring-brand-950/5">

      <Image
        src={"/images/Pricing.webp"}
        alt={PRICING_IMAGE.alt}
        fill
        sizes="(max-width: 1024px) 90vw, 420px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-brand-950/10 to-transparent" />

      {/* Image content */}
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">

        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          Professional ESA Support
        </span>

        <h3 className="mt-3 max-w-xs text-xl font-bold leading-tight text-white sm:text-2xl">
          Compassionate support, professional evaluation.
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-relaxed text-brand-100">
          Your assessment is handled confidentially by a qualified mental
          health professional.
        </p>

      </div>
    </div>


    {/* Floating Guarantee Card */}
    <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-card-hover ring-1 ring-brand-950/5 sm:-left-6 sm:p-4">

      <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-brand-soft text-white shadow-sm">
        <CheckIcon />
      </span>

      <div>
        <p className="text-sm font-bold text-neutral-900">
          Money-back guarantee
        </p>

        <p className="mt-0.5 text-xs text-neutral-500">
          If you do not qualify
        </p>
      </div>

    </div>


    {/* Floating Rating */}
    <div className="absolute -right-2 -top-5 flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-bold text-neutral-900 shadow-card-hover ring-1 ring-brand-950/5 sm:-right-5">

      <StarIcon />

      <span>4.9/5</span>

      <span className="font-medium text-neutral-500">
        rated
      </span>

    </div>

  </div>

</div>
      </Container>
    </section>
  );
}

export default PricingShot;