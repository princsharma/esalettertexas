import type { Metadata } from "next";
import Image from "next/image";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  ArticleSubsection,
  ArticleChecklist,
  CalloutBox,
  ComparisonTable,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
} from "@/components/sections";
import type { FaqItem, TocItem, RelatedLink, ComparisonRow } from "@/components/sections";

export const metadata: Metadata = {
  title: "What Is an ESA Letter? | ESA Letter Texas",
  description:
    "Learn exactly what an ESA letter is, the federal law behind it, what it isn't, who can legally write one, and how Texas renters use it.",
};

const TOC: TocItem[] = [
  { id: "definition", label: "Definition" },
  { id: "legal-basis", label: "Legal basis (Fair Housing Act)" },
  { id: "what-it-is-not", label: "What it is NOT" },
  { id: "who-can-write-one", label: "Who can write one" },
  { id: "how-its-used", label: "How it's used" },
  { id: "faq", label: "FAQ" },
];

const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Requires a disability-related need", values: [true, false] },
  { label: "Requires specialized task training", values: [false, true] },
  { label: "Issued by a licensed mental health professional", values: [true, false] },
  { label: "Any species (with reasonable limits)", values: [true, false] },
  { label: "Protected in no-pets housing (FHA)", values: [true, true] },
  { label: "Guaranteed public access (restaurants, stores)", values: [false, true] },
];

const FAQS: FaqItem[] = [
  {
    question: "Is an ESA letter the same as a prescription?",
    answer:
      "Not exactly. It's a clinical letter, not a prescription pad item, but it carries the same weight: it documents a licensed professional's assessment that your animal is part of your treatment.",
  },
  {
    question: "Does an ESA letter need to name a specific animal?",
    answer:
      "Typically it references the type of animal (e.g., dog or cat) rather than requiring re-issuance every time you adopt a new pet, though your therapist may note specifics during your evaluation.",
  },
  {
    question: "Can I use an ESA letter for air travel?",
    answer:
      "No. Airlines are no longer required to accommodate ESAs under current federal air travel rules. ESA letters apply to housing protections under the Fair Housing Act, not air travel.",
  },
  {
    question: "Do I need a diagnosis to qualify?",
    answer:
      "You need a licensed mental health professional to determine, through an assessment, that you have a disability-related need for the animal's support. That determination is made during your evaluation.",
  },
  {
    question: "Is an ESA letter the same as registering my pet online?",
    answer:
      "No. Paid \"registries,\" certificates, and ID cards sold online have no legal standing. The only document that matters is a signed letter from a licensed professional who evaluated you.",
  },
];

const RELATED: RelatedLink[] = [
  { label: "How to Get an ESA Letter in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "See an ESA Letter Sample", href: "/sample-letter/" },
  { label: "ESA Letter Cost in Texas", href: "/cost/" },
];

export default function WhatIsAnEsaLetterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "What Is an ESA Letter?" }]} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Getting Started"
        title="What Is an ESA Letter?"
        subhead="A plain-language guide to what an ESA letter actually is, the federal law protecting it, and who's legally allowed to write one for you."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="See a sample letter"
        secondaryCtaHref="/sample-letter/"
      />

      <ArticleLayout
        toc={TOC}
        tocImage={{
          src: "/images/Common Conditions That Qualify for an ESA.webp",
          alt: "Common conditions that qualify for an ESA letter",
        }}
        related={RELATED}
        author={{
          name: "Leslie K. Gamble",
          credentials: "LCSW",
          licenseState: "Texas",
          reviewedDate: "September 2026",
          avatarSrc: "/doctors/leslie-k.-gamble.webp",
        }}
      >
        <ArticleSection id="definition" index={1} title="Definition">
          <p>
            An <strong>ESA letter</strong> (Emotional Support Animal letter) is a signed
            document from a licensed mental health professional confirming that you have a
            disability-related need for an emotional support animal as part of your treatment.
            It's issued after a real clinical assessment, not a quiz or a checkout page.
          </p>
          <p>
            A legitimate letter is written on the provider's letterhead and typically
            includes their license type and number, the state where they are licensed to
            practice, the date, and a statement that your animal provides emotional support
            related to your condition. It does not diagnose you publicly or disclose details
            beyond what's necessary for housing purposes.
          </p>
        </ArticleSection>

        <ArticleSection id="legal-basis" index={2} title="Legal Basis: The Fair Housing Act">
          <p>
            ESA letters draw their legal weight from the federal{" "}
            <strong>Fair Housing Act (FHA)</strong>, which requires housing providers to make
            reasonable accommodations for people with disabilities, including waiving a
            no pets : policy for a legitimate emotional support animal. This applies
            to most rental housing in Texas, including apartments, condos, and HOA-governed
            communities.
          </p>
          <p>
            In Texas, <strong>HB 4164</strong> works alongside the FHA at the state level. It
            limits what documentation a landlord can demand from a tenant and creates real
            penalties for people who submit fraudulent assistance-animal paperwork, which is
            part of why a professionally issued letter matters.
          </p>
          <div className="relative mt-2 aspect-[16/7] w-full overflow-hidden rounded-card shadow-card">
            <Image
              src="/images/fair house_act_2.webp"
              alt="Fair Housing Act protections for ESA owners in Texas"
              fill
              sizes="(max-width: 1024px) 100vw, 48rem"
              className="object-cover"
            />
          </div>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Ready to Find Out If You Qualify?"
            subhead="Complete a short, confidential assessment reviewed by a licensed Texas therapist."
            ctaLabel="Start Your Assessment"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="what-it-is-not" index={3} title="What an ESA Letter Is NOT">
          <p>
            Confusion here is exactly what scam sites profit from, so it's worth being
            specific about the boundaries.
          </p>
          <ArticleSubsection title="It isn't an online registration or ID card">
            <p>
              Paid national registries, vests, and laminated ID cards sold online
              have no legal authority anywhere in the U.S. Landlords and courts recognize a
              signed letter from a licensed professional, not a registry entry.
            </p>
          </ArticleSubsection>
          <ArticleSubsection title="It isn't a service animal certification">
            <p>
              An ESA provides comfort through its presence; a service animal is individually
              trained to perform specific tasks for a person with a disability. They are
              covered by different laws with different protections, shown side-by-side below.
            </p>
          </ArticleSubsection>
          <CalloutBox tone="warning" title="Watch for instant, no-assessment letters">
            Any site that emails you a signed letter within minutes, with no real evaluation by
            a licensed clinician, is not producing a legally defensible document. Texas
            landlords and property managers are increasingly trained to spot and reject these.
          </CalloutBox>
          <ComparisonTable
            caption="ESA letter vs. service animal documentation"
            columns={["ESA Letter", "Service Animal"]}
            rows={COMPARISON_ROWS}
          />
        </ArticleSection>

        <ArticleSection id="who-can-write-one" index={4} title="Who Can Write One">
          <p>
            Only a <strong className="text-brand-900 capitalize">licensed mental health professional</strong> can write a valid ESA
            letter;  for example a licensed therapist (LPC), licensed clinical social
            worker (LCSW), psychologist, psychiatrist, or physician, who is licensed to
            practice and has conducted an actual evaluation of you. General practitioners can
            write them too, but a mental-health-specific evaluation carries more weight with
            landlords who are used to seeing it.
          </p>
          <p>
            The provider must be licensed in the state where they are providing care.
            That's why every letter through ESA Letter Texas is reviewed by a therapist
            licensed to practice in Texas.
          </p>
        </ArticleSection>

        <ArticleSection id="how-its-used" index={5} title="How It's Used">
          <ArticleChecklist
            items={[
              "Submitted to a landlord, property manager, or HOA as a reasonable accommodation request",
              "Kept on file with your provider in case verification is requested",
              "Renewed roughly once a year to stay current for new leases or re-verification",
              "Not required to be shown to neighbors, employers, or anyone outside housing management",
            ]}
          />
          <p>
            A landlord can ask that the letter come from a licensed provider and that it
            confirm a disability-related need, but under the FHA and HB 4164 they generally
            cannot demand your specific diagnosis, medical records, or that you use a
            particular form.
          </p>
        </ArticleSection>
      </ArticleLayout>

      <FaqAccordion items={FAQS} title="Frequently Asked Questions About ESA Letters" railGutter />

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
