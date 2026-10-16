import { CtaBand, ProcessSteps, TrustBar } from "@/components/sections";
import { SupportPageShell } from "@/components/templates/SupportPageShell";
import { PAGE_HERO } from "@/data/page-heroes";
import { DEFAULT_PROCESS_STEPS } from "@/data/process-steps";
import { RIGHTS_REVIEWER } from "@/data/silos/rights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/how-it-works/");

export default function HowItWorksPage() {
  return (
    <>
      <SupportPageShell
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How It Works" }]}
        title="How Our ESA Evaluation Works"
        subhead="Expanded timeline from first click to signed letter—and what to expect after you submit."
        narrow={false}
        reviewer={RIGHTS_REVIEWER}
        heroBackgroundImage={PAGE_HERO.howItWorks}
      >
        <div className="prose prose-neutral max-w-none">
          <p>
            Every legitimate ESA letter starts with a real clinical relationship. We do not sell
            registry certificates or instant letters without assessment. Below is the same three-step
            flow shown on our homepage, with more detail on timing, privacy, and landlord-ready
            delivery.
          </p>
          <h2>Timeline at a glance</h2>
          <ul>
            <li>
              <strong>Day 0:</strong> Complete the confidential online assessment (most clients
              finish in under 15 minutes).
            </li>
            <li>
              <strong>Within 24–48 hours:</strong> A licensed Texas therapist reviews your
              responses and may follow up with clarifying questions.
            </li>
            <li>
              <strong>When approved:</strong> You receive a signed PDF on letterhead with license
              details—ready to send to your landlord or property manager.
            </li>
          </ul>
          <h2>What to have ready</h2>
          <p>
            Be prepared to discuss how symptoms affect sleep, work, relationships, and daily
            routines, plus why an animal supports you at home. You do not need to upload full medical
            records to start.
          </p>
        </div>
      </SupportPageShell>
      <TrustBar />
      <ProcessSteps steps={DEFAULT_PROCESS_STEPS} />
      <CtaBand
        title="Start Your Confidential Assessment"
        subhead="Licensed Texas therapists. HIPAA compliant."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        showSteps
      />
    </>
  );
}
