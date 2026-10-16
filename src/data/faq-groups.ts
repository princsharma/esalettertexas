import type { FaqItem } from "@/components/sections";

export type FaqGroup = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "getting-started",
    title: "Getting started",
    items: [
      {
        question: "How long does it take to get an ESA letter?",
        answer:
          "Many clients complete the assessment in minutes. After therapist review, letters are often delivered within 24–48 hours.",
      },
      {
        question: "Is there an age requirement to apply?",
        answer: "You must be at least 18 years old to complete the assessment and receive an ESA letter.",
      },
    ],
  },
  {
    id: "qualifying",
    title: "Qualifying & evaluation",
    items: [
      {
        question: "What conditions qualify for an ESA in Texas?",
        answer:
          "Texas does not publish a fixed diagnosis list. A licensed clinician determines whether you have a disability-related need and whether an ESA supports your care.",
      },
      {
        question: "What pets can qualify as an ESA?",
        answer:
          "Most commonly dogs and cats, but other domesticated animals may qualify depending on your therapist's evaluation.",
      },
    ],
  },
  {
    id: "housing",
    title: "Housing & landlords",
    items: [
      {
        question: "Can my landlord deny my ESA?",
        answer:
          "Landlords can only deny in limited cases, such as a direct threat to safety or undue burden. A no-pets policy alone is not a valid reason to deny a recognized assistance animal.",
      },
      {
        question: "Can landlords charge pet rent for an ESA?",
        answer:
          "Generally no—pet fees and breed restrictions tied to pets should not apply to a documented assistance animal.",
      },
    ],
  },
  {
    id: "letters",
    title: "Letters & renewal",
    items: [
      {
        question: "How long is an ESA letter valid?",
        answer: "Most letters are valid for one year. Plan to renew annually with a licensed provider.",
      },
      {
        question: "Can I renew my ESA letter each year?",
        answer: "Yes. We can remind you when it is time to renew with a current clinical evaluation.",
      },
    ],
  },
];
