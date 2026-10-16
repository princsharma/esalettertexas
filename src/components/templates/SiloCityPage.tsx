import type { BreadcrumbItem } from "@/components/sections";
import {
  Hero,
  ArticleLayout,
  ArticleSection,
  CtaBand,
  FaqAccordion,
  Breadcrumbs,
  CityInfoPanel,
} from "@/components/sections";
import type { CityResource, CityStat, FaqItem, RelatedLink, TocItem, TocImage } from "@/components/sections";
import type { ClusterSection } from "./SiloClusterPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { LOCATIONS_REVIEWER } from "@/data/silos/locations";
import { cityServiceSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/seo";

/** T6 city cluster: M1 → quick answer → M14 → TOC → body → inline CTA → FAQ → final CTA (M8 in sidebar). */
export function SiloCityPage({
  breadcrumbs,
  heroTitle,
  heroSubhead,
  quickAnswer,
  cityName,
  citySlug,
  cityInfoPanel,
  toc,
  tocImage,
  related,
  sections,
  faqs,
  faqTitle,
  heroBackgroundImage,
}: {
  breadcrumbs: BreadcrumbItem[];
  heroTitle: string;
  heroSubhead: string;
  quickAnswer: string;
  cityName: string;
  citySlug: string;
  /** CMS-editable M14 fields per city — map rental stats, ordinances, and resources here. */
  cityInfoPanel: {
    stats: CityStat[];
    localRules: string[];
    resources: CityResource[];
  };
  toc: TocItem[];
  tocImage?: TocImage;
  related: RelatedLink[];
  sections: ClusterSection[];
  faqs: FaqItem[];
  faqTitle?: string;
  heroBackgroundImage?: string;
}) {
  const pageUrl = absoluteUrl(`/locations/${citySlug}/`);

  return (
    <>
      <JsonLd data={cityServiceSchema(cityName, pageUrl)} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · City Guide"
        title={heroTitle}
        subhead={heroSubhead}
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        secondaryCtaLabel="All Texas cities"
        secondaryCtaHref="/locations/"
        backgroundImage={heroBackgroundImage ?? null}
      />

      <ArticleLayout
        toc={toc}
        tocImage={tocImage}
        related={related}
        author={LOCATIONS_REVIEWER}
        sidebarStickToColumn
        quickAnswer={quickAnswer}
        afterQuickAnswer={
          <CityInfoPanel
            cityName={cityName}
            stats={cityInfoPanel.stats}
            localRules={cityInfoPanel.localRules}
            resources={cityInfoPanel.resources}
          />
        }
      >
        {sections.map((section, index) => (
          <ArticleSection key={section.id} id={section.id} index={index + 1} title={section.title}>
            {section.paragraphs.map((p, pi) => (
              <p key={pi}>{p}</p>
            ))}
          </ArticleSection>
        ))}

        <div className="!mt-0 not-prose">
          <CtaBand
            title={`Get an ESA Letter for Your ${cityName} Rental`}
            subhead="Signed by a therapist licensed to practice in Texas."
            ctaLabel="Start Your Assessment"
            ctaHref="/apply-now/"
          />
        </div>
      </ArticleLayout>

      <FaqAccordion items={faqs} title={faqTitle ?? `${cityName} ESA FAQ`} />

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
