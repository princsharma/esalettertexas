import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import { CtaBand, TeamGrid, TrustBar } from "@/components/sections";
import { SupportPageShell } from "@/components/templates/SupportPageShell";

export const metadata = pageMetadata("/about-our-therapists/");

export default function AboutTherapistsPage() {
  return (
    <>
      <SupportPageShell
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Our Therapists" }]}
        title="About Our Therapists"
        subhead="Every letter is reviewed by a licensed clinician—not a registry bot. Meet the providers behind ESA Letter Texas."
        narrow={false}
        heroBackgroundImage={PAGE_HERO.aboutTherapists}
      >
        <div className="prose prose-neutral mx-auto max-w-3xl">
          <p>
            E-E-A-T matters for your housing documentation. Landlords and HOAs increasingly verify
            that letters come from active licensees. We publish clinician credentials, focus areas,
            and review dates on articles and letters so you know who evaluated your need.
          </p>
          <h2>License verification</h2>
          <p>
            Letters include the evaluating provider’s name, credentials, license number, and state of
            licensure aligned with Texas requirements and HB 4164 expectations. We do not issue
            letters from unlicensed coaches or automated certificate mills.
          </p>
        </div>
      </SupportPageShell>
      <TrustBar />
      <TeamGrid />
      <CtaBand
        title="Work With a Licensed Texas Therapist"
        subhead="Confidential assessment. HIPAA compliant."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
      />
    </>
  );
}
