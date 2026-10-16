import type { BlogPost, FaqItem, RelatedLink, SiloCard } from "@/components/sections";
import { getPostsForPillarM7 } from "@/lib/blog";
import type { TocItem } from "@/components/sections";

export const RIGHTS_PILLAR_PATH = "/rights/";

export const RIGHTS_REVIEWER = {
  name: "Robert Staaf",
  credentials: "LCSW",
  licenseState: "Texas",
  reviewedDate: "September 2026",
  avatarSrc: "/doctors/robert-staaf.webp",
};

export const RIGHTS_CLUSTER_CARDS: SiloCard[] = [
  {
    title: "The Fair Housing Act and Your ESA",
    description: "What the FHA covers, reasonable accommodation, and HUD enforcement.",
    href: "/rights/fair-housing-act/",
  },
  {
    title: "Texas HB 4164 Explained",
    description: "Penalties for fraud, valid letters, and a renter compliance checklist.",
    href: "/rights/hb-4164-explained/",
  },
  {
    title: "ESA vs. Service Animal",
    description: "Legal definitions, access rights, and common confusion cleared up.",
    href: "/rights/esa-vs-service-animal/",
  },
  {
    title: "ESAs in No-Pet Apartments",
    description: "Why no-pet policies don't apply and how to request accommodation.",
    href: "/rights/no-pet-apartments/",
  },
  {
    title: "HOAs and Emotional Support Animals",
    description: "HOA authority limits and what to do if the HOA refuses.",
    href: "/rights/hoa-rules/",
  },
  {
    title: "Breed and Size Restrictions",
    description: "Why pet limits are overridden and the direct-threat exception.",
    href: "/rights/breed-and-size-restrictions/",
  },
  {
    title: "What to Do If a Landlord Denies Your ESA",
    description: "Valid vs invalid denials, response steps, and HUD complaints.",
    href: "/rights/landlord-denials/",
  },
  {
    title: "Pet Deposits and Fees",
    description: "What landlords cannot charge and recovering wrongful fees.",
    href: "/rights/pet-deposits-and-fees/",
  },
  {
    title: "Moving With an ESA",
    description: "Transferring rights, new lease paperwork, and timing checklist.",
    href: "/rights/moving-with-an-esa/",
  },
  {
    title: "ESAs in College Dorms",
    description: "University housing under the FHA and the Texas request process.",
    href: "/rights/college-dorm-esa/",
  },
  {
    title: "Why ESA Registries Aren't Valid",
    description: "How registries mislead renters and what documentation actually counts.",
    href: "/rights/fake-registries-warning/",
  },
];

export const RIGHTS_PILLAR_TOC: TocItem[] = [
  { id: "overview", label: "Overview" },
  { id: "fair-housing-overview", label: "Fair Housing Act overview" },
  { id: "hb-4164-overview", label: "HB 4164 overview" },
  { id: "landlord-rules", label: "What landlords can and cannot do" },
];

export const RIGHTS_PILLAR_RELATED: RelatedLink[] = [
  { label: "Fair Housing Act and Your ESA", href: "/rights/fair-housing-act/" },
  { label: "Texas HB 4164 Explained", href: "/rights/hb-4164-explained/" },
  { label: "If a Landlord Denies Your ESA", href: "/rights/landlord-denials/" },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
];

export const RIGHTS_PILLAR_FAQS: FaqItem[] = [
  {
    question: "Does Texas have its own ESA housing law besides the FHA?",
    answer:
      "Yes. Texas House Bill 4164 works alongside the federal Fair Housing Act. It limits certain documentation demands and creates state penalties for fraudulent ESA letters while leaving valid accommodation rights intact.",
  },
  {
    question: "Can a landlord in Texas refuse my ESA because of a no-pets rule?",
    answer:
      "Generally no. A no-pets policy does not override a reasonable accommodation for a disability-related need when you have valid documentation from a licensed provider.",
  },
  {
    question: "Can my landlord charge a pet deposit for an ESA?",
    answer:
      "No. Landlords cannot charge pet rent, pet deposits, or breed-based fees for a recognized assistance animal. They may still charge for actual damage the animal causes.",
  },
  {
    question: "Where do I file a housing discrimination complaint in Texas?",
    answer:
      "You can file with HUD's Office of Fair Housing and Equal Opportunity or with the Texas Workforce Commission Civil Rights Division, typically within one year of the alleged discrimination.",
  },
];

export const RIGHTS_BLOG_POSTS: BlogPost[] = getPostsForPillarM7(RIGHTS_PILLAR_PATH, 4);

export const ESA_VS_SERVICE_COMPARISON = {
  columns: ["Emotional Support Animal (ESA)", "Service Animal"],
  rows: [
    { label: "Primary purpose", values: ["Emotional support & companionship", "Perform specific tasks for a disability"] },
    { label: "Training required", values: ["No special training", "Task-trained for handler's disability"] },
    { label: "Fair Housing Act (housing)", values: [true, true] },
    { label: "Public access (stores, restaurants)", values: [false, true] },
    { label: "Air travel (current DOT rules)", values: [false, true] },
    { label: "Typical documentation", values: ["ESA letter from licensed provider", "No federal letter required; behavior proves status"] },
  ],
  caption: "Comparison of ESAs and service animals under common U.S. rules",
};
