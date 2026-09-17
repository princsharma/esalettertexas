export type TeamMember = {
  name: string;
  credential: string;
  tagline: string;
  bio: string;
  licensedIn: string;
  focusAreas: string[];
  image: string;
};

/**
 * Photos are direct Unsplash CDN links — each downloaded and visually
 * verified (real professional headshot, no watermarks) before being added
 * here. Distinct from HERO_IMAGES.therapist (used as the "S. Alvarez"
 * letter-signature persona elsewhere on the page).
 */
export const TEAM: TeamMember[] = [
  {
    name: "M. Reyes, LPC",
    credential: "LPC",
    tagline: "Focus on Depression, Life Transitions, and CBT",
    bio: "Licensed Professional Counselor with extensive experience in community mental health and private practice. Dedicated to evidence-based, goal-oriented care for adults navigating major life shifts.",
    licensedIn: "GA, NC, SC, and VA",
    focusAreas: ["Major Depressive Disorder", "Life Transitions & Career Stress", "Cognitive Behavioral Therapy (CBT)"],
    image: "https://images.unsplash.com/photo-1548858806-e064cf9872c0?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "R. Whitfield, PsyD",
    credential: "PsyD",
    tagline: "Focus on ADHD, Adolescents, and Neurodiversity",
    bio: "Doctor of Psychology specializing in child and adolescent psychology. Neurodiversity-affirming practitioner, school consultant, and developer of executive functioning workshops for teens.",
    licensedIn: "40+ PSYPACT participating states",
    focusAreas: ["ADHD & Executive Functioning", "Adolescent Behavioral Health", "Neurodiversity-Affirming Therapy"],
    image: "https://images.unsplash.com/photo-1650091903029-fc3f1ddcb7f9?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "D. Bennett, LMFT",
    credential: "LMFT",
    tagline: "Focus on Trauma, Couples, and EMDR",
    bio: "Licensed Marriage and Family Therapist with 15+ years of clinical experience specializing in trauma recovery and relationship dynamics. Published author and advocate for somatic healing practices.",
    licensedIn: "NY, CA, TX, FL, and IL (Multi-state telehealth certified)",
    focusAreas: ["Complex PTSD & Trauma", "Couples & Family Therapy", "EMDR & Somatic Experiencing"],
    image: "https://images.unsplash.com/photo-1780733058439-b8952315e59c?auto=format&fit=crop&w=400&q=80",
  },
];
