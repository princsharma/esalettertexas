import type { Metadata } from "next";
import Image from "next/image";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  ArticleSubsection,
  ArticleChecklist,
  CalloutBox,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
} from "@/components/sections";
import type { FaqItem, TocItem, RelatedLink } from "@/components/sections";
import { DEFAULT_PROCESS_STEPS } from "@/data/process-steps";

export const metadata: Metadata = {
  title: "How to Get an ESA Letter in Texas | ESA Letter Texas",
  description:
    "A step-by-step walkthrough for getting a legitimate, therapist-reviewed ESA letter in Texas: eligibility, process, timeline, and what you'll receive.",
};

const TOC: TocItem[] = [
  { id: "eligibility-check", label: "Eligibility check" },
  { id: "step-by-step-process", label: "Step-by-step process" },
  { id: "timeline", label: "Timeline" },
  { id: "what-you-receive", label: "What you receive" },
  { id: "common-mistakes", label: "Common mistakes" },
  { id: "faq", label: "FAQ" },
];

const FAQS: FaqItem[] = [
  {
    question: "How do I know if I'm eligible before I start?",
    answer:
      "If daily stress, anxiety, or another mental health condition is eased by your pet's presence, and you're 18 or older, you're a good candidate to begin the assessment. A licensed therapist makes the final determination.",
  },
  {
    question: "What happens during the assessment?",
    answer:
      "You'll answer questions about your mental health history and how your animal supports you day to day. It's confidential, done entirely online, and takes most people under 15 minutes.",
  },
  {
    question: "What if the therapist decides I don't qualify?",
    answer:
      "You'll receive a full refund under our moneyback guarantee. Not everyone who applies will meet the clinical criteria, and that determination has to be genuine to hold up if challenged.",
  },
  {
    question: "Can I get a letter the same day?",
    answer:
      "Most clients receive their reviewed letter within 24-48 hours of completing the assessment. A same-day letter with zero review isn't a real clinical evaluation.",
  },
];

const RELATED: RelatedLink[] = [
  { label: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/" },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "ESA Letter Cost in Texas", href: "/cost/" },
  { label: "ESA Letter Renewal", href: "/renewal/" },
];

export default function HowToGetAnEsaLetterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "How to Get an ESA Letter in Texas" }]} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Process"
        title="How to Get an ESA Letter in Texas"
        subhead="From eligibility to a signed letter in your inbox: exactly what the process looks like, start to finish."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="Check requirements first"
        secondaryCtaHref="/requirements/"
      />

      <ArticleLayout
        toc={TOC}
        tocImage={{ src: "/images/Take the Assessment.webp", alt: "Taking the online ESA assessment" }}
        related={RELATED}
        author={{
          name: "Leslie K. Gamble",
          credentials: "LCSW",
          licenseState: "Texas",
          reviewedDate: "September 2026",
          avatarSrc: "/doctors/leslie-k.-gamble.webp",
        }}
      >
        <ArticleSection id="eligibility-check" index={1} title="Eligibility Check">
          <p>
            Before applying, most people can self-check the basics. You are a strong
            candidate for an ESA letter if:
          </p>
          <ArticleChecklist
            items={[
              "You're at least 18 years old",
              "You experience anxiety, depression, PTSD, panic disorder, or a similar condition",
              "Your pet's presence measurably reduces your symptoms or stress",
              "You live in, or plan to live in, Texas rental housing",
            ]}
          />
          <p>
            Meeting these doesnot guarantee approval; a licensed therapist still
            has to make the clinical determination during your assessment.
          </p>
        </ArticleSection>

        <ArticleSection id="step-by-step-process" index={2} title="Step-by-Step Process">
          <p>
            The entire process happens online, in three steps, with no in-person visit
            required.
          </p>
          <div className="mt-2 grid gap-5 sm:grid-cols-3">
            {DEFAULT_PROCESS_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="group overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {step.image && (
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 16rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-caption text-brand-600">Step {i + 1}</p>
                  <p className="mt-1 font-bold text-neutral-900">{step.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Start Your Assessment Today"
            subhead="Most clients qualify in minutes and hear back from a licensed therapist within a day."
            ctaLabel="Apply Now"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="timeline" index={3} title="Timeline">
          <ArticleSubsection title="Assessment: a few minutes">
            <p>Completed entirely online, whenever it's convenient for you.</p>
          </ArticleSubsection>
          <ArticleSubsection title="Therapist review: 24-48 hours">
            <p>
              A licensed Texas therapist reviews your responses one-on-one and makes a
              clinical determination.
            </p>
          </ArticleSubsection>
          <ArticleSubsection title="Letter delivery: same day as approval">
            <p>
              Once approved, your signed letter is delivered digitally and is ready to submit
              to your landlord right away.
            </p>
          </ArticleSubsection>
        </ArticleSection>

        <ArticleSection id="what-you-receive" index={4} title="What You Receive">
          <p>Your completed letter includes everything a Texas landlord is entitled to see:</p>
          <ArticleChecklist
            items={[
              "A signed statement from a therapist licensed to practice in Texas",
              "Their license type, number, and state of licensure",
              "Confirmation that your ESA is part of your treatment plan",
              "A delivery date, so its validity period is easy to verify",
            ]}
          />
        </ArticleSection>

        <ArticleSection id="common-mistakes" index={5} title="Common Mistakes">
          <CalloutBox tone="warning" title="Avoid these before you apply anywhere">
            These are the most common reasons a letter gets rejected by a landlord or does not
            hold up if challenged.
          </CalloutBox>
          <ArticleChecklist
            items={[
              "Buying a certificate or registry listing instead of a real evaluation",
              "Using a letter from a provider not licensed in Texas",
              "Letting the letter expire before renewing for a new lease",
              "Submitting a letter with no license number or contact information",
            ]}
          />
        </ArticleSection>
      </ArticleLayout>

      <FaqAccordion items={FAQS} title="Frequently Asked Questions About the Process" railGutter />

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
