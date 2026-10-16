import { pageMetadata } from "@/lib/seo";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  SiloChildGrid,
  BlogGrid,
  FaqAccordion,
  CtaBand,
  Breadcrumbs,
} from "@/components/sections";
import { PAGE_HERO } from "@/data/page-heroes";
import {
  CONDITION_CLUSTER_CARDS,
  CONDITIONS_BLOG_POSTS,
  CONDITIONS_PILLAR_FAQS,
  CONDITIONS_PILLAR_LABEL,
  CONDITIONS_PILLAR_TOC,
  CONDITIONS_REVIEWER,
} from "@/data/silos/conditions";

export const metadata = pageMetadata("/conditions/");

const PILLAR_RELATED = [
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "Apply for Your ESA Letter", href: "/apply-now/" },
  { label: "Texas ESA Laws & Housing Rights", href: "/rights/" },
];

export default function ConditionsPillarPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: CONDITIONS_PILLAR_LABEL }]}
      />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Who Qualifies"
        title="Who Qualifies for an Emotional Support Animal in Texas?"
        subhead="Individual clinical evaluation—not a diagnosis list—determines whether an ESA letter is appropriate."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        secondaryCtaLabel="Letter requirements"
        secondaryCtaHref="/requirements/"
        backgroundImage={PAGE_HERO.conditions}
      />

      <ArticleLayout
        toc={CONDITIONS_PILLAR_TOC}
        tocImage={{
          src: "/images/Common Conditions That Qualify for an ESA.webp",
          alt: "Who qualifies for an ESA in Texas",
        }}
        related={PILLAR_RELATED}
        author={CONDITIONS_REVIEWER}
        sidebarStickToColumn
      >
        <ArticleSection id="qualifying-criteria" index={1} title="Qualifying Criteria">
          <p>
            Texas does not publish an official list of diagnoses that “automatically” qualify for
            an emotional support animal. Instead, a licensed mental health professional or
            physician determines whether you have a disability-related need and whether an ESA
            supports your care plan. Functional impact—sleep, work, relationships, ability to
            manage daily tasks—matters more than the name of the condition.
          </p>
          <p>
            Housing protections under the Fair Housing Act kick in after you have reliable
            documentation. Explore condition-specific guides below for how common diagnoses are
            evaluated.
          </p>
        </ArticleSection>

        <ArticleSection id="licensed-provider" index={2} title="Role of a Licensed Provider">
          <p>
            Only a licensed clinician who evaluates you personally may issue a valid ESA letter.
            That includes LPCs, LCSWs, psychologists, psychiatrists, and physicians with active
            Texas licensure (or appropriate jurisdiction for telehealth). Registry websites,
            certificates, and instant letters without assessment do not replace this role.
          </p>
          <p>
            Providers state that you have a disability-related need for the animal without listing
            unnecessary clinical detail—landlords receive the letter, not your full chart.
          </p>
        </ArticleSection>

        <ArticleSection id="evaluation-process" index={3} title="Evaluation Process">
          <p>
            Expect a confidential questionnaire and clinical interview covering history, current
            symptoms, treatment, and why an animal helps at home. If you qualify, you receive a
            dated letter on letterhead with license information aligned to{" "}
            <a href="/requirements/" className="font-semibold text-brand-700 hover:text-brand-800">
              Texas requirements
            </a>{" "}
            and HB 4164. Renewals are typically annual.
          </p>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Start Your Confidential Assessment"
            subhead="Most clients complete the first step in minutes."
            ctaLabel="Apply Now"
            ctaHref="/apply-now/"
          />
        </div>
      </ArticleLayout>

      <SiloChildGrid
        eyebrow="By condition"
        title="Can You Get an ESA Letter for Your Condition?"
        subhead="Ten in-depth guides: law, clinical context, and therapist interview topics."
        items={CONDITION_CLUSTER_CARDS}
        scrollAnchorId="condition-guides"
      />

      <BlogGrid
        posts={CONDITIONS_BLOG_POSTS}
        title="Latest From the Blog"
        subhead="Qualifying conditions and evaluation tips."
      />

      <FaqAccordion
        items={CONDITIONS_PILLAR_FAQS}
        title="Who Qualifies — FAQ"
      />

      <CtaBand
        id="final-cta"
        title="Get Your ESA Letter in as Little as 24 Hours"
        subhead="Licensed Texas therapists. HIPAA compliant. Moneyback guarantee."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        showSteps
      />
    </>
  );
}
