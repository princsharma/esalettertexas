export type TeamMember = {
  name: string;
  credential: string;
  tagline: string;
  bio: string;
  licensedIn: string;
  focusAreas: string[];
  image: string;
};


export const TEAM: TeamMember[] = [
  {
    name: "Robert Staaf",
    credential: "LCSW",
    tagline: "Licensed Clinical Social Worker",
    bio: "LCSW licensed in 30+ states with extensive psychotherapy experience. Pet owner and advocate for animal-assisted mental health treatment.",
    licensedIn: "30+ States",
    focusAreas: [
      "Anxiety", 
      "Stress",
       "Emotional well-being"],
    image:
      "/doctors/robert-staaf.webp",
  },
  {
    name: "Leslie K. Gamble",
    credential: "LT",
    tagline: "Licensed Independent Clinical Social Worker",
    bio: "Licensed therapist with 13 years of healthcare experience serving individuals, couples, and families with flexible, goal-focused care.",
    licensedIn: "15+ States",
    focusAreas:["Anxiety", "Depression", "PTSD", "ESA Evaluations"],
    image:
      "/doctors/leslie-k.-gamble.webp",
  },
  {
    name: "Gaurav Patel, MD",
    credential: "FMP",
    tagline: "Family Medicine Physician",
    bio: "Board-certified family medicine physician with experience providing evidence-based, patient-focused care across inpatient, urgent care, outpatient, and telemedicine settings.",
    licensedIn: "17 States",
    focusAreas: ["Depression", "Anxiety", "Chronic Conditions", "Sleep Concerns"],
    image:
      "/doctors/-dr-gaurav-patel.webp",
  },
];
