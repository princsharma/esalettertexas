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
    image: "https://images.unsplash.com/photo-1601758003122-53c40e686a19?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Therapist Review",
    description:
      "A licensed Texas mental health professional reviews your assessment 1-on-1.",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Receive Your Letter",
    description:
      "Get your signed, legitimate ESA letter by email — ready to use for housing.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
  },

];
