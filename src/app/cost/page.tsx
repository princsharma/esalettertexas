import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  ArticleChecklist,
  ArticleRedFlags,
  CalloutBox,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
  PricingShot,
} from "@/components/sections";
import type { FaqItem, TocItem, RelatedLink } from "@/components/sections";
export const metadata: Metadata = {
  title: "ESA Letter Cost in Texas | ESA Letter Texas",
  description:
    "What an ESA letter costs in Texas, what's included, our refund policy, why free or cheap letters fail, and what renewal costs.",
};

const TOC: TocItem[] = [
  { id: "pricing", label: "Pricing" },
  { id: "whats-included", label: "What's included" },
  { id: "refund-policy", label: "Refund policy" },
  { id: "why-cheap-letters-fail", label: "Why free/cheap letters fail" },
  { id: "renewal-cost", label: "Renewal cost" },
  { id: "faq", label: "FAQ" },
];

const FAQS: FaqItem[] = [
  {
    question: "Is $149 a one-time cost or a subscription?",
    answer:
      "It's a one-time cost for the assessment, therapist review, and your signed letter. There's no recurring subscription.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Reach out to our support team to ask about available options; pricing and terms are subject to change without notice.",
  },
  {
    question: "Why can't I just get a free ESA letter online?",
    answer:
      "A letter with no real evaluation and no cost usually means no licensed professional actually assessed you, which is exactly what makes it easy for a landlord to reject.",
  },
  {
    question: "Is the fee refunded if I'm denied?",
    answer:
      "Yes. If a licensed therapist determines you don't qualify, you receive a full refund under our moneyback guarantee.",
  },
];

const RELATED: RelatedLink[] = [
  { label: "How to Get an ESA Letter in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "ESA Letter Renewal", href: "/renewal/" },
  { label: "See an ESA Letter Sample", href: "/sample-letter/" },
];

export default function CostPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ESA Letter Cost in Texas" }]} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Pricing"
        title="ESA Letter Cost in Texas"
        subhead="Transparent, one-time pricing, what it actually includes, and why bargain-bin letters tend to fall apart when it matters."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="See what's included"
        secondaryCtaHref="#whats-included"
      />

      {/* M13: Pricing, full-bleed section (id="pricing" set internally) */}
      <PricingShot />

      <ArticleLayout
        toc={TOC}
        tocImage={{ src: "/images/Pricing.webp", alt: "Transparent ESA letter pricing in Texas" }}
        related={RELATED}
        author={{
          name: "Robert Staaf",
          credentials: "LCSW",
          licenseState: "Texas",
          reviewedDate: "September 2026",
          avatarSrc: "/doctors/robert-staaf.webp",
        }}
      >
        <ArticleSection id="whats-included" index={2} title="What's Included">
          <ArticleChecklist
            items={[
              "A confidential assessment reviewed by a licensed Texas therapist",
              "A personalized clinical evaluation, not a generic form",
              "A signed, verifiable ESA letter when clinically appropriate",
              "Digital delivery, typically within 24-48 hours",
              "Landlord verification support if your letter is questioned",
            ]}
          />
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="See If You Qualify Before You Pay"
            subhead="Start your confidential assessment, reviewed by a licensed Texas therapist."
            ctaLabel="Start Your Assessment"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="refund-policy" index={3} title="Refund Policy">
          <p>
            Not everyone who applies will meet the clinical criteria for an ESA letter, and
            that determination has to be genuine. If your reviewing therapist determines you
            don't qualify, you receive a full refund under our moneyback guarantee,
            subject to the terms of service.
          </p>
        </ArticleSection>

        <ArticleSection id="why-cheap-letters-fail" index={4} title="Why Free/Cheap Letters Fail">
          <p>
            A handful of sites offer ESA letters for a few dollars, or even free, delivered
            instantly. The economics only work one way: no real licensed clinician is spending
            time on an actual evaluation.
          </p>
          <div className="relative mt-2 aspect-[16/7] w-full overflow-hidden rounded-card shadow-card">
            <Image
              src="/images/cozy_living_room_pets.webp"
              alt="How to spot an ESA letter scam before you pay"
              fill
              sizes="(max-width: 1024px) 100vw, 48rem"
              className="object-cover"
            />
          </div>
          <ArticleRedFlags
            items={[
              "No licensed clinician actually reviews your answers",
              "License numbers are missing, fake, or unverifiable",
              "The 'letter' is bundled with a paid registry or certificate upsell",
              "There's no refund path if the letter is later rejected",
            ]}
          />
          <CalloutBox tone="danger" title="A rejected letter can cost more than the letter itself">
            If a landlord rejects a cheap letter, you havee often back to square one, having
            paid twice and lost the time you needed to secure your housing accommodation.
          </CalloutBox>
        </ArticleSection>

        <ArticleSection id="renewal-cost" index={5} title="Renewal Cost">
          <p>
            ESA letters are typically valid for about a year. Renewing before yours expires
            keeps you covered for lease renewals and re-verification requests, without a gap
            in documentation.
          </p>
          <p>
            See the full{" "}
            <Link href="/renewal/" className="font-semibold text-brand-700 hover:underline">
              ESA Letter Renewal
            </Link>{" "}
            page for the renewal process, timing, and what changes on re-evaluation.
          </p>
        </ArticleSection>
      </ArticleLayout>

      <FaqAccordion items={FAQS} title="Frequently Asked Questions About Cost" railGutter />

      <CtaBand
        id="final-cta"
        title="Ready to Get Your ESA Letter?"
        subhead="Start your confidential assessment today. Most clients qualify in minutes."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        showLetter
      />
    </>
  );
}
