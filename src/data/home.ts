import type { FaqItem, SiloCard, BlogPost } from "@/components/sections";
import { HERO_IMAGES } from "@/data/hero-images";

// NOTE: this is currently a single-page site with no dedicated sub-pages yet.
// Every card below points at the in-page "#apply" quick-apply form as a
// placeholder destination, swap these for real routes once those pages
// (or the onboarding link) exist.
export const TOP_CONDITIONS: SiloCard[] = [
  {
    title: "Anxiety",
    description: "How an ESA can support anxiety disorders.", href: "/#apply"
  },
  {
    title: "Depression",
    description: "Qualifying for an ESA letter with depression.",
    href: "/#apply"
  },
  { title: "PTSD",
     description: "ESA support for post-traumatic stress disorder.", 
     href: "/#apply" 
    },
  { title: "Panic Disorder", 
    description: "Managing panic disorder with an emotional support animal.", href: "/#apply" },
  { title: "Social Anxiety", description: "ESA letters for social anxiety disorder.", href: "/#apply" },
  { title: "ADHD", description: "Do ADHD symptoms qualify for an ESA letter?", href: "/#apply" },
];

export const CITIES: SiloCard[] = [
  {
    title: "Austin",
    description: "ESA letter guidance and local housing rules for Austin renters.",
    href: "/#apply"
  },
  {
    title: "Houston",
    description: "ESA letter guidance and local housing rules for Houston renters.",
    href: "/#apply"
  },
  {
    title: "Dallas",
    description: "ESA letter guidance and local housing rules for Dallas renters.",
    href: "/#apply"
  },
  {
    title: "San Antonio",
    description: "ESA letter guidance and local housing rules for San Antonio renters.",
    href: "/#apply"
  },
  {
    title: "Fort Worth",
    description: "ESA letter guidance and local housing rules for Fort Worth renters.",
    href: "/#apply"
  },
  {
    title: "El Paso",
    description: "ESA letter guidance and local housing rules for El Paso renters.",
    href: "/#apply"
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

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "ESA vs. Service Animal: What's the Difference?",
    excerpt: "Know the legal differences, and exactly where each one is protected under Texas law.",
    href: "/#apply",
    category: "Guides",
    date: "Sep 2, 2026",
    image: "/images/esa vs servic animal.webp"
  },
  {
    title: "HB 4164 Explained: What Texas Renters Need to Know",
    excerpt: "A clear, plain-language breakdown of what HB 4164 actually means for Texas renters.",
    href: "/#apply",
    category: "Texas Law",
    date: "Aug 26, 2026",
    image: "/images/Hb 4164 expla.webp"
  },

  {
    title: "How to Spot an ESA Letter Scam",
    excerpt: "The red flags that separate a legitimate ESA letter from a scam, before you pay.",
    href: "/#apply",
    category: "Guides",
    date: "Aug 14, 2026",
    image: "/images/how to spot esa letter scam.webp"
  },
  {
    title: "Fair Housing Act: Your Rights as an ESA Owner",
    excerpt: "What landlords can legally ask for, and where the line gets crossed.",
    href: "/#apply",
    category: "Texas Law",
    date: "Aug 5, 2026",
    image: "/images/fair house act_1.webp"
  },
];
