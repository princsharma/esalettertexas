import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import { SupportPageShell } from "@/components/templates/SupportPageShell";

export const metadata = pageMetadata("/disclaimer/");

export default function DisclaimerPage() {
  return (
    <SupportPageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Disclaimer" }]}
      title="Disclaimer"
      heroBackgroundImage={PAGE_HERO.legal}
    >
      <div className="prose prose-neutral max-w-none">
        <p>
          ESA Letter Texas does not provide legal advice. Eligibility and letter validity are
          determined solely by a licensed evaluating therapist. Fair housing outcomes depend on your
          facts, documentation, and property policies.
        </p>
        <p>
          Blog posts, city guides, and FAQ answers summarize general principles—they are not a
          substitute for individualized legal counsel or emergency mental health care. If you are in
          crisis, call 988 or local emergency services.
        </p>
      </div>
    </SupportPageShell>
  );
}
