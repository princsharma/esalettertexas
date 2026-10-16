import { AssessmentForm } from "@/components/apply/AssessmentForm";
import { CtaBand, Hero, TrustBar } from "@/components/sections";
import { PAGE_HERO } from "@/data/page-heroes";
import { Container } from "@/components/ui/Container";

export default function ApplyNowPage() {
  return (
    <>
      <Hero
        variant="compact"
        eyebrow="Apply"
        title="Start Your Confidential ESA Assessment"
        subhead="Licensed Texas therapists. HIPAA compliant. No registry shortcuts—just a real clinical review."
        ctaLabel="Begin assessment"
        ctaHref="#assessment-form"
        secondaryCtaLabel="How it works"
        secondaryCtaHref="/how-it-works/"
        backgroundImage={PAGE_HERO.applyNow}
      />

      <TrustBar />

      <section id="assessment-form" className="scroll-mt-24 section-py bg-white">
        <Container className="max-w-xl">
          <AssessmentForm />
        </Container>
      </section>

      <CtaBand
        title="Questions before you apply?"
        subhead="Read how evaluation works—then return here when you are ready."
        ctaLabel="How it works"
        ctaHref="/how-it-works/"
        showSteps
      />
    </>
  );
}
