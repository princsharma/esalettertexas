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
  RIGHTS_BLOG_POSTS,
  RIGHTS_CLUSTER_CARDS,
  RIGHTS_PILLAR_FAQS,
  RIGHTS_PILLAR_RELATED,
  RIGHTS_PILLAR_TOC,
  RIGHTS_REVIEWER,
} from "@/data/silos/rights";

export const metadata = pageMetadata("/rights/");

export default function RightsPillarPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Texas ESA Laws & Housing Rights" }]}
      />

      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas · Housing Rights"
        title="Texas ESA Laws & Housing Rights"
        subhead="Federal fair housing rules and Texas HB 4164—what they mean for renters, HOAs, and college housing."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="Letter requirements"
        secondaryCtaHref="/requirements/"
        backgroundImage={PAGE_HERO.rights}
      />

      <ArticleLayout
        toc={RIGHTS_PILLAR_TOC}
        tocImage={{ src: "/images/your-rights-esa-bg.webp", alt: "Texas ESA housing rights" }}
        related={RIGHTS_PILLAR_RELATED}
        author={RIGHTS_REVIEWER}
        sidebarStickToColumn
      >
        <ArticleSection id="overview" index={1} title="Overview">
          <p>
            Texas renters with emotional support animals rely on two layers of law: the federal
            Fair Housing Act (FHA) and Texas House Bill 4164. Together they protect disability-related
            housing accommodations while pushing back on fake documentation and abusive registry
            scams. If you have a legitimate need and a letter from a licensed provider, most
            landlords must consider waiving no-pet rules, breed restrictions, and pet fees.
          </p>
          <p>
            This hub explains what housing providers may ask for, where they overstep, and how to
            respond if a landlord or HOA denies your animal. Use the guides below for deep dives on
            the FHA, HB 4164, college dorms, moving, and more. Nothing here is legal advice—when a
            dispute escalates, document everything and consult HUD, the Texas Workforce Commission,
            or a fair housing attorney.
          </p>
        </ArticleSection>

        <ArticleSection id="fair-housing-overview" index={2} title="Fair Housing Act Overview">
          <p>
            The FHA prohibits disability discrimination in most rental housing. Emotional support
            animals are assistance animals, not pets, when they relieve symptoms of a disability.
            That means a &quot;no pets&quot; clause usually cannot block a documented ESA.
          </p>
          <p>
            Landlords may request reliable documentation—typically a letter from a licensed mental
            health professional or physician—but they cannot demand unlimited medical records or
            registry IDs. Learn more in our{" "}
            <a href="/rights/fair-housing-act/" className="font-semibold text-brand-700 hover:text-brand-800">
              Fair Housing Act guide
            </a>
            .
          </p>
        </ArticleSection>

        <div className="!mt-0 not-prose">
          <CtaBand
            title="Secure Housing With a Compliant Letter"
            subhead="Signed by a licensed Texas therapist—built for landlord review."
            ctaLabel="Start Your Assessment"
            ctaHref="/#apply"
          />
        </div>

        <ArticleSection id="hb-4164-overview" index={3} title="HB 4164 Overview">
          <p>
            Texas HB 4164 adds state-level guardrails: penalties for fraudulent letters and limits on
            documentation fishing expeditions. It does not cancel valid accommodations. Renters still
            need a real clinical relationship and a dated letter on provider letterhead.
          </p>
          <p>
            Read the full breakdown in{" "}
            <a href="/rights/hb-4164-explained/" className="font-semibold text-brand-700 hover:text-brand-800">
              Texas HB 4164 Explained
            </a>{" "}
            and avoid registry sites that HB 4164 was partly designed to discourage.
          </p>
        </ArticleSection>

        <ArticleSection id="landlord-rules" index={4} title="What Landlords Can and Cannot Do">
          <p>
            <strong>Can:</strong> Ask for a compliant provider letter, verify license status, set
            conduct rules (leash, waste cleanup), and deny if a specific animal poses a direct threat
            or causes substantial damage that cannot be mitigated.
          </p>
          <p>
            <strong>Cannot:</strong> Charge pet rent or deposits for an ESA, enforce breed/size caps
            without an individualized safety review, require registry certificates, or refuse solely
            because the lease bans pets. See{" "}
            <a href="/rights/landlord-denials/" className="font-semibold text-brand-700 hover:text-brand-800">
              landlord denials
            </a>{" "}
            and{" "}
            <a href="/rights/pet-deposits-and-fees/" className="font-semibold text-brand-700 hover:text-brand-800">
              pet fees
            </a>{" "}
            for next steps.
          </p>
        </ArticleSection>
      </ArticleLayout>

      <SiloChildGrid
        eyebrow="Housing rights library"
        title="Explore Every Texas ESA Housing Topic"
        subhead="In-depth guides on FHA rules, HOAs, college housing, scams, and more."
        items={RIGHTS_CLUSTER_CARDS}
        scrollAnchorId="rights-guides"
      />

      <BlogGrid
        posts={RIGHTS_BLOG_POSTS}
        title="Latest From the Blog"
        subhead="Rights and housing articles for Texas ESA owners."
      />

      <FaqAccordion items={RIGHTS_PILLAR_FAQS} title="Texas ESA Housing Rights FAQ" />

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
