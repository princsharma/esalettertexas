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
import ESALetterIntro from "@/components/sections/ESALetterIntro";
import ConditionsList from "@/components/sections/ConditionsList";
import TexasRights from "@/components/sections/TexasRights";

/** One distinct icon per city, keyed by title. */
const CITY_ICONS: Record<string, string> = {
  Austin: "/icons/austin.webp",
  Houston: "/icons/huoston.webp",
  Dallas: "/icons/dallas.webp",
  "San Antonio": "/icons/san antonio.webp",
  "Fort Worth": "/icons/forth worth.webp",
  "El Paso": "/icons/el paso.webp",
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
          { label: "Licensed TX therapists", icon: "/icons/Licensed TX therapists_1.webp" },
          { label: "HIPAA compliant", icon: "/icons/HIPAA compliant_1.webp" },
          { label: "Moneyback guarantee", icon: "/icons/Moneyback Guarantee.webp" },
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
