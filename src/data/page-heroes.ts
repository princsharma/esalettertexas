/**
 * Topic-matched hero background photos (full-bleed behind brand mesh).
 * Local assets under /public/images; home also uses a distinct Unsplash backdrop.
 */
import { HERO_IMAGES } from "@/data/hero-images";
import { CONDITION_CLUSTERS, type ConditionClusterSlug } from "@/data/silos/conditions-clusters";
import { RIGHTS_CLUSTERS, type RightsClusterSlug } from "@/data/silos/rights-clusters";

export const PAGE_HERO = {
  /** Home — full hero; different from inner pages */
  home: HERO_IMAGES.dog,
  rights: "/images/your-rights-esa-bg.webp",
  conditions: "/images/Common Conditions That Qualify for an ESA.webp",
  locations: "/images/cozy_living_room_pets.webp",
  city: "/images/residential_lease_keys.webp",
  requirements: "/images/woman_document_rounded.webp",
  cost: "/images/Pricing.webp",
  sampleLetter: "/images/Therapist Review.webp",
  renewal: "/images/Receive Your Letter.webp",
  whatIsEsa: "/images/cozy_living_room_pets.webp",
  howToGet: "/images/Take the Assessment.webp",
  howItWorks: "/images/Therapist Review.webp",
  faq: "/images/fair house_act_2.webp",
  aboutTherapists: "/images/Therapist Review.webp",
  blog: "/images/how to spot esa letter scam.webp",
  applyNow: "/images/Take the Assessment.webp",
  contact: "/images/Therapist Review.webp",
  legal: "/images/woman_document_rounded.webp",
} as const;

export function getRightsClusterHeroBackground(slug: string): string {
  const cluster = RIGHTS_CLUSTERS[slug as RightsClusterSlug];
  return cluster?.tocImage?.src ?? PAGE_HERO.rights;
}

export function getConditionClusterHeroBackground(slug: string): string {
  const cluster = CONDITION_CLUSTERS[slug as ConditionClusterSlug];
  return cluster?.tocImage?.src ?? PAGE_HERO.conditions;
}
