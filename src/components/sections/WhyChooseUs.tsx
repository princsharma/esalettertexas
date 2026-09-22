import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type WhyItem = { title: string; description: string; icon: ReactNode };

/** Badge/medal: licensed & certified */
const BADGE_ICON = (
  <>
    <circle cx="10" cy="7" r="4.25" />
    <path d="M7.1 10.3 5 18l5-2.6 5 2.6-2.1-7.7" />
  </>
);
/** Lightning bolt: fast turnaround */
const BOLT_ICON = <path d="M11.2 2 4.4 11.5h4.3l-1 6.5 7.9-10.4h-4.6l1.2-5.6z" />;
/** Shield outline: confidential & secure */
const SHIELD_OUTLINE_ICON = (
  <path
    d="M10 2.2 3.8 4.6v4.9c0 4.6 2.7 8.3 6.2 9.8 3.5-1.5 6.2-5.2 6.2-9.8V4.6L10 2.2Z"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  />
);
/** Clipboard with checkmark: compliant documentation */
const CLIPBOARD_ICON = (
  <>
    <rect x="4.5" y="3.2" width="11" height="14.6" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
    <rect x="7.3" y="1.8" width="5.4" height="2.8" rx="1" />
    <path d="M7.3 10.5 9 12.2l3.7-3.9" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </>
);
/** Coin with a dollar sign: moneyback guarantee */
const COIN_ICON = (
  <>
    <circle cx="10" cy="10" r="7.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 5.7v8.6M12.3 7.7c0-1-1-1.7-2.3-1.7s-2.3.7-2.3 1.6c0 2.2 4.6 1 4.6 3.2 0 1-1 1.7-2.3 1.7s-2.3-.7-2.3-1.7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </>
);
/** Headset: ongoing support */
const HEADSET_ICON = (
  <>
    <path d="M10 3a5.5 5.5 0 00-5.5 5.5V13a2 2 0 002 2h.5v-5.5H5.5v-1a4.5 4.5 0 019 0v1h-1.5V15h.5a2 2 0 002-2V8.5A5.5 5.5 0 0010 3z" />
    <rect x="3.3" y="9.5" width="2.2" height="4" rx="1.1" />
    <rect x="14.5" y="9.5" width="2.2" height="4" rx="1.1" />
  </>
);

type Tone = "accent" | "brand";

const WHY_ITEMS: (WhyItem & { tone: Tone })[] = [
  {
    title: "Licensed Professionals",
    description:
      "Every evaluation is conducted by an independent, licensed Texas mental health professional authorized to assess ESA eligibility.",
    icon: BADGE_ICON,
    tone: "accent",
  },
  {
    title: "Fast, Simple Process",
    description:
      "Complete your assessment online in minutes and get your reviewed letter in as little as 24-48 hours, no office visits required.",
    icon: BOLT_ICON,
    tone: "brand",
  },
  {
    title: "100% Confidential & HIPAA Compliant",
    description:
      "Your information is encrypted and protected under HIPAA at every step, from assessment to delivery.",
    icon: SHIELD_OUTLINE_ICON,
    tone: "accent",
  },
  {
    title: "Legally Compliant Documentation",
    description:
      "Every letter meets Fair Housing Act and Texas HB 4164 requirements, and is accepted by landlords, HOAs, and airlines.",
    icon: CLIPBOARD_ICON,
    tone: "brand",
  },
  {
    title: "Moneyback Guarantee",
    description:
      "If you don't qualify after your evaluation, you get a full refund, no questions asked.",
    icon: COIN_ICON,
    tone: "accent",
  },
  {
    title: "Ongoing Support & Verification",
    description:
      "Need help with a landlord or property manager? Our team provides unlimited letter verification and renewal reminders.",
    icon: HEADSET_ICON,
    tone: "brand",
  },
];

function WhyCard({ item }: { item: WhyItem & { tone: Tone } }) {
  const isAccent = item.tone === "accent";
  return (
    <li className="animate-fade-up group relative flex min-h-[15.5rem] flex-col gap-5 rounded-card border border-brand-100 bg-brand-50/70 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:bg-white hover:shadow-card-hover">
      <span
        className={`flex h-14 w-14 flex-none items-center justify-center rounded-full text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${
          isAccent ? "bg-accent-500 shadow-accent-900/20" : "bg-brand-600 shadow-brand-900/20"
        }`}
      >
        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {item.icon}
        </svg>
      </span>
      <div>
        <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-950">{item.description}</p>
      </div>
    </li>
  );
}

/** Why Choose Us: six-card benefits grid. Sits just below the process
 *  timeline, on a plain white section to break up the dark section above
 *  and the mint "What Is an ESA Letter?" section below. Icon badges
 *  alternate the site's two theme colors (orange accent / teal brand). */
export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white section-py">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Texans Choose ESA Letter Texas"
          subhead="We make online ESA evaluations simple, secure, and fully compliant with Texas law; here's what sets us apart from other providers."
          align="center"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((item) => (
            <WhyCard key={item.title} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
