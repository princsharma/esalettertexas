import type { Metadata } from "next";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  ArticleChecklist,
  CalloutBox,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
  AnnotatedLetterSample,
} from "@/components/sections";
import type { FaqItem, TocItem, RelatedLink } from "@/components/sections";

export const metadata: Metadata = {
  title: "ESA Letter Sample | ESA Letter Texas",
  description:
    "See an annotated sample ESA letter, broken down element by element, so you know exactly what landlords look for before you apply.",
};

const TOC: TocItem[] = [
  { id: "annotated-sample", label: "Annotated sample" },
  { id: "element-breakdown", label: "Element-by-element breakdown" },
  { id: "what-landlords-look-for", label: "What landlords look for" },
  { id: "download-preview-note", label: "Download & preview note" },
  { id: "faq", label: "FAQ" },
];

const BREAKDOWN: { n: number; title: string; body: string }[] = [
  {
    n: 1,
    title: "Provider letterhead & license number",
    body: "Confirms who wrote the letter and that they hold an active, verifiable license to practice.",
  },
  {
    n: 2,
    title: "Issue date",
    body: "Establishes the letter's validity window, typically treated as good for about one year.",
  },
  {
    n: 3,
    title: "Client reference line",
    body: "Ties the letter to a specific evaluated client, not a generic template anyone could reuse.",
  },
  {
    n: 4,
    title: "Clinical statement of need",
    body: "The core legal language: a disability-related need for the animal, tied to an active treatment plan.",
  },
  {
    n: 5,
    title: "Signature",
    body: "A real signature (digital or wet-ink) from the licensed provider, not a stamped or auto-generated mark.",
  },
  {
    n: 6,
    title: "Practice contact information",
    body: "Lets a landlord or property manager verify the letter directly with the issuing practice.",
  },
];

const FAQS: FaqItem[] = [
  {
    question: "Can I use this sample as my actual letter?",
    answer:
      "No. This is an illustrative example for education only. A valid letter must come from a licensed provider who personally evaluated you.",
  },
  {
    question: "Will my real letter look exactly like this?",
    answer:
      "The layout may differ slightly by provider, but every legitimate letter will contain the same six core elements shown above.",
  },
  {
    question: "Can I preview my letter before it's finalized?",
    answer:
      "Yes. After your assessment is reviewed and approved, you'll be able to review your letter before it's delivered as a final PDF.",
  },
  {
    question: "What format will I receive my letter in?",
    answer:
      "A digital, downloadable PDF that's ready to print or email directly to a landlord or property manager.",
  },
];

const RELATED: RelatedLink[] = [
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/" },
  { label: "How to Get an ESA Letter in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "ESA Letter Cost in Texas", href: "/cost/" },
];

export default function SampleLetterPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ESA Letter Sample" }]} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Sample"
        title="ESA Letter Sample"
        subhead="An annotated example of a compliant ESA letter, broken down field by field, so you know exactly what to expect."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="Check requirements"
        secondaryCtaHref="/requirements/"
      />

      <ArticleLayout
        toc={TOC}
        tocImage={{ src: "/images/Therapist Review.webp", alt: "Licensed therapist reviewing an ESA letter" }}
        related={RELATED}
        author={{
          name: "Gaurav Patel, MD",
          credentials: "FMP",
          licenseState: "Texas",
          reviewedDate: "September 2026",
          avatarSrc: "/doctors/-dr-gaurav-patel.webp",
        }}
      >
        <ArticleSection id="annotated-sample" index={1} title="Annotated Sample">
          <p>
            Below is an illustrative, non-submittable example. Each numbered pin marks a
            required field. Hover the numbers in the breakdown to see what each one
            means.
          </p>
          <div className="not-prose py-2">
            <AnnotatedLetterSample />
          </div>
          <p className="text-sm text-neutral-500">
            Names, license numbers, and contact details shown are fictional and for
            illustration only.
          </p>
        </ArticleSection>

        <ArticleSection id="element-breakdown" index={2} title="Element-by-Element Breakdown">
          <div className="grid gap-3 sm:grid-cols-2">
            {BREAKDOWN.map((item) => (
              <div
                key={item.n}
                className="flex gap-3 rounded-card border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-card"
              >
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white">
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-neutral-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Get a Letter That Matches This Standard"
            subhead="Every field, reviewed and signed by a licensed Texas therapist."
            ctaLabel="Start Your Assessment"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="what-landlords-look-for" index={3} title="What Landlords Look For">
          <p>
            Property managers who have dealt with ESA accommodation requests before tend to
            scan a letter for the same handful of things, in roughly this order:
          </p>
          <ArticleChecklist
            items={[
              "A real license number they could look up if needed",
              "A recent date, ideally within the last 12 months",
              "Language tying the animal to an active treatment plan, not just \"the client likes pets\"",
              "A signature and working contact information for the provider",
            ]}
          />
          <CalloutBox tone="info" title="Verification is normal, not hostile">
            A landlord contacting the issuing provider to confirm a letter is legitimate is not
            a denial; it's standard due diligence, and a properly issued letter will
            hold up to it.
          </CalloutBox>
        </ArticleSection>

        <ArticleSection id="download-preview-note" index={4} title="Download & Preview Note">
          <p>
            Once your assessment is approved, your actual letter is generated as a
            downloadable PDF you can preview before it's finalized. It will carry your
            reviewing therapist's real signature, license number, and contact details,
            not the fictional placeholders shown above.
          </p>
        </ArticleSection>
      </ArticleLayout>

      <FaqAccordion items={FAQS} title="Frequently Asked Questions About the Sample Letter" railGutter />

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
