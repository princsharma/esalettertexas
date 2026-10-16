import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import { SupportPageShell } from "@/components/templates/SupportPageShell";

export const metadata = pageMetadata("/privacy-policy/");

export default function PrivacyPolicyPage() {
  return (
    <SupportPageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      title="Privacy Policy"
      subhead="Last updated: September 2026"
      heroBackgroundImage={PAGE_HERO.legal}
    >
      <div className="prose prose-neutral max-w-none">
        <p>
          We treat assessment responses and clinical information as sensitive data. This policy
          describes what we collect during your ESA evaluation, how we use it to connect you with
          licensed providers, and your choices regarding communications.
        </p>
        <h2>Information we collect</h2>
        <p>
          Contact details, assessment answers, payment information processed by our payment vendor,
          and correspondence with our clinical team.
        </p>
        <h2>HIPAA-aligned practices</h2>
        <p>
          Protected health information is shared only with licensed clinicians involved in your care
          and service providers bound by confidentiality obligations.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about privacy? Email us through the{" "}
          <a href="/contact/">contact page</a>.
        </p>
      </div>
    </SupportPageShell>
  );
}
