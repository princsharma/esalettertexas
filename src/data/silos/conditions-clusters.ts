import type { FaqItem, TocItem } from "@/components/sections";
import type { ClusterSection } from "@/components/templates/SiloClusterPage";

export type ConditionCluster = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubhead: string;
  quickAnswer: string;
  toc: TocItem[];
  sections: ClusterSection[];
  legalCallout: {
    title: string;
    body: string;
    tone: "info" | "warning" | "danger";
  };
  faqs: FaqItem[];
  relatedSlugs: string[];
  tocImage?: { src: string; alt: string };
};

function buildSections(
  conditionName: string,
  overview: string[],
  qualify: string[],
  esaHelps: string[],
  therapistAsk: string[],
): ClusterSection[] {
  return [
    {
      id: "overview",
      title: `${conditionName} and ESA Eligibility`,
      paragraphs: overview,
    },
    {
      id: "how-qualifies-law",
      title: "How This Condition Qualifies Under Federal/Texas Law",
      paragraphs: qualify,
    },
    {
      id: "how-esa-helps",
      title: `How an ESA Helps With ${conditionName}`,
      paragraphs: esaHelps,
    },
    {
      id: "therapist-will-ask",
      title: "What the Therapist Will Ask",
      paragraphs: therapistAsk,
    },
  ];
}

function tocFromSections(sections: ClusterSection[]): TocItem[] {
  return sections.map((s) => ({ id: s.id, label: s.title }));
}

const SHARED_QUALIFY = [
  "Federal fair housing law protects renters who need reasonable accommodations for disability-related assistance animals, including emotional support animals, when documentation supports the need.",
  "Texas does not publish a list of approved diagnoses. HB 4164 focuses on legitimate letters—not on excluding specific conditions. Eligibility turns on whether your symptoms substantially limit major life activities and whether an ESA is part of your care.",
];

const SHARED_THERAPIST = [
  "Expect questions about how long you have experienced symptoms, how they affect sleep, work, relationships, or leaving home, and what treatments you have tried.",
  "The clinician may ask why you believe an animal helps, daily routines with your pet, and housing stress tied to pet policies. Answer honestly; the goal is an individualized clinical judgment, not a checklist diagnosis.",
];

const LEGAL_CALLOUT = {
  title: "Clinical and legal note",
  tone: "info" as const,
  body: "Only a licensed professional can determine eligibility after evaluation. Fair Housing Act, 42 U.S.C. § 3604; Texas HB 4164 addresses documentation fraud—not a ban on ESAs. This is general information, not medical or legal advice.",
};

function cluster(
  slug: string,
  conditionName: string,
  metaDescription: string,
  heroSubhead: string,
  quickAnswer: string,
  overview: string[],
  esaHelps: string[],
  faqs: FaqItem[],
  relatedSlugs: string[],
  qualify: string[] = SHARED_QUALIFY,
  therapistAsk: string[] = SHARED_THERAPIST,
): ConditionCluster {
  const sections = buildSections(
    conditionName,
    overview,
    qualify,
    esaHelps,
    therapistAsk,
  );
  const heroTitle = `Can You Get an ESA Letter for ${conditionName} in Texas?`;
  return {
    slug,
    metaTitle: `${heroTitle} | ESA Letter Texas`,
    metaDescription,
    heroTitle,
    heroSubhead,
    quickAnswer,
    toc: tocFromSections(sections),
    sections,
    legalCallout: LEGAL_CALLOUT,
    faqs,
    relatedSlugs,
    tocImage: {
      src: "/images/Common Conditions That Qualify for an ESA.webp",
      alt: `${conditionName} and emotional support animal eligibility`,
    },
  };
}

export const CONDITION_CLUSTER_SLUGS = [
  "anxiety",
  "depression",
  "ptsd",
  "bipolar-disorder",
  "panic-disorder",
  "social-anxiety",
  "ocd",
  "adhd",
  "autism-spectrum",
  "eating-disorders",
] as const;

export type ConditionClusterSlug = (typeof CONDITION_CLUSTER_SLUGS)[number];

export const CONDITION_CLUSTERS: Record<ConditionClusterSlug, ConditionCluster> = {
  anxiety: cluster(
    "anxiety",
    "Anxiety",
    "How generalized and social anxiety may support an ESA letter in Texas, what therapists evaluate, and housing rights with valid documentation.",
    "When anxiety limits daily life, a licensed therapist may recommend an emotional support animal as part of your care plan.",
    "Anxiety can qualify for an ESA letter when a licensed clinician finds it substantially limits daily activities and that an emotional support animal provides disability-related support. Texas and federal housing law then may require reasonable accommodation with valid documentation.",
    [
      "Anxiety disorders—including generalized anxiety, social anxiety, and related conditions—are among the most common reasons Texans seek ESA evaluations.",
      "Approval depends on symptom severity, functional impact, and whether an animal is clinically appropriate—not on self-diagnosis or online quizzes.",
    ],
    [
      "Animals can lower arousal through companionship, routine, and grounding during anxious moments at home.",
      "For many renters, the primary benefit is stable housing: an ESA letter can support waiving no-pet rules that would otherwise force a choice between housing and their animal.",
    ],
    [
      {
        question: "Is anxiety alone enough for an ESA?",
        answer: "Anxiety must substantially affect daily life and the therapist must agree an ESA fits your treatment plan.",
      },
      {
        question: "Will my therapist need my full psychiatric history?",
        answer: "They need enough information to make a clinical decision, but the ESA letter itself does not disclose your full records to landlords.",
      },
    ],
    ["depression", "panic-disorder", "social-anxiety"],
  ),

  depression: cluster(
    "depression",
    "Depression",
    "ESA letters for depression in Texas: clinical criteria, therapist questions, and fair housing documentation.",
    "Depression that limits daily functioning may be evaluated for an emotional support animal recommendation.",
    "Depression may support an ESA letter when a licensed provider determines it limits major life activities and that an emotional support animal helps your treatment plan. Valid letters unlock FHA reasonable accommodation in most Texas rentals.",
    [
      "Major depressive disorder and persistent depressive symptoms are frequently evaluated for ESA suitability.",
      "Therapists look for functional impact—motivation, sleep, isolation—not just a diagnosis on paper.",
    ],
    [
      "Companionship and routine care of an animal can counter isolation and support daily structure.",
      "Housing stability reduces stress that often worsens depressive episodes when pet restrictions threaten move-outs or surrenders.",
    ],
    [
      {
        question: "Can an ESA replace antidepressants?",
        answer: "No. An ESA is an adjunct to your overall plan, not a substitute for medication or therapy.",
      },
    ],
    ["anxiety", "ptsd", "adhd"],
  ),

  ptsd: cluster(
    "ptsd",
    "PTSD",
    "PTSD and ESA letters in Texas: qualification, therapist evaluation, and housing accommodation.",
    "Post-traumatic stress symptoms that affect housing and daily life may be evaluated for ESA support.",
    "PTSD can qualify for an ESA letter when a licensed clinician documents disability-related need and that an emotional support animal supports your care. Federal fair housing rules may require landlords to grant reasonable accommodation with reliable documentation.",
    [
      "PTSD symptoms such as hypervigilance, sleep disruption, and avoidance can be discussed during a confidential evaluation.",
      "Service dogs and ESAs serve different roles; ESAs do not require task training but rely on provider letters for housing.",
    ],
    [
      "Animals may provide calming presence, sleep support, and safer feelings at home after trauma triggers.",
      "Stable housing with your animal avoids re-traumatizing separations driven by no-pet lease clauses.",
    ],
    [
      {
        question: "Is PTSD treated differently from anxiety for ESAs?",
        answer: "The same individualized clinical and housing framework applies; diagnosis labels matter less than functional impact and provider judgment.",
      },
    ],
    ["anxiety", "depression", "panic-disorder"],
  ),

  "panic-disorder": cluster(
    "panic-disorder",
    "Panic Disorder",
    "Panic disorder and ESA eligibility in Texas: legal context, benefits, and the therapist interview.",
    "Recurrent panic symptoms that limit functioning may be assessed for an emotional support animal.",
    "Panic disorder may qualify for an ESA letter if a licensed therapist finds it substantially limits daily life and that an emotional support animal supports your treatment. Texas renters can use valid letters to request FHA housing accommodations.",
    [
      "Panic attacks and anticipatory fear about attacks can restrict work, travel, and leaving home.",
      "An evaluation explores frequency, triggers, and coping strategies—not whether you can 'tough it out' without support.",
    ],
    [
      "A trusted animal at home can ease recovery after attacks and reduce loneliness tied to avoidance.",
      "Housing accommodation prevents adding pet stress to health stress when leases ban animals.",
    ],
    [
      {
        question: "Can an ESA come everywhere with me for panic attacks?",
        answer: "ESAs do not have public access rights like service dogs; housing is the primary protected context under the FHA.",
      },
    ],
    ["anxiety", "social-anxiety", "ptsd"],
  ),

  "social-anxiety": cluster(
    "social-anxiety",
    "Social Anxiety",
    "Social anxiety disorder and ESA letters: Texas qualification, housing law, and clinical evaluation.",
    "Social anxiety that impairs home life and relationships may be evaluated for ESA support.",
    "Social anxiety disorder can support an ESA letter when a licensed provider confirms disability-related need and that an emotional support animal aids your care plan. Valid documentation triggers reasonable accommodation rights in most Texas rental housing.",
    [
      "Fear of judgment, avoidance of gatherings, and isolation at home are common themes in evaluations.",
      "The focus is whether an animal helps you function at home—not whether it fixes every social situation.",
    ],
    [
      "Nonjudgmental companionship at home can ease loneliness when social avoidance is severe.",
      "Pet policies are a frequent housing barrier; an ESA letter addresses landlord rules, not crowds in public.",
    ],
    [
      {
        question: "Will an ESA cure social anxiety?",
        answer: "No. It is one support tool the therapist may recommend alongside therapy or other treatment.",
      },
    ],
    ["anxiety", "panic-disorder", "depression"],
  ),

  adhd: cluster(
    "adhd",
    "ADHD",
    "ADHD and ESA letters in Texas: when clinicians approve, legal context, and housing documentation.",
    "ADHD symptoms that disrupt daily routines may be considered during an ESA evaluation.",
    "ADHD may qualify for an ESA letter when a licensed clinician finds related symptoms substantially limit daily activities and that an emotional support animal supports your treatment. Texas housing providers must consider reasonable accommodation with compliant documentation.",
    [
      "Inattention, impulsivity, and executive-function strain can affect maintaining a stable home.",
      "Not every ADHD diagnosis leads to an ESA; the therapist weighs whether an animal meaningfully supports your plan.",
    ],
    [
      "Structure from caring for an animal and calming interaction can complement ADHD coping strategies at home.",
      "Housing accommodation helps keep that support consistent without pet-restrictive lease conflicts.",
    ],
    [
      {
        question: "Is ADHD widely accepted for ESAs?",
        answer: "It is evaluated case by case based on functional impact and clinical judgment, not automatic approval.",
      },
    ],
    ["anxiety", "depression", "ptsd"],
  ),

  "bipolar-disorder": cluster(
    "bipolar-disorder",
    "Bipolar Disorder",
    "Bipolar disorder and ESA evaluations in Texas: mood stability, housing law, and therapist questions.",
    "Mood episodes that disrupt housing stability may be reviewed for ESA suitability.",
    "Bipolar disorder can support an ESA letter when a licensed provider finds disability-related need and that an emotional support animal aids your treatment plan. Fair housing rules may require landlords to consider your documented request statewide.",
    [
      "Therapists distinguish between stable maintenance phases and acute episodes when recommending animals at home.",
      "Honest discussion of sleep cycles, medication adherence, and crisis planning informs whether an ESA fits safely.",
    ],
    [
      "Routine and companionship may support mood regulation between episodes when combined with psychiatric care.",
      "Avoiding pet-related housing stress reduces triggers tied to moves or surrenders during vulnerable periods.",
    ],
    [
      {
        question: "Will mania concerns disqualify me?",
        answer: "Safety matters; your clinician assesses whether an ESA is appropriate for your current stability and housing setup.",
      },
    ],
    ["depression", "anxiety", "ptsd"],
    [
      "Mood disorders fall under FHA disability analysis when symptoms limit major life activities.",
      "Texas HB 4164 regulates documentation quality—it does not exclude bipolar disorder from evaluation.",
    ],
    [
      "Be ready to discuss hospitalization history, current prescribers, and how an animal fits your wellness plan.",
      "Therapists may ask about sleep patterns, impulsivity around pet care, and support people in your household.",
    ],
  ),

  ocd: cluster(
    "ocd",
    "OCD",
    "Obsessive-compulsive disorder and ESA letters: Texas qualification and housing steps.",
    "OCD symptoms affecting home life may be evaluated for emotional support animal recommendations.",
    "OCD may qualify for an ESA letter if a licensed clinician documents disability-related need and that an animal supports treatment. Valid letters enable reasonable accommodation requests in most Texas rentals.",
    [
      "Contamination fears and checking rituals sometimes center on the home environment—therapists explore whether an ESA calms or complicates rituals.",
      "Exposure work with a treating therapist takes priority; ESAs are considered as part of the whole plan.",
    ],
    [
      "Grounding with a bonded animal can reduce isolation when compulsions keep you home.",
      "Housing security prevents adding pet-policy stress to already demanding ERP schedules.",
    ],
    [
      {
        question: "Can landlords ask about my compulsions?",
        answer: "They cannot demand detailed symptom lists beyond a compliant provider letter confirming need.",
      },
    ],
    ["anxiety", "depression", "panic-disorder"],
    SHARED_QUALIFY,
    [
      "Clinicians often ask which compulsions dominate daily life and whether pet care triggers contamination fears.",
      "Share how an animal has already helped or what you hope to gain—without minimizing safety planning with your therapist.",
    ],
  ),

  "autism-spectrum": cluster(
    "autism-spectrum",
    "Autism Spectrum Disorder",
    "Autism spectrum and ESA letters in Texas: sensory support, evaluations, and housing.",
    "Sensory and social support at home may be evaluated for ESA documentation.",
    "Autism spectrum disorder may support an ESA letter when a licensed provider confirms disability-related need and that an emotional support animal helps your care plan. Texas landlords must review reasonable accommodation requests with reliable documentation.",
    [
      "Adults and youth evaluations consider sensory overload, communication needs, and meltdown recovery—not stereotypes.",
      "Service dogs and ESAs differ; many autistic adults seek ESAs primarily for housing with a provider letter.",
    ],
    [
      "Predictable companionship and sensory regulation at home can complement occupational or behavioral therapies.",
      "Stable housing with an approved animal avoids disruptive moves when routines are essential.",
    ],
    [
      {
        question: "Is autism automatically approved?",
        answer: "No—functional impact and clinical judgment determine eligibility.",
      },
    ],
    ["adhd", "anxiety", "social-anxiety"],
    SHARED_QUALIFY,
    [
      "Expect questions about sensory triggers, daily structure, and prior experiences with animals.",
      "Therapists may ask how housemates or family participate in care and what housing barriers you face.",
    ],
  ),

  "eating-disorders": cluster(
    "eating-disorders",
    "Eating Disorders",
    "Eating disorders and ESA letters: clinical safety, Texas law, and housing documentation.",
    "Providers weigh clinical stability when eating disorders and ESA requests intersect.",
    "Eating disorders may qualify for an ESA letter only when a licensed clinician finds disability-related need, clinical stability, and that an emotional support animal supports care. Housing accommodation follows with valid documentation under the FHA.",
    [
      "Active medical instability may pause ESA approval until your treatment team agrees an animal is safe and helpful.",
      "Coordination with dietitians, physicians, or psychiatrists is common before letters issue.",
    ],
    [
      "Emotional comfort at home can support meal routines when your team agrees an animal reduces isolation.",
      "Removing pet-policy housing stress can protect recovery environments you build with providers.",
    ],
    [
      {
        question: "Will my therapist consult my treatment team?",
        answer: "They may consider medical stability; be transparent about inpatient or intensive outpatient care.",
      },
    ],
    ["depression", "anxiety", "ptsd"],
    SHARED_QUALIFY,
    [
      "Clinicians ask about meal routines, purging or restriction patterns, and medical monitoring.",
      "Discuss why an animal helps emotionally at home and whether pet care feels manageable during recovery.",
    ],
  ),
};

export function getConditionCluster(slug: string): ConditionCluster | undefined {
  return CONDITION_CLUSTERS[slug as ConditionClusterSlug];
}
