import type { PageSeoFields } from "@/data/seo/types";

/** CMS-shaped category record — pillar mapping lives here for M7 + T8. */
export type BlogCategory = {
  slug: string;
  name: string;
  /** 100–150 word intro for T8 archives */
  intro: string;
  /** Primary silo pillar (T8 required top link) */
  pillarHref: string;
  pillarLabel: string;
  /** Optional supporting pillars (e.g. lifestyle → conditions + rights) */
  supportingPillars?: { label: string; href: string }[];
  /** Optional CMS SEO overrides for category archives. */
  seo?: Partial<PageSeoFields>;
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "rights-housing",
    name: "Rights & Housing",
    pillarHref: "/rights/",
    pillarLabel: "Texas ESA Laws & Housing Rights",
    intro:
      "Fair housing rules, landlord requests, and Texas-specific statutes shape how emotional support animal letters work in rental housing. These articles explain what landlords may ask for, how HB 4164 fits in, and how to document a disability-related need without oversharing clinical details. Whether you are submitting your first accommodation letter or responding to a denial, start with the rights pillar for the full legal context, then dive into the guides below.",
  },
  {
    slug: "qualifying-conditions",
    name: "Qualifying Conditions",
    pillarHref: "/conditions/",
    pillarLabel: "Who Qualifies for an ESA in Texas",
    intro:
      "Eligibility for an ESA letter depends on a licensed clinician’s evaluation—not a fixed diagnosis list. These posts walk through how common mental health conditions are assessed in Texas, what therapists look for during interviews, and how housing law interacts with valid documentation. Use the who-qualifies pillar for evaluation criteria and condition-specific cluster guides, then explore recent articles for practical answers.",
  },
  {
    slug: "texas-cities",
    name: "Texas Cities",
    pillarHref: "/locations/",
    pillarLabel: "ESA Letters by Texas City",
    intro:
      "Major Texas metros each have different rental markets, student housing, and local resources—but fair housing protections apply statewide when you have legitimate documentation. City guides cover what to expect when you rent in Houston, Austin, Dallas, and beyond, including how to present your letter and where to get help if a landlord pushes back. Visit the locations pillar for every city page, then read local tips here.",
  },
  {
    slug: "esa-lifestyle-care",
    name: "ESA Lifestyle & Care",
    pillarHref: "/conditions/",
    pillarLabel: "Who Qualifies for an ESA in Texas",
    supportingPillars: [
      { label: "Texas ESA Laws & Housing Rights", href: "/rights/" },
    ],
    intro:
      "Daily life with an emotional support animal touches wellness, routines, travel planning, and honest conversations with landlords or roommates. Lifestyle and care articles focus on practical support—not shortcuts around clinical or legal requirements. For medical eligibility, see the who-qualifies pillar; for housing disputes or letter validity, see your rights resources as supporting context.",
  },
  {
    slug: "landlord-tenant-guides",
    name: "Landlord & Tenant Guides",
    pillarHref: "/rights/",
    pillarLabel: "Texas ESA Laws & Housing Rights",
    intro:
      "Landlords and tenants both need clear, lawful processes for reasonable accommodation requests. These guides translate FHA expectations and Texas practice into checklists: what to include in a letter, reasonable response timelines, and when a denial may or may not be lawful. The housing rights pillar is the authoritative starting point; use this category for scenario-based walkthroughs and documentation tips.",
  },
  {
    slug: "news-policy-updates",
    name: "News & Policy Updates",
    pillarHref: "/rights/",
    pillarLabel: "Texas ESA Laws & Housing Rights",
    intro:
      "Legislative changes, HUD guidance, and Texas enforcement trends can affect how ESA letters are reviewed in housing. We summarize policy updates in plain language and link back to the rights pillar for full legal context. Articles here are informational—not legal advice—and pair best with a current letter from a licensed evaluating therapist.",
  },
];

export const BLOG_CATEGORY_BY_SLUG = Object.fromEntries(
  BLOG_CATEGORIES.map((c) => [c.slug, c]),
) as Record<string, BlogCategory>;
