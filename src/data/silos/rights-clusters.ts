import type { FaqItem, TocItem } from "@/components/sections";
import { RIGHTS_CLUSTER_CARDS, RIGHTS_PILLAR_PATH } from "./rights";

export type RightsClusterSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export type RightsCluster = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubhead: string;
  quickAnswer: string;
  toc: TocItem[];
  sections: RightsClusterSection[];
  legalCallout: {
    title: string;
    body: string;
    tone: "info" | "warning" | "danger";
  };
  faqs: FaqItem[];
  relatedSlugs: string[];
  showComparison?: boolean;
  tocImage?: { src: string; alt: string };
};

function relatedFromSlugs(slugs: string[]) {
  const byHref = new Map(RIGHTS_CLUSTER_CARDS.map((c) => [c.href, c]));
  const links = slugs
    .map((slug) => byHref.get(`/rights/${slug}/`))
    .filter(Boolean)
    .map((c) => ({ label: c!.title, href: c!.href }));
  return [{ label: "Texas ESA Laws & Housing Rights", href: RIGHTS_PILLAR_PATH }, ...links];
}

export function getClusterRelated(slugs: string[]) {
  return relatedFromSlugs(slugs);
}

export const RIGHTS_CLUSTER_SLUGS = [
  "fair-housing-act",
  "hb-4164-explained",
  "esa-vs-service-animal",
  "no-pet-apartments",
  "hoa-rules",
  "breed-and-size-restrictions",
  "landlord-denials",
  "pet-deposits-and-fees",
  "moving-with-an-esa",
  "college-dorm-esa",
  "fake-registries-warning",
] as const;

export type RightsClusterSlug = (typeof RIGHTS_CLUSTER_SLUGS)[number];

export const RIGHTS_CLUSTERS: Record<RightsClusterSlug, RightsCluster> = {
  "fair-housing-act": {
    slug: "fair-housing-act",
    metaTitle: "The Fair Housing Act and Your ESA | ESA Letter Texas",
    metaDescription:
      "How the federal Fair Housing Act protects ESA owners in Texas: reasonable accommodation, covered housing, exemptions, and HUD complaints.",
    heroTitle: "The Fair Housing Act and Your ESA",
    heroSubhead:
      "Federal housing law requires most landlords to consider reasonable accommodation requests for emotional support animals.",
    quickAnswer:
      "Under the Fair Housing Act, most rental housing must allow a reasonable accommodation for an emotional support animal when a tenant has a disability-related need and reliable documentation from a licensed provider. Landlords cannot deny an ESA solely because of a no-pets policy.",
    toc: [
      { id: "what-fha-covers", label: "What the FHA covers" },
      { id: "reasonable-accommodation", label: "Reasonable accommodation" },
      { id: "covered-vs-exempt", label: "Covered vs exempt housing" },
      { id: "enforcement", label: "Enforcement and HUD complaints" },
    ],
    tocImage: { src: "/images/fair house act_1.webp", alt: "Fair Housing Act and emotional support animals" },
    sections: [
      {
        id: "what-fha-covers",
        title: "What the FHA Covers",
        paragraphs: [
          "The Fair Housing Act (FHA) prohibits discrimination in housing based on disability, among other protected classes. For ESA owners, the practical protection is the duty to provide reasonable accommodations that allow equal use and enjoyment of a dwelling.",
          "Assistance animals—including emotional support animals—are not treated as pets under the FHA. That distinction matters for fees, breed rules, and no-pet clauses in leases.",
        ],
      },
      {
        id: "reasonable-accommodation",
        title: "Reasonable Accommodation",
        paragraphs: [
          "A reasonable accommodation is a change in rules, policies, or practices so a person with a disability can live in the home. Waiving a no-pets rule for a documented ESA is a classic example.",
          "You typically submit a request with a letter from a licensed healthcare provider confirming your disability-related need for the animal. Landlords may ask for reliable documentation but cannot demand unlimited medical records or use only their own forms as a gatekeeping tactic.",
        ],
      },
      {
        id: "covered-vs-exempt",
        title: "Covered vs Exempt Housing",
        paragraphs: [
          "Most apartments, condos, and single-family rentals managed by a company or investor are covered. Small owner-occupied buildings with four or fewer units, some single-family homes rented without a broker, and certain religious or private clubs may be exempt.",
          "If you are unsure whether your building is covered, treat the accommodation request the same way and consult HUD guidance or a fair housing attorney for edge cases.",
        ],
      },
      {
        id: "enforcement",
        title: "Enforcement and HUD Complaints",
        paragraphs: [
          "If a landlord unlawfully denies accommodation or retaliates, you can file a complaint with HUD within one year. Texas renters may also contact the Texas Workforce Commission Civil Rights Division.",
          "Keep copies of your request, the ESA letter, landlord responses, and any fees charged. Clear records strengthen an administrative complaint or later legal review.",
        ],
      },
    ],
    legalCallout: {
      title: "Legal basis",
      tone: "info",
      body: "Fair Housing Act, 42 U.S.C. § 3604 et seq.; HUD guidance on assistance animals (FHEO-2020-01). This page is general information, not legal advice.",
    },
    faqs: [
      {
        question: "Does the FHA apply to college dorms?",
        answer:
          "University-owned housing is generally subject to the FHA. On-campus accommodation processes still apply, but a no-pets dorm policy usually cannot block a valid ESA request.",
      },
      {
        question: "Can a landlord ask why I need an ESA?",
        answer:
          "They can request reliable documentation of disability-related need. They should not demand detailed diagnosis or full medical records when a compliant provider letter is supplied.",
      },
    ],
    relatedSlugs: ["hb-4164-explained", "no-pet-apartments", "landlord-denials"],
  },

  "hb-4164-explained": {
    slug: "hb-4164-explained",
    metaTitle: "Texas HB 4164 Explained | ESA Letter Texas",
    metaDescription:
      "What Texas HB 4164 says about ESA documentation, fraud penalties, and how it affects valid ESA letters for renters.",
    heroTitle: "Texas HB 4164 Explained",
    heroSubhead:
      "Texas added state-level rules for assistance-animal documentation and penalties for fraudulent letters.",
    quickAnswer:
      "Texas HB 4164 limits what landlords can demand for assistance-animal documentation and creates state penalties for knowingly using fraudulent ESA letters. Valid letters from licensed Texas providers who conduct a real evaluation remain the standard for housing accommodation.",
    toc: [
      { id: "what-the-law-says", label: "What the law says" },
      { id: "penalties-fraud", label: "Penalties for fraud" },
      { id: "valid-letters", label: "How it affects valid letters" },
      { id: "compliance-checklist", label: "Compliance checklist" },
    ],
    tocImage: { src: "/images/Hb 4164 expla.webp", alt: "Texas HB 4164 explained" },
    sections: [
      {
        id: "what-the-law-says",
        title: "What the Law Says",
        paragraphs: [
          "House Bill 4164 aligns Texas practice with federal fair housing principles while targeting abuse of fake documentation. It clarifies documentation expectations and reinforces that only legitimate clinical relationships support an ESA letter.",
          "The law does not remove FHA protections for renters with real disability-related needs. It mainly addresses bad-faith documentation and overly burdensome landlord demands that go beyond what fair housing rules allow.",
        ],
      },
      {
        id: "penalties-fraud",
        title: "Penalties for Fraud",
        paragraphs: [
          "Knowingly presenting fraudulent assistance-animal documentation can trigger state penalties, including fines. That is separate from civil fair housing claims but shows Texas takes letter mills seriously.",
          "Renters should avoid instant letters, registry bundles, and any provider who never conducts an individualized assessment.",
        ],
      },
      {
        id: "valid-letters",
        title: "How It Affects Valid Letters",
        paragraphs: [
          "A valid letter still comes from a licensed professional who evaluates you and states, on letterhead, that you have a disability-related need for the animal. License number, date, and signature remain essential.",
          "Landlords may verify licensure but cannot use HB 4164 as an excuse to reject every out-of-state license without a legitimate, case-specific reason.",
        ],
      },
      {
        id: "compliance-checklist",
        title: "Compliance Checklist",
        paragraphs: [
          "Use a licensed provider with an active Texas license when possible. Keep your letter dated within the last year. Submit a written accommodation request with the letter attached.",
          "Do not purchase registry IDs, vests, or certificates as proof—they are not required and often signal a scam.",
        ],
      },
    ],
    legalCallout: {
      title: "Texas statute",
      tone: "info",
      body: "Texas HB 4164 (88th Legislature). Read the enrolled bill text for exact definitions and penalty sections. Consult an attorney for advice on a specific dispute.",
    },
    faqs: [
      {
        question: "Did HB 4164 ban ESAs in Texas?",
        answer: "No. It regulates documentation and fraud; it does not eliminate reasonable accommodation rights under the FHA.",
      },
      {
        question: "Do I need a Texas-only therapist?",
        answer: "A Texas-licensed provider is the strongest choice for Texas housing. The evaluating clinician must be licensed in the jurisdiction where the assessment occurs.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "fake-registries-warning", "landlord-denials"],
  },

  "esa-vs-service-animal": {
    slug: "esa-vs-service-animal",
    metaTitle: "ESA vs. Service Animal | ESA Letter Texas",
    metaDescription:
      "Legal definitions, housing and public access rights, and a side-by-side comparison of ESAs and service animals in Texas.",
    heroTitle: "ESA vs. Service Animal",
    heroSubhead:
      "Both can be assistance animals, but the law treats them differently outside of housing.",
    quickAnswer:
      "An emotional support animal provides disability-related support through companionship and does not require task training. A service animal is individually trained to perform tasks for a person with a disability and has broader public access rights under the ADA.",
    toc: [
      { id: "legal-definitions", label: "Legal definitions" },
      { id: "comparison", label: "Side-by-side comparison" },
      { id: "access-rights", label: "Access rights" },
      { id: "common-confusion", label: "Common confusion" },
    ],
    tocImage: { src: "/images/esa vs servic animal.webp", alt: "ESA vs service animal" },
    showComparison: true,
    sections: [
      {
        id: "legal-definitions",
        title: "Legal Definitions",
        paragraphs: [
          "Under the ADA, a service animal is a dog (or miniature horse in limited cases) trained to perform work or tasks for a person with a disability. ESAs are not service animals under the ADA.",
          "Under the FHA, both ESAs and service animals can be assistance animals entitled to reasonable accommodation in housing when disability-related need is documented.",
        ],
      },
      {
        id: "comparison",
        title: "Side-by-Side Comparison",
        paragraphs: [
          "Use the table below when explaining your situation to a landlord or roommate. Housing rights for ESAs come from the FHA, not from ADA public-access rules.",
        ],
      },
      {
        id: "access-rights",
        title: "Access Rights",
        paragraphs: [
          "Service animals generally may accompany handlers in public businesses and government spaces where pets are banned. ESAs do not have that automatic public access.",
          "In housing, a valid ESA letter can waive pet restrictions and fees. Airlines currently treat ESAs as pets under DOT rules, while trained service dogs retain air-travel protections.",
        ],
      },
      {
        id: "common-confusion",
        title: "Common Confusion",
        paragraphs: [
          "Registry websites often blur these categories by selling ID cards for both. Neither federal housing nor ADA law requires a registry ID.",
          "Landlords sometimes wrongly demand service-animal training for an ESA. For FHA purposes, training is not the test—disability-related need and reliable documentation are.",
        ],
      },
    ],
    legalCallout: {
      title: "Legal basis",
      tone: "info",
      body: "ADA 28 C.F.R. § 35.104 (service animal definition); FHA assistance-animal guidance. Air travel: 14 C.F.R. Part 382 (service animals only).",
    },
    faqs: [
      {
        question: "Can my landlord require my ESA to be task-trained?",
        answer: "Under the FHA, they cannot impose service-animal training standards on an emotional support animal.",
      },
      {
        question: "Is a psychiatric service dog the same as an ESA?",
        answer:
          "A psychiatric service dog is task-trained and protected under the ADA in public places. An ESA is not task-trained and relies on FHA housing protections.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "fake-registries-warning"],
  },

  "no-pet-apartments": {
    slug: "no-pet-apartments",
    metaTitle: "ESAs in No-Pet Apartments | ESA Letter Texas",
    metaDescription:
      "Why no-pet policies do not block ESAs, how to request accommodation, and documentation Texas landlords may review.",
    heroTitle: "ESAs in No-Pet Apartments",
    heroSubhead: "A no-pets lease clause does not automatically ban a documented emotional support animal.",
    quickAnswer:
      "If you have a disability-related need and a valid ESA letter, landlords must consider waiving a no-pets policy as a reasonable accommodation under the FHA. They cannot refuse solely because pets are prohibited in the lease.",
    toc: [
      { id: "why-no-pet-doesnt-apply", label: "Why no-pet policies don't apply" },
      { id: "request-process", label: "How to request accommodation" },
      { id: "documentation", label: "Documentation to provide" },
    ],
    sections: [
      {
        id: "why-no-pet-doesnt-apply",
        title: "Why No-Pet Policies Don't Apply",
        paragraphs: [
          "Pet policies govern optional companions. Assistance animals are not pets under fair housing rules when tied to a disability-related need.",
          "That means breed bans, pet counts, and no-animal rules must yield unless the landlord has a valid, individualized reason to deny—such as a direct threat or substantial property damage that cannot be reduced another way.",
        ],
      },
      {
        id: "request-process",
        title: "How to Request Accommodation",
        paragraphs: [
          "Send a dated written request to the landlord or property manager. State that you are requesting a reasonable accommodation for an emotional support animal related to a disability.",
          "Attach your ESA letter and keep proof of delivery (email read receipt, certified mail, or portal upload). Follow up in writing if you do not receive a response within a reasonable time.",
        ],
      },
      {
        id: "documentation",
        title: "Documentation to Provide",
        paragraphs: [
          "Provide a letter from a licensed healthcare provider confirming disability-related need. You do not need to share your full diagnosis or medical file.",
          "Optional: vaccination records or local licensing if required for all animals in the city—but not as a precondition to approve the accommodation itself.",
        ],
      },
    ],
    legalCallout: {
      title: "Fair housing reminder",
      tone: "info",
      body: "HUD FHEO guidance: landlords must evaluate accommodation requests even when leases prohibit pets. 42 U.S.C. § 3604(f)(3)(B).",
    },
    faqs: [
      {
        question: "Should I tell my landlord before I move in?",
        answer: "Request accommodation as early as possible—before signing if you can—so move-in is smooth. You may also request after move-in when need arises.",
      },
      {
        question: "Can they meet me in person to 'verify' the ESA?",
        answer: "They cannot require you to disclose medical details in person beyond reliable documentation. Focus on written, compliant letters.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "landlord-denials", "pet-deposits-and-fees"],
  },

  "hoa-rules": {
    slug: "hoa-rules",
    metaTitle: "HOAs and Emotional Support Animals | ESA Letter Texas",
    metaDescription:
      "HOA pet limits, accommodation requests, and what to do when a Texas HOA refuses your ESA.",
    heroTitle: "HOAs and Emotional Support Animals",
    heroSubhead: "Homeowners associations must follow fair housing rules when enforcing pet restrictions.",
    quickAnswer:
      "When an HOA controls rental or ownership rules that affect housing, the FHA generally requires it to grant reasonable accommodations for ESAs with valid documentation, even if bylaws ban pets or certain breeds.",
    toc: [
      { id: "hoa-authority", label: "HOA authority limits" },
      { id: "requesting-accommodation", label: "Requesting accommodation" },
      { id: "if-hoa-refuses", label: "If the HOA refuses" },
    ],
    sections: [
      {
        id: "hoa-authority",
        title: "HOA Authority Limits",
        paragraphs: [
          "HOAs can enforce community rules, but they cannot use those rules to discriminate against residents with disabilities. Pet caps, weight limits, and breed lists must give way to a reasonable ESA accommodation unless a specific exception applies.",
          "Condo boards sometimes confuse HOA policy with landlord policy. The same FHA analysis applies: assistance animals are not pets for fee and restriction purposes.",
        ],
      },
      {
        id: "requesting-accommodation",
        title: "Requesting Accommodation",
        paragraphs: [
          "Submit your request to the HOA board or management company in writing, mirroring what you would send a landlord. Include your provider letter and reference your right to reasonable accommodation.",
          "Ask for written approval to keep the animal and to waive any pet fees tied to the accommodation.",
        ],
      },
      {
        id: "if-hoa-refuses",
        title: "If the HOA Refuses",
        paragraphs: [
          "Document the denial and any reasons given. If the board cites policy without addressing your disability-related need, respond in writing citing the FHA and offer to provide updated documentation if needed.",
          "Escalate to HUD or TWC Civil Rights, or consult a fair housing attorney if fines or liens are threatened.",
        ],
      },
    ],
    legalCallout: {
      title: "Legal basis",
      tone: "info",
      body: "FHA applies to associations that qualify as housing providers. See HUD/DOJ joint statements on reasonable accommodations under the FHA.",
    },
    faqs: [
      {
        question: "Does the HOA need to approve my ESA before my landlord?",
        answer: "If both govern your dwelling, notify each party that must enforce pet rules. Many renters only deal with the landlord, but condo owners often need HOA approval too.",
      },
    ],
    relatedSlugs: ["breed-and-size-restrictions", "landlord-denials", "fair-housing-act"],
  },

  "breed-and-size-restrictions": {
    slug: "breed-and-size-restrictions",
    metaTitle: "Breed and Size Restrictions for ESAs | ESA Letter Texas",
    metaDescription:
      "Why breed and weight limits usually do not apply to ESAs, direct-threat exceptions, and handling landlord pushback.",
    heroTitle: "Breed and Size Restrictions",
    heroSubhead: "Insurance breed lists and weight caps cannot automatically block a reasonable ESA accommodation.",
    quickAnswer:
      "Landlords and HOAs cannot apply breed or size restrictions to an emotional support animal unless they prove the specific animal poses a direct threat or would cause substantial physical damage that cannot be mitigated.",
    toc: [
      { id: "why-overridden", label: "Why restrictions are overridden" },
      { id: "direct-threat", label: "Exceptions: direct threat" },
      { id: "handling-pushback", label: "Handling pushback" },
    ],
    sections: [
      {
        id: "why-overridden",
        title: "Why Restrictions Are Overridden",
        paragraphs: [
          "Blanket breed bans (often aimed at pit-bull-type dogs) are policy rules, not individualized safety findings. The FHA expects landlords to assess the actual animal's conduct.",
          "Size and weight limits serve similar pet-policy goals. Assistance animals are exempt from those caps when accommodation is granted.",
        ],
      },
      {
        id: "direct-threat",
        title: "Exceptions: Direct Threat",
        paragraphs: [
          "A denial must rely on objective evidence that the particular animal threatened harm or caused serious damage. Fear of a breed alone is not enough.",
          "Landlords may require vaccination, licensing, or leash rules that apply equally to all residents as long as they do not frustrate the accommodation.",
        ],
      },
      {
        id: "handling-pushback",
        title: "Handling Pushback",
        paragraphs: [
          "If denied based on breed, reply in writing requesting the specific, individualized reason and citing HUD guidance on breed restrictions.",
          "Offer references, training records, or a meet-and-greet if you choose—but you are not required to prove breed innocence beyond normal pet behavior expectations.",
        ],
      },
    ],
    legalCallout: {
      title: "HUD guidance",
      tone: "warning",
      body: "HUD has stated that breed, size, and weight restrictions cannot be applied to assistance animals in lieu of an individualized assessment. Document any breed-based denial.",
    },
    faqs: [
      {
        question: "Can insurance excuses deny my ESA?",
        answer:
          "Increased insurance cost alone is rarely a successful undue-burden defense. Landlords must explore reasonable alternatives before denying.",
      },
    ],
    relatedSlugs: ["no-pet-apartments", "landlord-denials", "hoa-rules"],
  },

  "landlord-denials": {
    slug: "landlord-denials",
    metaTitle: "What to Do If a Landlord Denies Your ESA | ESA Letter Texas",
    metaDescription:
      "Valid vs invalid denial reasons, response steps, filing HUD or TWC complaints, and a sample reply template.",
    heroTitle: "What to Do If a Landlord Denies Your ESA",
    heroSubhead: "Push back with clear records when a denial ignores fair housing rules.",
    quickAnswer:
      "If a landlord denies your ESA without an individualized reason—such as direct threat, undue burden, or unreliable documentation—respond in writing, cite the FHA, and consider a HUD or Texas Workforce Commission complaint while keeping all correspondence.",
    toc: [
      { id: "valid-invalid-denials", label: "Valid vs invalid denial reasons" },
      { id: "response-steps", label: "Response steps" },
      { id: "filing-complaint", label: "Filing a HUD or TWC complaint" },
      { id: "sample-response", label: "Sample response template" },
    ],
    sections: [
      {
        id: "valid-invalid-denials",
        title: "Valid vs Invalid Denial Reasons",
        paragraphs: [
          "Invalid: no pets allowed, breed ban, deposit not paid, registry ID missing, or letter from online mill without evaluation.",
          "Potentially valid: specific animal caused damage or threats that cannot be mitigated, or documentation is clearly not from a licensed provider. Even then, landlords should allow you to cure deficient paperwork.",
        ],
      },
      {
        id: "response-steps",
        title: "Response Steps",
        paragraphs: [
          "Reply within a few days. Restate your request, attach a compliant letter, and ask the landlord to identify the legal basis for denial in writing.",
          "Avoid emotional arguments; stick to dates, attachments, and FHA/HB 4164 citations. Copy any property management supervisor.",
        ],
      },
      {
        id: "filing-complaint",
        title: "Filing a HUD or TWC Complaint",
        paragraphs: [
          "HUD accepts housing discrimination complaints online or by mail, generally within one year. TWC Civil Rights Division handles state fair housing claims in parallel for many cases.",
          "Include your lease, accommodation request, letter, denial notice, and any retaliatory threats (eviction notices, fee assessments).",
        ],
      },
      {
        id: "sample-response",
        title: "Sample Response Template",
        paragraphs: [
          "Subject: Re: Reasonable accommodation request for emotional support animal",
          "Dear [Manager], I am responding to your denial dated [date]. Under the Fair Housing Act and Texas law, I requested a reasonable accommodation for my emotional support animal related to a disability. I have attached a letter from [Provider], [license type] #[number], licensed in [state]. Please identify the specific, individualized reason for denial as required by HUD guidance, or confirm approval and waiver of pet fees. Sincerely, [Name] [Contact]",
        ],
      },
    ],
    legalCallout: {
      title: "Enforcement",
      tone: "info",
      body: "HUD complaint portal: hud.gov/fairhousing. Texas Workforce Commission Civil Rights Division accepts housing discrimination filings. Deadlines apply—act promptly.",
    },
    faqs: [
      {
        question: "Can I stay while a complaint is pending?",
        answer:
          "Retaliatory eviction after a good-faith accommodation request may itself violate the FHA. Seek legal advice quickly if an eviction is filed.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "pet-deposits-and-fees", "hb-4164-explained"],
  },

  "pet-deposits-and-fees": {
    slug: "pet-deposits-and-fees",
    metaTitle: "Pet Deposits and Fees for ESAs | ESA Letter Texas",
    metaDescription:
      "What landlords cannot charge for ESAs, allowable damage charges, and recovering wrongly charged pet fees.",
    heroTitle: "Pet Deposits and Fees",
    heroSubhead: "Assistance animals are not pets for fee purposes under federal fair housing rules.",
    quickAnswer:
      "Landlords may not charge pet rent, pet deposits, or breed-based fees for a recognized emotional support animal. They may charge for actual damage the animal causes, the same as any tenant property damage.",
    toc: [
      { id: "cannot-charge", label: "What cannot be charged" },
      { id: "can-charge", label: "What can be charged (damages)" },
      { id: "recovering-fees", label: "Recovering wrongly charged fees" },
    ],
    sections: [
      {
        id: "cannot-charge",
        title: "What Cannot Be Charged",
        paragraphs: [
          "Pet deposits, monthly pet rent, non-refundable pet fees, and cleaning fees applied only because an animal is present are not allowed for ESAs.",
          "If your lease auto-adds pet fees at move-in, send your accommodation letter before signing or request a lease amendment removing those charges.",
        ],
      },
      {
        id: "can-charge",
        title: "What Can Be Charged (Damages)",
        paragraphs: [
          "Landlords may deduct for chew damage, stains, or other harm beyond normal wear, provided they document costs the same way as for any tenant without an ESA.",
          "General 'deep clean' surcharges applied to every pet owner may not be applied to assistance animals unless tied to proven extra damage.",
        ],
      },
      {
        id: "recovering-fees",
        title: "Recovering Wrongly Charged Fees",
        paragraphs: [
          "Request a written refund citing the FHA. If fees were taken from your deposit, dispute itemized deductions in writing within any lease deadline.",
          "Preserve lease addenda and payment records for a HUD or small-claims action if the landlord refuses repayment.",
        ],
      },
    ],
    legalCallout: {
      title: "Fair housing fees rule",
      tone: "info",
      body: "HUD guidance: housing providers may not charge fees or deposits for assistance animals as pets. 42 U.S.C. § 3604(f)(3)(B).",
    },
    faqs: [
      {
        question: "Can they charge a one-time sanitation fee?",
        answer: "Flat pet sanitation fees tied to animal status—not proven damage—are generally inconsistent with FHA treatment of assistance animals.",
      },
    ],
    relatedSlugs: ["no-pet-apartments", "landlord-denials", "moving-with-an-esa"],
  },

  "moving-with-an-esa": {
    slug: "moving-with-an-esa",
    metaTitle: "Moving With an ESA in Texas | ESA Letter Texas",
    metaDescription:
      "Transferring ESA housing rights, new lease paperwork, and a timing checklist for Texas moves.",
    heroTitle: "Moving With an ESA",
    heroSubhead: "Your accommodation rights travel with you—plan paperwork before boxes ship.",
    quickAnswer:
      "When you move, submit a new reasonable accommodation request and current ESA letter to the next landlord before move-in. Federal protections follow you to covered housing; timing and documentation prevent last-minute denials.",
    toc: [
      { id: "transferring-rights", label: "Transferring rights" },
      { id: "new-lease-paperwork", label: "New lease paperwork" },
      { id: "timing-checklist", label: "Timing checklist" },
    ],
    sections: [
      {
        id: "transferring-rights",
        title: "Transferring Rights",
        paragraphs: [
          "There is no ESA 'registration' that transfers automatically. Each housing provider evaluates its own accommodation request.",
          "Your existing letter remains valid if dated within the last year and the provider relationship is current. Renew before a move if it is close to expiring.",
        ],
      },
      {
        id: "new-lease-paperwork",
        title: "New Lease Paperwork",
        paragraphs: [
          "Send the letter and request to leasing staff, not just the showing agent. Ask for written confirmation that pet restrictions and fees are waived.",
          "Review the lease for hidden pet addenda and remove conflicting language before signing.",
        ],
      },
      {
        id: "timing-checklist",
        title: "Timing Checklist",
        paragraphs: [
          "4–6 weeks out: confirm letter date and schedule renewal if needed. 2–3 weeks out: submit accommodation request with application. Move-in week: keep copies in your phone and email.",
          "Update microchip and city license addresses if your municipality requires them for all dogs and cats.",
        ],
      },
    ],
    legalCallout: {
      title: "Planning note",
      tone: "info",
      body: "Interstate moves may involve different state licensing questions for your provider. A Texas-licensed evaluator simplifies Texas rentals.",
    },
    faqs: [
      {
        question: "Do I need a new letter for every apartment?",
        answer: "You need a new accommodation request each time, but you can reuse the same letter if it is still valid and accurate.",
      },
    ],
    relatedSlugs: ["no-pet-apartments", "college-dorm-esa", "pet-deposits-and-fees"],
  },

  "college-dorm-esa": {
    slug: "college-dorm-esa",
    metaTitle: "ESAs in College Dorms | ESA Letter Texas",
    metaDescription:
      "University housing under the FHA, accommodation request steps, and notes for major Texas universities.",
    heroTitle: "ESAs in College Dorms",
    heroSubhead: "On-campus housing must consider ESA requests like other covered dwellings.",
    quickAnswer:
      "University-owned dorms and apartments are generally covered by the Fair Housing Act. Students with disability-related need and provider documentation should use the school's disability services process to request ESA accommodation.",
    toc: [
      { id: "university-housing-fha", label: "University housing under the FHA" },
      { id: "request-process", label: "Request process" },
      { id: "major-tx-universities", label: "Major Texas universities" },
    ],
    sections: [
      {
        id: "university-housing-fha",
        title: "University Housing Under the FHA",
        paragraphs: [
          "Courts and HUD have treated on-campus residence halls as dwellings subject to reasonable accommodation duties. Roommate assignments and shared spaces are handled through the school's process, not by ignoring the request.",
          "Off-campus private apartments leased directly from a landlord follow the same FHA rules as any rental.",
        ],
      },
      {
        id: "request-process",
        title: "Request Process",
        paragraphs: [
          "Contact disability services early—ideally after admission and before housing assignments lock. Provide your provider letter and complete any housing forms the school requires.",
          "Schools may consider roommates' allergies in balancing accommodations, but they cannot deny without an interactive process.",
        ],
      },
      {
        id: "major-tx-universities",
        title: "Major Texas Universities",
        paragraphs: [
          "Large public universities—including UT Austin, Texas A&M, Texas State, University of Houston, and Texas Tech—maintain disability services offices with published assistance-animal policies. Always use the official portal for your campus.",
          "Policies change each academic year; verify deadlines for housing appeals and documentation updates.",
        ],
      },
    ],
    legalCallout: {
      title: "Campus policies",
      tone: "info",
      body: "School-specific rules must still comply with the FHA. If a public university denies without process, federal complaint options may apply in addition to internal appeals.",
    },
    faqs: [
      {
        question: "Can a dorm ban all animals including ESAs?",
        answer: "Blanket bans conflicting with confirmed disability-related need are generally inconsistent with FHA reasonable accommodation requirements.",
      },
    ],
    relatedSlugs: ["fair-housing-act", "no-pet-apartments", "moving-with-an-esa"],
  },

  "fake-registries-warning": {
    slug: "fake-registries-warning",
    metaTitle: "Why ESA Registries Aren't Valid | ESA Letter Texas",
    metaDescription:
      "How ESA registry sites mislead Texas renters, what documentation is actually required, and how to verify a legitimate provider.",
    heroTitle: "Why ESA Registries Aren't Valid",
    heroSubhead: "Certificates and ID cards from registry websites are not proof of housing rights.",
    quickAnswer:
      "No federal or Texas housing law recognizes online ESA registries, ID cards, or vests as proof of status. Landlords need a letter from a licensed healthcare provider who has evaluated you—not a paid registry entry.",
    toc: [
      { id: "scam-warning", label: "Scam warning" },
      { id: "how-registries-mislead", label: "How registries mislead" },
      { id: "what-is-required", label: "What is actually required" },
      { id: "verify-provider", label: "How to verify a provider" },
    ],
    tocImage: { src: "/images/how to spot esa letter scam.webp", alt: "ESA registry scam warning" },
    sections: [
      {
        id: "scam-warning",
        title: "Scam Warning",
        paragraphs: [
          "Registry sites often mimic government portals. They sell lists, certificates, and gear that imply legal status without a clinical evaluation.",
          "Using fraudulent documentation can violate Texas HB 4164 and destroy credibility with legitimate landlords.",
        ],
      },
      {
        id: "how-registries-mislead",
        title: "How Registries Mislead",
        paragraphs: [
          "They claim 'registration' satisfies landlords or airlines. In housing, only reliable provider letters matter. In public places, ESAs have no ADA access rights regardless of registry.",
          "Some sites also sell instant letters from unnamed clinicians—another red flag for property managers trained on HB 4164.",
        ],
      },
      {
        id: "what-is-required",
        title: "What Is Actually Required",
        paragraphs: [
          "A letter on professional letterhead from a licensed mental health professional or physician who has assessed you, with license details, date, and signature.",
          "See our requirements guide for the full checklist landlords expect in Texas.",
        ],
      },
      {
        id: "verify-provider",
        title: "How to Verify a Provider",
        paragraphs: [
          "Look up the license on the Texas behavioral health or medical board website. Confirm the name on the letter matches an active license.",
          "Avoid any service that guarantees approval, skips an interview, or bundles a registry ID as proof.",
        ],
      },
    ],
    legalCallout: {
      title: "Scam alert",
      tone: "danger",
      body: "Registry certificates are not recognized under the FHA or Texas HB 4164. Paying for a registry does not create housing rights and may expose you to fraud penalties if misrepresented to a landlord.",
    },
    faqs: [
      {
        question: "My landlord asked for registry proof—what do I send?",
        answer: "Send your compliant provider letter and cite HUD guidance that registries are not required. Offer license verification instead.",
      },
    ],
    relatedSlugs: ["hb-4164-explained", "landlord-denials", "fair-housing-act"],
  },
};

export function getRightsCluster(slug: string): RightsCluster | undefined {
  return RIGHTS_CLUSTERS[slug as RightsClusterSlug];
}
