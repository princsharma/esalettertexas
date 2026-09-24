import type { Metadata } from "next";
import Image from "next/image";
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
} from "@/components/sections";
import type { FaqItem, TocItem, RelatedLink } from "@/components/sections";

export const metadata: Metadata = {
  title: "Texas ESA Letter Requirements | ESA Letter Texas",
  description:
    "What a legitimate ESA letter must include under Texas law: mandatory elements, licensed provider rules, HB 4164 compliance, validity, and red flags.",
};

const TOC: TocItem[] = [
  { id: "mandatory-elements", label: "Mandatory elements checklist" },
  { id: "licensed-provider-rules", label: "Licensed provider rules" },
  { id: "hb-4164-compliance", label: "HB 4164 compliance" },
  { id: "validity-period", label: "Validity period" },
  { id: "red-flags", label: "Red flags of invalid letters" },
  { id: "faq", label: "FAQ" },
];

const FAQS: FaqItem[] = [
  {
    question: "Can my landlord require a specific form for my ESA letter?",
    answer:
      "Landlords can ask that your documentation come from a licensed provider and confirm a disability-related need, but under the FHA and HB 4164 they generally can't force you onto a proprietary form as the only acceptable format.",
  },
  {
    question: "Does the letter need to state my exact diagnosis?",
    answer:
      "No. A valid letter confirms a disability-related need for the animal without disclosing your specific diagnosis or medical records.",
  },
  {
    question: "What happens if I submit a letter that doesn't meet requirements?",
    answer:
      "A landlord can reasonably ask for a corrected or reissued letter, or deny the accommodation request until a compliant letter is provided.",
  },
  {
    question: "Is a letter from an out-of-state therapist valid in Texas?",
    answer:
      "The provider must be licensed to practice in the state where they're evaluating you. For a Texas resident, a Texas-licensed provider carries the least risk of being questioned.",
  },
];

const RELATED: RelatedLink[] = [
  { label: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/" },
  { label: "How to Get an ESA Letter in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "See an ESA Letter Sample", href: "/sample-letter/" },
  { label: "ESA Letter Renewal", href: "/renewal/" },
];

export default function RequirementsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Texas ESA Letter Requirements" }]} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Requirements"
        title="Texas ESA Letter Requirements"
        subhead="What a letter legally has to include, who's allowed to write it, and the red flags that make a letter invalid in Texas."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="See a compliant sample"
        secondaryCtaHref="/sample-letter/"
      />

      <ArticleLayout
        toc={TOC}
        tocImage={{ src: "/images/Hb 4164 expla.webp", alt: "Texas HB 4164 ESA letter requirements" }}
        related={RELATED}
        author={{
          name: "Robert Staaf",
          credentials: "LCSW",
          licenseState: "Texas",
          reviewedDate: "September 2026",
          avatarSrc: "/doctors/robert-staaf.webp",
        }}
      >
        <ArticleSection id="mandatory-elements" index={1} title="Mandatory Elements Checklist">
          <p>
            A legitimate ESA letter, regardless of who issues it, should include every item
            below. Missing elements are the single biggest reason a letter gets challenged by
            a landlord or property manager.
          </p>
          <ArticleChecklist
            items={[
              "Issued on the provider's official letterhead",
              "Provider's license type, license number, and state of licensure",
              "A statement confirming a disability-related need for the animal",
              "The date the letter was issued",
              "The provider's signature and contact information",
            ]}
          />
        </ArticleSection>

        <ArticleSection id="licensed-provider-rules" index={2} title="Licensed Provider Rules">
          <p>
            Only a licensed healthcare or mental health professional can issue a valid letter:
            therapists (LPC), clinical social workers (LCSW), psychologists,
            psychiatrists, and physicians all qualify, provided they hold an active license
            and have personally evaluated you.
          </p>
          <p>
            The provider's license must be active in the state where you're seeking
            the accommodation. For Texas renters, that means a Texas license carries the most
            weight and the least chance of a landlord questioning it.
          </p>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Get a Letter That Meets Every Requirement"
            subhead="Reviewed and signed by a therapist licensed to practice in Texas."
            ctaLabel="Start Your Assessment"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="hb-4164-compliance" index={3} title="HB 4164 Compliance">
          <p>
            Texas House Bill 4164 works alongside the federal Fair Housing Act to regulate
            assistance-animal documentation in the state. It limits what a landlord can demand
            from a tenant requesting an accommodation, and it introduced penalties for
            submitting fraudulent documentation, which is exactly why a real clinical
            evaluation matters more than a fast turnaround.
          </p>
          <div className="relative mt-2 aspect-[16/7] w-full overflow-hidden rounded-card shadow-card">
            <Image
              src="/images/residential_lease_keys.webp"
              alt="HB 4164 explained for Texas ESA letter compliance"
              fill
              sizes="(max-width: 1024px) 100vw, 48rem"
              className="object-cover"
            />
          </div>
          <CalloutBox tone="info" title="This is general information, not legal advice">
            Eligibility and letter validity are determined solely by a licensed evaluating
            therapist. If your accommodation request is denied, consult a housing attorney or
            fair housing agency for guidance specific to your situation.
          </CalloutBox>
        </ArticleSection>

        <ArticleSection id="validity-period" index={4} title="Validity Period">
          <p>
            ESA letters are typically treated as valid for about <strong>one year</strong> from
            the issue date. Many landlords and property management systems will ask for a
            letter dated within the last 12 months, especially at lease renewal, so an outdated
            letter is one of the fastest ways to have an accommodation request stalled.
          </p>
        </ArticleSection>

        <ArticleSection id="red-flags" index={5} title="Red Flags of Invalid Letters">
          <p>
            Property managers in Texas are increasingly trained to spot these. If a letter you
            have (or one you are about to pay for) shows any of the following, treat it as
            unreliable:
          </p>
          <ArticleRedFlags
            items={[
              "No license number or state of licensure listed anywhere",
              "Delivered instantly with no real assessment or interview",
              "Issued by a company, not a named, licensed individual",
              "Comes bundled with a certificate, vest, or ID card as \"proof\"",
              "Undated, or dated more than a year ago",
            ]}
          />
        </ArticleSection>
      </ArticleLayout>

      <FaqAccordion items={FAQS} title="Frequently Asked Questions About Requirements" railGutter />

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
