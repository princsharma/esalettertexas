import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/components/sections";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  CalloutBox,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
} from "@/components/sections";
import type { FaqItem, RelatedLink, TocItem, TocImage } from "@/components/sections";

export type ClusterSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

type Author = {
  name: string;
  credentials: string;
  licenseState: string;
  reviewedDate: string;
  avatarSrc?: string;
};

type LegalCallout = {
  title: string;
  body: string;
  tone: "info" | "warning" | "danger";
};

/** T4 silo cluster layout: M1 → quick answer → TOC → body → legal callout → inline CTA → FAQ → final CTA (M11 in sidebar). */
export function SiloClusterPage({
  breadcrumbs,
  heroEyebrow,
  heroTitle,
  heroSubhead,
  heroSecondaryLabel,
  heroSecondaryHref,
  quickAnswer,
  toc,
  tocImage,
  related,
  author,
  sections,
  sectionExtras,
  legalCallout,
  faqs,
  faqTitle,
  sidebarStickToColumn,
  heroBackgroundImage,
  inlineCta = {
    title: "Need a Letter Landlords Accept?",
    subhead: "Reviewed and signed by a therapist licensed to practice in Texas.",
    ctaLabel: "Start Your Assessment",
    ctaHref: "/apply-now/",
  },
}: {
  breadcrumbs: BreadcrumbItem[];
  heroEyebrow: string;
  heroTitle: string;
  heroSubhead: string;
  heroSecondaryLabel: string;
  heroSecondaryHref: string;
  quickAnswer: string;
  toc: TocItem[];
  tocImage?: TocImage;
  related: RelatedLink[];
  author: Author;
  sections: ClusterSection[];
  /** Optional JSX per section id (e.g. comparison table). */
  sectionExtras?: Record<string, ReactNode>;
  legalCallout: LegalCallout;
  faqs: FaqItem[];
  faqTitle?: string;
  sidebarStickToColumn?: boolean;
  heroBackgroundImage?: string;
  inlineCta?: {
    title: string;
    subhead: string;
    ctaLabel: string;
    ctaHref: string;
  };
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        variant="compact"
        eyebrow={heroEyebrow}
        title={heroTitle}
        subhead={heroSubhead}
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        secondaryCtaLabel={heroSecondaryLabel}
        secondaryCtaHref={heroSecondaryHref}
        backgroundImage={heroBackgroundImage ?? null}
      />

      <ArticleLayout
        toc={toc}
        tocImage={tocImage}
        related={related}
        author={author}
        quickAnswer={quickAnswer}
        sidebarStickToColumn={sidebarStickToColumn ?? true}
      >
        {sections.map((section, index) => (
          <ArticleSection key={section.id} id={section.id} index={index + 1} title={section.title}>
            {section.paragraphs.map((p, pi) => (
              <p key={pi}>{p}</p>
            ))}
            {sectionExtras?.[section.id]}
          </ArticleSection>
        ))}

        <div className="!mt-0 not-prose">
          <CalloutBox tone={legalCallout.tone} title={legalCallout.title}>
            {legalCallout.body}
          </CalloutBox>
        </div>

        <div className="!mt-0 not-prose">
          <CtaBand
            title={inlineCta.title}
            subhead={inlineCta.subhead}
            ctaLabel={inlineCta.ctaLabel}
            ctaHref={inlineCta.ctaHref}
          />
        </div>
      </ArticleLayout>

      <FaqAccordion items={faqs} title={faqTitle ?? `FAQ: ${heroTitle}`} />

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
