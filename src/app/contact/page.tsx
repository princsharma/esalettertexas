import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { SupportPageShell } from "@/components/templates/SupportPageShell";
import { SubmitButton } from "@/components/ui/Button";
import { Field, TextArea, TextInput } from "@/components/ui/Field";

export const metadata = pageMetadata("/contact/");

export default function ContactPage() {
  return (
    <SupportPageShell
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      title="Contact Us"
      subhead="Assessment or letter questions? We respond within one business day."
      heroBackgroundImage={PAGE_HERO.contact}
    >
      <div className="prose prose-neutral max-w-none">
        <p>
          For the fastest path to a letter, start the{" "}
          <Link href="/apply-now/">online assessment</Link>. Use this form for billing, privacy,
          or technical issues.
        </p>
      </div>
      <form className="not-prose mt-6 space-y-5 rounded-card border border-neutral-200 p-4 shadow-card sm:mt-8 sm:p-6">
        <Field label="Email address" htmlFor="contact-email">
          <TextInput
            id="contact-email"
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </Field>
        <Field label="Message" htmlFor="contact-message">
          <TextArea id="contact-message" name="message" rows={5} />
        </Field>
        <SubmitButton className="w-full sm:w-auto">Send message</SubmitButton>
      </form>
    </SupportPageShell>
  );
}
