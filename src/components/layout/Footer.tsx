import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type FooterLink = { label: string; href: string };

const CORE_LINKS: FooterLink[] = [
  { label: "What Is an ESA Letter", href: "/what-is-an-esa-letter/" },
  { label: "How to Get One in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "Requirements", href: "/requirements/" },
  { label: "Sample Letter", href: "/sample-letter/" },
  { label: "Cost", href: "/cost/" },
  { label: "Renewal", href: "/renewal/" },
];

const RIGHTS_LINKS: FooterLink[] = [
  { label: "Fair Housing Act", href: "/what-is-an-esa-letter/#legal-basis" },
  { label: "HB 4164", href: "/requirements/#hb-4164-compliance" },
  { label: "ESA vs Service Animal", href: "/what-is-an-esa-letter/#what-it-is-not" },
  { label: "No-Pet Apartments", href: "/what-is-an-esa-letter/#how-its-used" },
  { label: "Landlord Denials", href: "/requirements/#red-flags" },
];

const CONDITION_LINKS: FooterLink[] = [
  { label: "Anxiety", href: "/#conditions" },
  { label: "Depression", href: "/#conditions" },
  { label: "PTSD", href: "/#conditions" },
  { label: "ADHD", href: "/#conditions" },
  { label: "Autism", href: "/#conditions" },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "About Our Therapists", href: "/#apply" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#apply" },
  { label: "Privacy Policy", href: "/#apply" },
  { label: "Terms", href: "/#apply" },
  { label: "Disclaimer", href: "/#apply" },
];

const SOCIAL_LINKS: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <path d="M13 8.5h1.8V6.1h-2C10.5 6.1 9.5 7.2 9.5 9v1.8H8v2.4h1.5V17h2.4v-3.8h1.9l.3-2.4h-2.2V9.3c0-.5.2-.8.9-.8Z" />
    ),
  },
  {
    label: "X (Twitter)",
    href: "#",
    icon: (
      <path
        fillRule="evenodd"
        d="M5.5 5l4.2 5.6L5.3 15h1.5l3.6-3.9 2.9 3.9h3l-4.4-5.9L15.3 5h-1.5l-3.4 3.6L8.5 5h-3Zm2.2 1.1h1.3l6.1 8.1h-1.3L7.7 6.1Z"
        clipRule="evenodd"
      />
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="13" height="13" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13.6" cy="6.4" r="0.9" />
      </>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <>
        <rect x="3.5" y="3.5" width="13" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <rect x="6" y="8.3" width="1.6" height="6" />
        <circle cx="6.8" cy="6" r="1" />
        <path d="M9.3 8.3h1.6v.9c.4-.6 1.1-1.1 2.1-1.1 1.6 0 2.4 1 2.4 2.9v3.3h-1.6v-3c0-1-.4-1.6-1.3-1.6-.7 0-1.2.5-1.4 1-.1.2-.1.4-.1.7v2.9H9.3Z" />
      </>
    ),
  },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  return (
    <li>
      <Link
        href={link.href}
        className="group inline-flex items-center gap-2 text-base text-brand-100 transition-colors duration-200 hover:text-white"
      >
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 flex-none rounded-full bg-white/20 transition-colors duration-200 group-hover:bg-accent-400"
        />
        {link.label}
      </Link>
    </li>
  );
}

/** Site footer: a concise 4-column link directory (Core, Your Rights, Qualifying
 *  Conditions, Company), on brand-950 so it matches the other dark surfaces, with
 *  a row of social icons below the columns. */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-brand-950">
      <Container className="py-12 md:py-14">
        {/* Compact brand strip */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="relative -ml-1 flex items-center" aria-label="ESA Letter Texas, home">
      
            <div className="relative h-14 w-[190px] flex-none">
              <Image
                src="/hero/ESALetterLogo-dark.png"
                alt="ESA Letter Texas"
                fill
                sizes="190px"
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="text-sm font-medium text-brand-200">
            Licensed Texas therapists · HIPAA compliant · Confidential
          </p>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 pt-10 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
          <nav aria-label="Core">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Core</p>
            <ul className="mt-4 space-y-2.5">
              {CORE_LINKS.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </ul>
          </nav>

          <nav aria-label="Your Rights">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Your Rights</p>
            <ul className="mt-4 space-y-2.5">
              {RIGHTS_LINKS.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </ul>
          </nav>

          <nav aria-label="Qualifying Conditions">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Qualifying Conditions</p>
            <ul className="mt-4 space-y-2.5">
              {CONDITION_LINKS.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
              <li>
                <Link
                  href="/#conditions"
                  className="group inline-flex items-center gap-1.5 text-base font-semibold text-accent-300 transition-colors duration-200 hover:text-accent-200"
                >
                  See all conditions
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-300">Company</p>
            <ul className="mt-4 space-y-2.5">
              {COMPANY_LINKS.map((link) => (
                <FooterLinkItem key={link.label} link={link} />
              ))}
            </ul>
          </nav>
        </div>

        {/* Social icons, below the link columns */}
        <div className="mt-10 flex items-center justify-center gap-3 md:justify-start">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-brand-100 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500 hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                {social.icon}
              </svg>
            </a>
          ))}
        </div>

        {/* Legal + copyright */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 text-center text-sm text-brand-300 md:flex-row md:justify-between md:text-left">
          <p className="max-w-2xl leading-relaxed">
            ESA Letter Texas does not provide legal advice. Eligibility and letter validity are
            determined solely by a licensed evaluating therapist. See our Terms of Service §7.4 for
            full limitations.
          </p>
          <p className="flex-none">&copy; {year} ESA Letter Texas. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
