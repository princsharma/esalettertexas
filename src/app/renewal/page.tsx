import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  ArticleChecklist,
  CalloutBox,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
} from "@/components/sections";
import type { FaqItem, TocItem, RelatedLink } from "@/components/sections";

export const metadata: Metadata = {
  title: "ESA Letter Renewal | ESA Letter Texas",
  description:
    "When you need to renew your ESA letter, how the renewal process works, what it costs, and what changes on re-evaluation.",
};

const TOC: TocItem[] = [
  { id: "when-renewal-is-needed", label: "When renewal is needed" },
  { id: "renewal-process", label: "Renewal process" },
  { id: "cost", label: "Cost" },
  { id: "what-changes-on-reevaluation", label: "What changes on re-evaluation" },
  { id: "faq", label: "FAQ" },
];

const FAQS: FaqItem[] = [
  {
    question: "Will I get a reminder before my letter expires?",
    answer:
      "Yes. We'll remind you as your letter approaches its one-year mark so you can renew before it lapses.",
  },
  {
    question: "Do I need to redo the full assessment every year?",
    answer:
      "Yes, a fresh, brief re-evaluation is required so your therapist can confirm your ongoing disability-related need is current, not assumed from last year.",
  },
  {
    question: "What happens if my letter expires before I renew?",
    answer:
      "Your previous letter is no longer considered current documentation. It's best to renew before your lease renewal or before a property manager re-verifies your accommodation.",
  },
  {
    question: "Can I switch to a different ESA when I renew?",
    answer:
      "Yes. Let your therapist know during your renewal assessment so your updated letter reflects your current animal.",
  },
];

const RELATED: RelatedLink[] = [
  { label: "ESA Letter Cost in Texas", href: "/cost/" },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "How to Get an ESA Letter in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/" },
];

export default function RenewalPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ESA Letter Renewal" }]} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Renewal"
        title="ESA Letter Renewal"
        subhead="Your ESA letter doesn't last forever. Here's when to renew, how the process works, and what it costs."
        ctaLabel="Renew Now"
        ctaHref="/#apply"
        secondaryCtaLabel="Check the requirements"
        secondaryCtaHref="/requirements/"
      />

      <ArticleLayout
        toc={TOC}
        tocImage={{ src: "/images/Receive Your Letter.webp", alt: "Receiving a renewed ESA letter" }}
        related={RELATED}
        author={{
          name: "Gaurav Patel, MD",
          credentials: "FMP",
          licenseState: "Texas",
          reviewedDate: "September 2026",
          avatarSrc: "/doctors/-dr-gaurav-patel.webp",
        }}
      >
        <ArticleSection id="when-renewal-is-needed" index={1} title="When Renewal Is Needed">
          <p>
            ESA letters are typically treated as valid for about <strong>one year</strong> from
            their issue date. You should plan to renew:
          </p>
          <ArticleChecklist
            items={[
              "Before your current letter turns one year old",
              "Before signing a new lease or renewing an existing one",
              "If your landlord or property manager requests a current letter",
              "If your mental health needs or living situation have changed",
            ]}
          />
          <CalloutBox tone="info" title="Renew a few weeks early">
            Giving yourself a buffer before your lease renewal or move-in date avoids any gap
            where you don't have current documentation on file.
          </CalloutBox>
        </ArticleSection>

        <ArticleSection id="renewal-process" index={2} title="Renewal Process">
          <p>
            Renewing is faster than your first assessment since your therapist already has
            your history on file.
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card shadow-card">
              <Image
                src="/images/woman_document_rounded.webp"
                alt="Receiving a renewed, signed ESA letter"
                fill
                sizes="(max-width: 640px) 100vw, 24rem"
                className="object-cover"
              />
            </div>
            <ArticleChecklist
              items={[
                "Complete a short renewal questionnaire online",
                "A licensed Texas therapist reviews your updated responses",
                "Your renewed, re-signed letter is delivered digitally",
                "Typical turnaround: 24-48 hours, same as your original letter"
              ]}
            />
          </div>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Renew Before Your Letter Expires"
            subhead="A quick re-evaluation with a licensed Texas therapist keeps your documentation current."
            ctaLabel="Renew Now"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="cost" index={3} title="Cost">
          <p>
            Renewal is billed the same way as a first-time letter, at our standard one-time
            assessment price , see the full{" "}
            <Link href="/cost/" className="font-semibold text-brand-700 hover:underline">
              ESA Letter Cost{" "}
            </Link>
            page for current pricing and what's included. There's no separate
            renewal-only; discount tier and no recurring subscription.
          </p>
        </ArticleSection>

        <ArticleSection id="what-changes-on-reevaluation" index={4} title="What Changes on Re-Evaluation">
          <p>
            A renewal isn't a rubber stamp. Your therapist will check in on a few things
            that may have shifted since your last letter:
          </p>
          <ArticleChecklist
            items={[
              "Whether your disability-related need for the animal is still current",
              "Any change in your living situation, condition, or treatment plan",
              "Whether you're renewing for the same animal or a different one",
              "An updated issue date, so your letter reflects a current evaluation",
            ]}
          />
        </ArticleSection>
      </ArticleLayout>

      <FaqAccordion items={FAQS} title="Frequently Asked Questions About Renewal" railGutter />

      <CtaBand
        id="final-cta"
        title="Get Your ESA Letter in as Little as 24 Hours"
        subhead="Licensed Texas therapists. HIPAA compliant. Moneyback guarantee."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        showSteps
      />
    </>
  );
}
