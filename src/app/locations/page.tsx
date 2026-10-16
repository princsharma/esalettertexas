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
  LOCATION_CITY_CARDS,
  LOCATIONS_BLOG_POSTS,
  LOCATIONS_PILLAR_FAQS,
  LOCATIONS_PILLAR_TOC,
  LOCATIONS_REVIEWER,
} from "@/data/silos/locations";

export const metadata = pageMetadata("/locations/");

const PILLAR_RELATED = [
  { label: "Texas ESA Laws & Housing Rights", href: "/rights/" },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "Apply for Your ESA Letter", href: "/apply-now/" },
];

export default function LocationsPillarPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "ESA Letters in Texas — City Guide" }]}
      />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Locations"
        title="ESA Letters in Texas — City Guide"
        subhead="Statewide rights plus local rental context for major Texas metros."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        secondaryCtaLabel="Housing rights overview"
        secondaryCtaHref="/rights/"
        backgroundImage={PAGE_HERO.locations}
      />

      <ArticleLayout
        toc={LOCATIONS_PILLAR_TOC}
        tocImage={{ src: "/images/residential_lease_keys.webp", alt: "Texas city ESA guides" }}
        related={PILLAR_RELATED}
        author={LOCATIONS_REVIEWER}
        sidebarStickToColumn
        sidebarBoundarySelector="#city-guides-grid"
      >
        <ArticleSection id="statewide-overview" index={1} title="Statewide Overview">
          <p>
            Whether you rent in Houston, a Dallas high-rise, or a San Antonio suburb, the same
            federal Fair Housing Act and Texas HB 4164 documentation standards apply. City guides
            below explain local rental markets and municipal animal rules—they do not replace
            statewide accommodation rights.
          </p>
        </ArticleSection>

        <ArticleSection id="rules-everywhere-tx" index={2} title="How Rules Apply Everywhere in Texas">
          <p>
            Landlords may verify your provider’s license and request reliable documentation, but
            cannot demand registry certificates or reject ESAs solely because of no-pet clauses.
            Breed and weight limits must yield unless there is an individualized safety record for
            your animal. See our{" "}
            <a href="/rights/" className="font-semibold text-brand-700 hover:text-brand-800">
              housing rights library
            </a>{" "}
            for deep dives.
          </p>
        </ArticleSection>

        <ArticleSection id="city-guides" index={3} title="City Guides">
          <p>
            Each guide includes local rental stats, ordinance notes, and resources vetted for that
            metro. Content is maintained per city—avoid copy that only swaps the city name when
            updating these pages.
          </p>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Need a Letter That Works Statewide?"
            subhead="Licensed Texas therapists familiar with landlord review."
            ctaLabel="Apply Now"
            ctaHref="/apply-now/"
          />
        </div>
      </ArticleLayout>

      <SiloChildGrid
        eyebrow="Texas metros"
        title="Choose Your City"
        subhead="Local housing context, ordinances, and ESA-friendly resources."
        items={LOCATION_CITY_CARDS}
        variant="location"
        scrollAnchorId="city-guides-grid"
      />

      <BlogGrid
        posts={LOCATIONS_BLOG_POSTS}
        title="Latest From the Blog"
        subhead="Texas city rental and ESA updates."
      />

      <FaqAccordion items={LOCATIONS_PILLAR_FAQS} title="Texas City ESA FAQ" />

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
