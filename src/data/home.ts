import type { FaqItem, SiloCard, BlogPost } from "@/components/sections";
import { HERO_IMAGES } from "@/data/hero-images";
import { getRecentPosts } from "@/lib/blog";

// NOTE: this is currently a single-page site with no dedicated sub-pages yet.
// Every card below points at the in-page "#apply" quick-apply form as a
// placeholder destination, swap these for real routes once those pages
// (or the onboarding link) exist.
export const TOP_CONDITIONS: SiloCard[] = [
  {
    title: "Anxiety",
    description: "How an ESA can support anxiety disorders.",
    href: "/conditions/anxiety/",
  },
  {
    title: "Depression",
    description: "Qualifying for an ESA letter with depression.",
    href: "/conditions/depression/",
  },
  {
    title: "PTSD",
    description: "ESA support for post-traumatic stress disorder.",
    href: "/conditions/ptsd/",
  },
  {
    title: "Panic Disorder",
    description: "Managing panic disorder with an emotional support animal.",
    href: "/conditions/panic-disorder/",
  },
  {
    title: "Social Anxiety",
    description: "ESA letters for social anxiety disorder.",
    href: "/conditions/social-anxiety/",
  },
  {
    title: "ADHD",
    description: "Do ADHD symptoms qualify for an ESA letter?",
    href: "/conditions/adhd/",
  },
];

export const CITIES: SiloCard[] = [
  {
    title: "Austin",
    description: "ESA letter guidance and local housing rules for Austin renters.",
    href: "/locations/austin/",
  },
  {
    title: "Houston",
    description: "ESA letter guidance and local housing rules for Houston renters.",
    href: "/locations/houston/",
  },
  {
    title: "Dallas",
    description: "ESA letter guidance and local housing rules for Dallas renters.",
    href: "/locations/dallas/",
  },
  {
    title: "San Antonio",
    description: "ESA letter guidance and local housing rules for San Antonio renters.",
    href: "/locations/san-antonio/",
  },
  {
    title: "Fort Worth",
    description: "ESA letter guidance and local housing rules for Fort Worth renters.",
    href: "/locations/fort-worth/",
  },
  {
    title: "El Paso",
    description: "ESA letter guidance and local housing rules for El Paso renters.",
    href: "/locations/",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Is an ESA Letter Legal in Texas?",
    answer: "Yes. A legitimate ESA letter from a licensed mental health professional is recognized under the federal Fair Housing Act, which applies in Texas."
  },
  {
    question: "How Long Does It Take to Get My Letter?",
    answer: "Most clients receive their reviewed letter within 24-48 hours of completing the assessment."
  },
  {
    question: "Do I Need to See a Therapist in Person?",
    answer: "No. Your assessment and therapist review happen online, so there's no need for an in-person visit."
  },
  {
    question:
      "What if I Don't Qualify?",
    answer: "If a licensed therapist determines you don't qualify, you'll receive a full refund under our moneyback guarantee."
  },
  {
    question: "Does an ESA Letter Cover Flying?",
    answer: "Airlines are no longer required to accommodate ESAs under federal air travel rules, but housing protections under the Fair Housing Act still apply."
  },
  {
    question: "Is My Information Kept Private?",
    answer: "Yes. All assessments and communications are HIPAA compliant and handled confidentially."
  },
  {
    question: "Can My Landlord Deny My ESA?",
    answer: "Landlords can only deny an ESA in limited cases, such as a direct threat to safety or an undue financial burden. They can't deny it simply because of a no-pets policy."
  },
  {
    question: "What Pets Can Qualify as an ESA?",
    answer: "Most commonly dogs and cats, but other domesticated animals may qualify too, depending on your therapist's evaluation."
  },
  {
    question: "Is There an Age Requirement to Apply?",
    answer: "You must be at least 18 years old to complete the assessment and receive an ESA letter."
  },
  {
    question: "Can I Renew My ESA Letter Each Year?",
    answer: "Yes. ESA letters are typically valid for one year, and we'll remind you when it's time to renew."
  },
];

export const BLOG_POSTS: BlogPost[] = getRecentPosts(4);
