export type TeamLicenseInfo = {
  type: string;
  fullTitle: string;
  practiceLevel: string;
  experience: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  credential: string;
  roleTitle: string;
  tagline: string;
  bio: string;
  longBio: string[];
  philosophy: string;
  licensedIn: string;
  /** Shorter list for team cards. */
  focusAreas: string[];
  /** Expanded labels for profile “Areas of focus” grid. */
  profileFocusAreas: string[];
  license: TeamLicenseInfo;
  statesServed: string[];
  image: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "robert-staaf",
    name: "Robert Staaf",
    credential: "LCSW",
    roleTitle: "Licensed Clinical Social Worker & Therapist",
    tagline: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    longBio: [
      "Robert Staaf is a Licensed Clinical Social Worker with broad multi-state licensure and years of experience delivering psychotherapy in telehealth and outpatient settings. He evaluates whether an emotional support animal is a reasonable part of a client’s care plan—without shortcuts, registries, or one-size-fits-all letters.",
      "His practice emphasizes clear documentation landlords can verify, trauma-informed interviewing, and honest clinical judgment when a letter is not appropriate. Robert is also a pet owner and understands how animals support daily functioning for many Texas renters.",
      "When you complete an assessment routed to Robert’s review queue, you receive the same standard of individualized evaluation we describe across ESA Letter Texas: license details on letterhead, dated signature, and housing-ready language aligned with Texas expectations.",
    ],
    philosophy:
      "A valid ESA letter starts with a real clinical relationship—not a checkout flow. My job is to document disability-related need clearly and ethically so your housing rights are supported by evidence, not marketing.",
    licensedIn: "30+ States",
    focusAreas: ["Anxiety", "Stress", "Emotional well-being"],
    profileFocusAreas: [
      "Anxiety",
      "Depression",
      "PTSD",
      "Stress management",
      "Mental wellness support",
      "ESA evaluations",
      "Housing ESA documentation",
    ],
    license: {
      type: "LCSW",
      fullTitle: "Licensed Clinical Social Worker",
      practiceLevel: "Clinical",
      experience: "10+ years",
    },
    statesServed: [
      "Texas",
      "Florida",
      "California",
      "New York",
      "Illinois",
      "Ohio",
      "Georgia",
      "North Carolina",
      "Virginia",
      "Arizona",
      "Colorado",
      "Washington",
      "Pennsylvania",
      "Michigan",
      "Tennessee",
    ],
    image: "/doctors/robert-staaf.webp",
  },
  {
    slug: "leslie-k-gamble",
    name: "Leslie K. Gamble",
    credential: "LCSW",
    roleTitle: "Licensed Independent Clinical Social Worker",
    tagline: "Licensed Independent Clinical Social Worker",
    bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
    longBio: [
      "Leslie K. Gamble is a Licensed Independent Clinical Social Worker with more than a decade of experience across healthcare settings. She works with adults navigating anxiety, depression, PTSD, and life transitions—often where stable housing and an emotional support animal are part of the conversation.",
      "Leslie’s evaluations focus on functional impact: sleep, relationships, work, and safety at home. She issues letters only when clinical criteria support a disability-related need and explains limitations plainly when they do not.",
      "Clients appreciate her direct communication style and letters that avoid unnecessary clinical detail while still meeting fair housing documentation expectations.",
    ],
    philosophy:
      "Compassion and rigor belong in the same room. I will never sign a letter I cannot defend in a chart review—and I will always treat your story with confidentiality and respect.",
    licensedIn: "15+ States",
    focusAreas: ["Anxiety", "Depression", "PTSD", "ESA Evaluations"],
    profileFocusAreas: [
      "Anxiety",
      "Depression",
      "PTSD",
      "Stress management",
      "Mental wellness support",
      "ESA evaluations",
      "Housing ESA documentation",
    ],
    license: {
      type: "LICSW",
      fullTitle: "Licensed Independent Clinical Social Worker",
      practiceLevel: "Clinical",
      experience: "13+ years",
    },
    statesServed: [
      "Arkansas",
      "D.C.",
      "Louisiana",
      "Mississippi",
      "Missouri",
      "Oklahoma",
      "Tennessee",
      "Texas",
      "Alabama",
      "Kentucky",
      "Kansas",
      "Nebraska",
      "Iowa",
      "Indiana",
      "Wisconsin",
    ],
    image: "/doctors/leslie-k.-gamble.webp",
  },
  {
    slug: "gaurav-patel",
    name: "Gaurav Patel, MD",
    credential: "MD",
    roleTitle: "Family Medicine Physician",
    tagline: "Family Medicine Physician",
    bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    longBio: [
      "Dr. Gaurav Patel is a board-certified family medicine physician who brings primary-care breadth to ESA evaluations when medical context matters alongside mental health needs. He has practiced in inpatient, urgent care, outpatient, and telemedicine environments.",
      "His assessments consider whole-person health—chronic conditions, sleep, mood, and how home environment affects recovery—before determining whether an emotional support animal recommendation is clinically appropriate.",
      "Letters issued under his review include standard licensure identifiers and are formatted for landlord verification without exposing protected health information beyond what housing law allows.",
    ],
    philosophy:
      "Evidence-based medicine applies to every letter I sign. If an ESA supports your treatment plan, we document that need carefully; if it does not, we discuss alternatives honestly.",
    licensedIn: "17 States",
    focusAreas: ["Depression", "Anxiety", "Chronic conditions", "Sleep concerns"],
    profileFocusAreas: [
      "Depression",
      "Anxiety",
      "Chronic conditions",
      "Sleep concerns",
      "Telemedicine",
      "Primary care",
      "ESA evaluations",
    ],
    license: {
      type: "MD",
      fullTitle: "Family Medicine Physician",
      practiceLevel: "Clinical",
      experience: "Board-certified",
    },
    statesServed: [
      "Texas",
      "Florida",
      "Georgia",
      "North Carolina",
      "South Carolina",
      "Virginia",
      "Ohio",
      "Indiana",
      "Illinois",
      "Michigan",
      "Arizona",
      "Nevada",
      "Colorado",
      "Utah",
      "New Mexico",
      "Oklahoma",
      "Louisiana",
    ],
    image: "/doctors/-dr-gaurav-patel.webp",
  },
];

export const TEAM_BY_SLUG = Object.fromEntries(TEAM.map((m) => [m.slug, m])) as Record<
  string,
  TeamMember
>;

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return TEAM_BY_SLUG[slug];
}

export function getTeamSlugs(): string[] {
  return TEAM.map((m) => m.slug);
}
