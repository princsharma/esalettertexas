import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Hero,
  TrustBar,
  StatsStrip,
  TeamGrid,
  ProcessSteps,
  WhyChooseUs,
  SiloChildGrid,
  CtaBand,
  FaqAccordion,
  BlogGrid,
  PricingShot,
} from "@/components/sections";
import { TOP_CONDITIONS, CITIES, FAQS, BLOG_POSTS } from "@/data/home";
import { HERO_IMAGES } from "@/data/hero-images";
import type { ReactNode } from "react";
import ESALetterIntro from "@/components/sections/ESALetterIntro";
import ConditionsList from "@/components/sections/ConditionsList";
import TexasRights from "@/components/sections/TexasRights";



/** One distinct icon per city, keyed by title. */
const CITY_ICONS: Record<string, ReactNode> = {
  Austin: (
    <path d="M10 2a1 1 0 01.894.553l1.382 2.76 3.046.443a1 1 0 01.555 1.706l-2.205 2.15.52 3.034a1 1 0 01-1.451 1.054L10 12.27l-2.741 1.43a1 1 0 01-1.451-1.054l.52-3.034-2.205-2.15a1 1 0 01.555-1.706l3.046-.443 1.382-2.76A1 1 0 0110 2z" />
  ),
  Houston: (
    <>
      <rect x="3" y="9" width="4" height="9" />
      <rect x="8" y="5" width="4" height="13" />
      <rect x="13" y="11" width="4" height="7" />
    </>
  ),
  Dallas: (
    <>
      <rect x="4" y="2" width="1.4" height="16" rx="0.7" />
      <path d="M5.4 3 14 5.5 5.4 8Z" />
    </>
  ),
  "San Antonio": (
    <path
      d="M2 8c2-2 4-2 6 0s4 2 6 0 4-2 4 0M2 13c2-2 4-2 6 0s4 2 6 0 4-2 4 0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  ),
  "Fort Worth": (
    <>
      <circle cx="10" cy="10" r="7.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 7 11 11 7 13 9 9Z" />
    </>
  ),
  "El Paso": <path d="M2 16 7 7l3 4 2-3 6 8Z" />,
};

export default function Home() {
  return (
    <>
    <Hero
        eyebrow="Texas · Licensed Therapists"
        title="ESA Letter Texas"
        subhead="Get a legitimate Emotional Support Animal letter, reviewed by a licensed Texas therapist, online, confidential, and ready in as little as 24 hours."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        secondaryCtaLabel="See how it works"
        secondaryCtaHref="#how-it-works"
        trustBadges={[
          {
            label: "Licensed TX therapists",
            icon: (
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zM3 17c0-3.314 3.134-6 7-6s7 2.686 7 6H3z"
                clipRule="evenodd"
              />
            ),
          },
          {
            label: "HIPAA compliant",
            icon: (
              <path d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z" />
            ),
          },
          { label: "Moneyback guarantee" },
        ]}
      />
      <TrustBar />
      <StatsStrip />
      <TeamGrid />
     <ProcessSteps />
      <WhyChooseUs />
    <ESALetterIntro/>
     <ConditionsList/>
      <TexasRights/>
      <PricingShot/>
      {/* Inline CTA band */}
      <div id="apply" className="scroll-mt-20">
        <CtaBand
          title="Ready to Get Your ESA Letter?"
          subhead="Start your confidential assessment today. Most clients qualify in minutes."
          showLetter
         
          />
      </div>
      {/* Cities served grid */}
        <SiloChildGrid
          eyebrow="Where we serve"
          title="ESA Letters Across Texas"
          subhead="Local ESA housing rules and resources for major Texas cities."
          items={CITIES.map((city) => ({ ...city, icon: CITY_ICONS[city.title] }))}
          viewAllHref="/#locations"
          viewAllLabel="View all cities"
          variant="location"
        />
        {/* FAQ Block */}
        <FaqAccordion items={FAQS} title="Frequently Asked Questions About ESA Letter Texas" />
        {/* Blog Section */}
        <BlogGrid
          posts={BLOG_POSTS}
          subhead="Guides and Texas-specific legal breakdowns to help you navigate the ESA process with confidence."
        />
      {/* Final CTA band */}
      <CtaBand
        title="Get Your ESA Letter in as Little as 24 Hours"
        subhead="Licensed Texas therapists. HIPAA compliant. Moneyback guarantee."
        ctaLabel="Apply Now"
        ctaHref="/#apply"
        showSteps
    
      />
    </>
  );
}
