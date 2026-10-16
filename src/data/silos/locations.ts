import type { BlogPost, FaqItem, RelatedLink, SiloCard } from "@/components/sections";
import { getPostsForPillarM7 } from "@/lib/blog";
import type { TocItem } from "@/components/sections";

export const LOCATIONS_PILLAR_PATH = "/locations/";

export const LOCATIONS_REVIEWER = {
  name: "Robert Staaf",
  credentials: "LCSW",
  licenseState: "Texas",
  reviewedDate: "September 2026",
  avatarSrc: "/doctors/robert-staaf.webp",
};

export const LOCATION_CITY_CARDS: SiloCard[] = [
  {
    title: "Houston",
    description: "Rentals, landlord trends, and ESA accommodation in Harris County.",
    href: "/locations/houston/",
  },
  {
    title: "Dallas",
    description: "DFW apartment market notes and fair housing resources.",
    href: "/locations/dallas/",
  },
  {
    title: "Austin",
    description: "Capitol city leases, student housing, and local ordinances.",
    href: "/locations/austin/",
  },
  {
    title: "San Antonio",
    description: "Military-adjacent housing and Bexar County rental context.",
    href: "/locations/san-antonio/",
  },
  {
    title: "Fort Worth",
    description: "Tarrant County rentals and western Metroplex ESA practice.",
    href: "/locations/fort-worth/",
  },
];

export const LOCATIONS_PILLAR_TOC: TocItem[] = [
  { id: "statewide-overview", label: "Statewide overview" },
  { id: "rules-everywhere-tx", label: "How rules apply across Texas" },
  { id: "city-guides", label: "City guides" },
];

export const LOCATIONS_PILLAR_FAQS: FaqItem[] = [
  {
    question: "Do ESA rules change from city to city in Texas?",
    answer:
      "Fair housing and HB 4164 apply statewide. Local differences show up in rental markets, landlord practices, and municipal animal ordinances—not in whether a valid ESA letter counts.",
  },
  {
    question: "Should I use a Texas-licensed therapist for my city?",
    answer:
      "A Texas-licensed provider is the strongest choice anywhere in the state when landlords verify licensure.",
  },
];

export const LOCATIONS_BLOG_POSTS: BlogPost[] = getPostsForPillarM7(LOCATIONS_PILLAR_PATH, 4);

const PILLAR_LINK: RelatedLink = {
  label: "ESA Letters in Texas — City Guide",
  href: LOCATIONS_PILLAR_PATH,
};

export function getCityRelated(rightsHrefs: RelatedLink[]): RelatedLink[] {
  return [PILLAR_LINK, ...rightsHrefs];
}
