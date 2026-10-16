import { PAGE_HERO } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { SupportPageShell } from "@/components/templates/SupportPageShell";
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
      <form className="not-prose mt-6 space-y-4 rounded-card border border-neutral-200 p-4 shadow-card sm:mt-8 sm:p-6">
        <label className="block">
          <span className="text-sm font-semibold text-neutral-800">Email</span>
          <input
            type="email"
            name="email"
            className="mt-1 w-full rounded-control border border-neutral-200 px-3 py-2.5"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-neutral-800">Message</span>
          <textarea
            name="message"
            rows={5}
            className="mt-1 w-full rounded-control border border-neutral-200 px-3 py-2.5"
          />
        </label>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-control bg-gradient-brand px-5 py-2.5 text-sm font-bold text-white shadow-sm sm:w-auto"
        >
          Send message
        </button>
      </form>
    </SupportPageShell>
  );
}
