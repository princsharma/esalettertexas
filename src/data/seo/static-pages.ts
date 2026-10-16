import type { PageSeoFields } from "./types";

/** CMS registry for static routes — add `canonicalPath` keys as new pages ship. */
export const STATIC_PAGE_SEO: Record<string, PageSeoFields> = {
  "/": {
    metaTitle: "ESA Letter Texas | Licensed Therapist-Reviewed ESA Letters",
    metaDescription:
      "Get a legitimate Emotional Support Animal letter in Texas, reviewed by a licensed therapist. HIPAA compliant, moneyback guarantee, 24-48hr turnaround.",
    canonicalPath: "/",
    schemaTypeOverride: "WebPage",
  },
  "/what-is-an-esa-letter/": {
    metaTitle: "What Is an ESA Letter? | ESA Letter Texas",
    metaDescription:
      "What an emotional support animal letter is, how it differs from service animals and registries, and how Texas renters use one for housing.",
    canonicalPath: "/what-is-an-esa-letter/",
  },
  "/how-to-get-an-esa-letter-in-texas/": {
    metaTitle: "How to Get an ESA Letter in Texas | ESA Letter Texas",
    metaDescription:
      "A step-by-step walkthrough for getting a legitimate, therapist-reviewed ESA letter in Texas: eligibility, process, timeline, and what you'll receive.",
    canonicalPath: "/how-to-get-an-esa-letter-in-texas/",
    schemaTypeOverride: "HowTo",
  },
  "/requirements/": {
    metaTitle: "Texas ESA Letter Requirements | ESA Letter Texas",
    metaDescription:
      "Mandatory elements of a valid Texas ESA letter, HB 4164 considerations, red flags, and what landlords may verify.",
    canonicalPath: "/requirements/",
  },
  "/sample-letter/": {
    metaTitle: "ESA Letter Sample | ESA Letter Texas",
    metaDescription:
      "Annotated ESA letter sample with element-by-element breakdown and what Texas landlords look for in documentation.",
    canonicalPath: "/sample-letter/",
  },
  "/cost/": {
    metaTitle: "ESA Letter Cost in Texas | ESA Letter Texas",
    metaDescription:
      "What an ESA letter costs in Texas, what's included, our refund policy, why free or cheap letters fail, and what renewal costs.",
    canonicalPath: "/cost/",
    schemaTypeOverride: "Product",
  },
  "/renewal/": {
    metaTitle: "ESA Letter Renewal | ESA Letter Texas",
    metaDescription:
      "When you need to renew your ESA letter, how the renewal process works, what it costs, and what changes on re-evaluation.",
    canonicalPath: "/renewal/",
  },
  "/rights/": {
    metaTitle: "Texas ESA Laws & Housing Rights | ESA Letter Texas",
    metaDescription:
      "Fair Housing Act and Texas HB 4164 explained: what landlords can and cannot do, plus guides to HOAs, fees, denials, and every major ESA housing topic.",
    canonicalPath: "/rights/",
  },
  "/conditions/": {
    metaTitle: "Who Qualifies for an Emotional Support Animal in Texas? | ESA Letter Texas",
    metaDescription:
      "Qualifying criteria, licensed provider role, evaluation process, and condition guides for ESA letters in Texas.",
    canonicalPath: "/conditions/",
  },
  "/locations/": {
    metaTitle: "ESA Letters in Texas — City Guide | ESA Letter Texas",
    metaDescription:
      "City-by-city ESA letter and rental housing guides for Houston, Dallas, Austin, San Antonio, Fort Worth, and more.",
    canonicalPath: "/locations/",
  },
  "/how-it-works/": {
    metaTitle: "How It Works | ESA Letter Texas",
    metaDescription:
      "Step-by-step ESA evaluation: confidential assessment, licensed therapist review, and a verifiable PDF letter for Texas housing.",
    canonicalPath: "/how-it-works/",
  },
  "/faq/": {
    metaTitle: "FAQ | ESA Letter Texas",
    metaDescription:
      "Answers about ESA letters in Texas: eligibility, landlord rules, timelines, renewal, and the evaluation process.",
    canonicalPath: "/faq/",
    schemaTypeOverride: "FAQPage",
  },
  "/about-our-therapists/": {
    metaTitle: "About Our Therapists | ESA Letter Texas",
    metaDescription:
      "Licensed mental health professionals and physicians who review ESA evaluations. Credentials, licensure, and E-E-A-T transparency.",
    canonicalPath: "/about-our-therapists/",
  },
  "/blog/": {
    metaTitle: "ESA Letter Texas Blog | Qualifying Conditions, Rights & City Guides",
    metaDescription:
      "Texas ESA letter guides: qualifying conditions, housing rights, city resources, landlord tips, and policy updates.",
    canonicalPath: "/blog/",
  },
  "/apply-now/": {
    metaTitle: "Apply Now | ESA Letter Texas",
    metaDescription:
      "Start your confidential ESA assessment with a licensed Texas therapist. Minimal distractions—focused conversion flow.",
    canonicalPath: "/apply-now/",
    robots: { index: true, follow: true },
  },
  "/contact/": {
    metaTitle: "Contact | ESA Letter Texas",
    metaDescription:
      "Contact ESA Letter Texas for assessment support, billing questions, or privacy requests.",
    canonicalPath: "/contact/",
  },
  "/privacy-policy/": {
    metaTitle: "Privacy Policy | ESA Letter Texas",
    metaDescription:
      "How ESA Letter Texas collects, uses, and protects your personal and health information.",
    canonicalPath: "/privacy-policy/",
  },
  "/terms/": {
    metaTitle: "Terms of Service | ESA Letter Texas",
    metaDescription: "Terms governing use of ESA Letter Texas assessment services and website.",
    canonicalPath: "/terms/",
  },
  "/disclaimer/": {
    metaTitle: "Disclaimer | ESA Letter Texas",
    metaDescription: "Medical and legal disclaimers for ESA Letter Texas educational content.",
    canonicalPath: "/disclaimer/",
  },
  "/search/": {
    metaTitle: "Search | ESA Letter Texas",
    metaDescription: "Search ESA Letter Texas guides, blog posts, and silo pages.",
    canonicalPath: "/search/",
    robots: { index: false, follow: true },
  },
  "/sitemap/": {
    metaTitle: "XML Sitemap | ESA Letter Texas",
    metaDescription:
      "Tabular XML sitemap of every indexable ESA Letter Texas URL with last modified dates, change frequency, and priority.",
    canonicalPath: "/sitemap/",
    robots: { index: false, follow: true },
  },
};
