export type ProcessStep = { title: string; description: string; image?: string };

/**
 * Photos are direct Unsplash CDN links — each downloaded and visually
 * verified (on-topic, no third-party branding) before being added here.
 */
export const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    title: "Take the Assessment",
    description:
      "Answer a short, confidential questionnaire about how your pet supports your mental health.",
    image: "/images/Take the Assessment.webp",
  },
  {
    title: "Therapist Review",
    description:
      "A licensed Texas mental health professional reviews your assessment 1-on-1.",
    image: "/images/Therapist Review.webp",
  },
  {
    title: "Receive Your Letter",
    description: "Get your signed, legitimate ESA letter by email — ready to use for housing.",
    image: "/images/Receive Your Letter.webp",
  },
];
