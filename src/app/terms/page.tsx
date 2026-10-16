import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import { SupportPageShell } from "@/components/templates/SupportPageShell";

export const metadata = pageMetadata("/terms/");

export default function TermsPage() {
  return (
    <SupportPageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
      title="Terms of Service"
      subhead="Last updated: September 2026"
      heroBackgroundImage={PAGE_HERO.legal}
    >
      <div className="prose prose-neutral max-w-none">
        <p>
          By using this site and submitting an assessment, you agree to these terms. ESA Letter
          Texas facilitates connections with licensed clinicians; we do not guarantee housing
          outcomes or landlord approval.
        </p>
        <h2>Clinical services</h2>
        <p>
          Letters are issued only when a licensed provider determines medical necessity after
          evaluation. Refunds follow our published moneyback policy when clinical criteria are not
          met.
        </p>
        <h2>Limitations</h2>
        <p>
          Content on this site is general information, not legal or medical advice. See Disclaimer
          for additional limitations.
        </p>
      </div>
    </SupportPageShell>
  );
}
