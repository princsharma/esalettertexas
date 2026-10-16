import type { BlogPostRecord } from "./types";

const LONG = (text: string, repeat = 4) =>
  Array.from({ length: repeat }, () => text);

export const BLOG_POSTS: BlogPostRecord[] = [
  {
    slug: "esa-vs-service-animal",
    title: "ESA vs. Service Animal: What's the Difference?",
    excerpt: "Know the legal differences, and exactly where each one is protected under Texas law.",
    categorySlug: "rights-housing",
    publishedAt: "2026-09-02",
    publishedDisplay: "Sep 2, 2026",
    updatedDisplay: "Sep 15, 2026",
    image: "/images/esa vs servic animal.webp",
    siloLink: { label: "ESA vs. service animal guide", href: "/rights/esa-vs-service-animal/" },
    sections: [
      {
        id: "definitions",
        title: "Definitions that matter in housing",
        paragraphs: [
          "Emotional support animals provide comfort through their presence. They are not required to perform trained tasks. Service animals, by contrast, are individually trained to do work or perform tasks for a person with a disability.",
          "That distinction drives where each animal is protected. Fair housing law can cover both assistance animals in rental housing when documentation supports the need—but public access rules for businesses and transit generally favor task-trained service dogs.",
          ...LONG(
            "Texas renters often receive pushback when landlords confuse ESAs with pets. A valid ESA letter from a licensed clinician explains disability-related need without turning the animal into a service dog.",
            3,
          ),
        ],
      },
      {
        id: "housing",
        title: "Housing protections in Texas",
        paragraphs: [
          "Under the Fair Housing Act, landlords must consider reasonable accommodation requests for assistance animals, including ESAs, when a tenant has a disability-related need.",
          "Landlords cannot charge pet rent for a recognized assistance animal, though they may still hold tenants responsible for damage the animal causes.",
          ...LONG(
            "Document the request in writing, keep copies of your letter, and respond promptly if the property manager asks for verification from your licensed provider.",
            4,
          ),
        ],
      },
      {
        id: "next-steps",
        title: "What to do before you sign a lease",
        paragraphs: [
          "Review your lease pet policy early. Submit your accommodation letter before move-in when possible so expectations are clear.",
          "If you need a Texas-licensed evaluation, start with a confidential assessment rather than a registry site that sells instant certificates.",
        ],
      },
    ],
  },
  {
    slug: "hb-4164-explained-texas-renters",
    title: "HB 4164 Explained: What Texas Renters Need to Know",
    excerpt: "A clear, plain-language breakdown of what HB 4164 actually means for Texas renters.",
    categorySlug: "rights-housing",
    publishedAt: "2026-08-26",
    publishedDisplay: "Aug 26, 2026",
    image: "/images/Hb 4164 expla.webp",
    siloLink: { label: "HB 4164 deep dive", href: "/rights/hb-4164-explained/" },
    sections: [
      {
        id: "what-changed",
        title: "What HB 4164 changed",
        paragraphs: [
          "Texas HB 4164 targets fraudulent ESA documentation and registry scams—not the underlying right to request a reasonable accommodation with a legitimate letter.",
          "Renters with valid letters from licensed clinicians should still be able to pursue fair housing protections when they have a disability-related need for an animal.",
        ],
      },
      {
        id: "landlords",
        title: "What landlords may verify",
        paragraphs: [
          "Property managers may confirm that documentation comes from a licensed provider and relates to a disability-related need. They cannot demand unlimited medical records as a precondition.",
          "Keep letters current—most clinicians recommend annual renewal—and store PDFs on letterhead with license details visible.",
        ],
      },
    ],
  },
  {
    slug: "how-to-spot-esa-letter-scam",
    title: "How to Spot an ESA Letter Scam",
    excerpt: "The red flags that separate a legitimate ESA letter from a scam, before you pay.",
    categorySlug: "rights-housing",
    publishedAt: "2026-08-14",
    publishedDisplay: "Aug 14, 2026",
    image: "/images/how to spot esa letter scam.webp",
    siloLink: { label: "Registry scam warning", href: "/rights/fake-registries-warning/" },
    sections: [
      {
        id: "red-flags",
        title: "Red flags to walk away from",
        paragraphs: [
          "Instant letters without a clinical interview, lifetime guarantees, and official-looking registry IDs are common scam signals.",
          "Legitimate letters come from licensed mental health professionals or physicians who evaluate you individually.",
        ],
      },
    ],
  },
  {
    slug: "fair-housing-act-esa-rights",
    title: "Fair Housing Act: Your Rights as an ESA Owner",
    excerpt: "What landlords can legally ask for, and where the line gets crossed.",
    categorySlug: "rights-housing",
    publishedAt: "2026-08-05",
    publishedDisplay: "Aug 5, 2026",
    image: "/images/fair house act_1.webp",
    siloLink: { label: "Fair Housing Act guide", href: "/rights/fair-housing-act/" },
    sections: [
      {
        id: "reasonable-accommodation",
        title: "Reasonable accommodation basics",
        paragraphs: [
          "The FHA prohibits discrimination in housing based on disability and requires landlords to make reasonable accommodations, which can include waiving no-pet policies for assistance animals.",
          "You are not required to disclose your diagnosis—only that a licensed provider supports your need.",
        ],
      },
    ],
  },
  {
    slug: "do-i-qualify-esa-anxiety",
    title: "Do I Qualify for an ESA With Anxiety?",
    excerpt: "What therapists look for and how housing law fits in.",
    categorySlug: "qualifying-conditions",
    publishedAt: "2026-09-10",
    publishedDisplay: "Sep 10, 2026",
    image: "/images/cozy_living_room_pets.webp",
    siloLink: { label: "Anxiety & ESA eligibility", href: "/conditions/anxiety/" },
    sections: [
      {
        id: "clinical",
        title: "What clinicians evaluate",
        paragraphs: [
          "Anxiety must substantially limit daily activities for many clinicians to recommend an ESA as part of your care plan.",
          "Expect questions about sleep, work, relationships, and how an animal helps you function at home.",
        ],
      },
    ],
  },
  {
    slug: "ptsd-esa-letters-texas",
    title: "PTSD and ESA Letters in Texas",
    excerpt: "Evaluation criteria and landlord documentation.",
    categorySlug: "qualifying-conditions",
    publishedAt: "2026-09-03",
    publishedDisplay: "Sep 3, 2026",
    image: "/images/Therapist Review.webp",
    siloLink: { label: "PTSD condition guide", href: "/conditions/ptsd/" },
    sections: [
      {
        id: "evaluation",
        title: "Evaluation criteria",
        paragraphs: [
          "PTSD symptoms and functional impact are reviewed in context with your treatment history.",
          "Housing documentation should come from a Texas-licensed provider when possible.",
        ],
      },
    ],
  },
  {
    slug: "adhd-can-esa-help",
    title: "ADHD: Can an ESA Help?",
    excerpt: "When clinicians recommend an emotional support animal.",
    categorySlug: "qualifying-conditions",
    publishedAt: "2026-08-28",
    publishedDisplay: "Aug 28, 2026",
    image: "/images/Take the Assessment.webp",
    siloLink: { label: "ADHD & ESA guide", href: "/conditions/adhd/" },
    sections: [
      {
        id: "when-appropriate",
        title: "When an ESA may be appropriate",
        paragraphs: [
          "Routine, grounding, and companionship can support ADHD management for some clients, but letters are never automatic.",
          "Your therapist weighs benefits alongside other treatments.",
        ],
      },
    ],
  },
  {
    slug: "autism-spectrum-esas",
    title: "Autism Spectrum & ESAs",
    excerpt: "Sensory support at home and fair housing requests.",
    categorySlug: "qualifying-conditions",
    publishedAt: "2026-08-20",
    publishedDisplay: "Aug 20, 2026",
    image: "/images/woman_document_rounded.webp",
    siloLink: { label: "Autism spectrum guide", href: "/conditions/autism-spectrum/" },
    sections: [
      {
        id: "home-support",
        title: "Support at home",
        paragraphs: [
          "Animals can provide predictable companionship and sensory regulation for some autistic adults.",
          "Fair housing requests still require individualized clinical documentation.",
        ],
      },
    ],
  },
  {
    slug: "esa-letters-houston-renters",
    title: "ESA Letters in Houston: Renters’ Guide",
    excerpt: "How Houston’s rental market affects accommodation requests.",
    categorySlug: "texas-cities",
    publishedAt: "2026-09-12",
    publishedDisplay: "Sep 12, 2026",
    image: "/images/residential_lease_keys.webp",
    siloLink: { label: "Houston city guide", href: "/locations/houston/" },
    sections: [
      {
        id: "houston-market",
        title: "Houston rental context",
        paragraphs: [
          "Large apartment portfolios and HOA-managed communities are common in Houston—keep copies of every accommodation request.",
          "Texas-licensed letters reduce back-and-forth during leasing season.",
        ],
      },
    ],
  },
  {
    slug: "austin-apartments-and-esas",
    title: "Austin Apartments and ESAs",
    excerpt: "Student-heavy housing and no-pet clauses in the capital.",
    categorySlug: "texas-cities",
    publishedAt: "2026-09-05",
    publishedDisplay: "Sep 5, 2026",
    image: "/images/residential_lease_keys.webp",
    siloLink: { label: "Austin city guide", href: "/locations/austin/" },
    sections: [
      {
        id: "austin-tips",
        title: "Tips for Austin renters",
        paragraphs: [
          "Submit your letter before signing when possible, especially in competitive submarkets near campus.",
          "Know the difference between dorms, private leases, and roommate situations.",
        ],
      },
    ],
  },
  {
    slug: "building-daily-routine-with-esa",
    title: "Building a Daily Routine With Your ESA",
    excerpt: "Structure, walks, and calm cues that support mental health at home.",
    categorySlug: "esa-lifestyle-care",
    publishedAt: "2026-07-18",
    publishedDisplay: "Jul 18, 2026",
    image: "/images/cozy_living_room_pets.webp",
    siloLink: { label: "Who qualifies for an ESA in Texas", href: "/conditions/" },
    sections: [
      {
        id: "routine",
        title: "Why routine helps",
        paragraphs: [
          "Consistent feeding, walks, and quiet time with your animal can anchor your day when anxiety or depression disrupts schedules.",
          "An ESA complements therapy—it does not replace it.",
        ],
      },
    ],
  },
  {
    slug: "responding-to-landlord-esa-request",
    title: "How to Respond When a Landlord Asks for More ESA Paperwork",
    excerpt: "A calm, lawful checklist for follow-up documentation.",
    categorySlug: "landlord-tenant-guides",
    publishedAt: "2026-07-10",
    publishedDisplay: "Jul 10, 2026",
    image: "/images/your-rights-esa-bg.webp",
    siloLink: { label: "If a landlord denies your ESA", href: "/rights/landlord-denials/" },
    sections: [
      {
        id: "checklist",
        title: "Documentation checklist",
        paragraphs: [
          "Provide your signed letter on letterhead, confirm your provider’s license, and avoid sending full medical records unless truly necessary.",
          "If requests escalate, document dates and consider fair housing resources.",
        ],
      },
    ],
  },
  {
    slug: "texas-esa-policy-roundup-2026",
    title: "Texas ESA Policy Roundup: 2026",
    excerpt: "What renters should watch in enforcement and documentation trends.",
    categorySlug: "news-policy-updates",
    publishedAt: "2026-06-22",
    publishedDisplay: "Jun 22, 2026",
    image: "/images/Hb 4164 expla.webp",
    siloLink: { label: "Texas HB 4164 explained", href: "/rights/hb-4164-explained/" },
    sections: [
      {
        id: "roundup",
        title: "Statewide trends",
        paragraphs: [
          "Texas continues to emphasize legitimate clinical relationships over registry products.",
          "Pair policy news with a current letter from a licensed evaluating therapist.",
        ],
      },
    ],
  },
];
