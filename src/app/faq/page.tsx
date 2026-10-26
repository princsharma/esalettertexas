import { CtaBand } from "@/components/sections";
import { FaqGrouped } from "@/components/sections/FaqGrouped";
import { SupportPageShell } from "@/components/templates/SupportPageShell";
import { PAGE_HERO } from "@/data/page-heroes";
import { FAQ_GROUPS } from "@/data/faq-groups";
import { RIGHTS_REVIEWER } from "@/data/silos/rights";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/faq/");

export default function FaqPage() {
  return (
    <>
      <SupportPageShell
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQ" }]}
        title="Frequently Asked Questions"
        subhead="Use the topic filters to find answers about evaluations, Texas housing rules, and letter renewals."
        narrow={false}
        reviewer={RIGHTS_REVIEWER}
        heroBackgroundImage={PAGE_HERO.faq}
      >
        <FaqGrouped groups={FAQ_GROUPS} />
      </SupportPageShell>
      <CtaBand
        title="Still have questions? Start your assessment."
        subhead="A licensed Texas therapist can determine whether an ESA letter is appropriate for you."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
      />
    </>
  );
}
