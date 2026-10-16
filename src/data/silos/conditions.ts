import type { BlogPost, FaqItem, RelatedLink, SiloCard } from "@/components/sections";
import { getPostsForPillarM7 } from "@/lib/blog";
import type { TocItem } from "@/components/sections";

export const CONDITIONS_PILLAR_PATH = "/conditions/";

export const CONDITIONS_PILLAR_LABEL = "Who Qualifies for an ESA in Texas";

export const CONDITIONS_REVIEWER = {
  name: "Robert Staaf",
  credentials: "LCSW",
  licenseState: "Texas",
  reviewedDate: "September 2026",
  avatarSrc: "/doctors/robert-staaf.webp",
};

export const CONDITION_CLUSTER_CARDS: SiloCard[] = [
  {
    title: "Anxiety",
    description: "How an ESA can support anxiety disorders and when a letter may help.",
    href: "/conditions/anxiety/",
  },
  {
    title: "Depression",
    description: "Qualifying for an ESA letter with depression in Texas.",
    href: "/conditions/depression/",
  },
  {
    title: "PTSD",
    description: "ESA support for post-traumatic stress and housing accommodation.",
    href: "/conditions/ptsd/",
  },
  {
    title: "Bipolar Disorder",
    description: "Clinical evaluation and housing documentation for bipolar disorder.",
    href: "/conditions/bipolar-disorder/",
  },
  {
    title: "Panic Disorder",
    description: "Managing panic disorder with an emotional support animal.",
    href: "/conditions/panic-disorder/",
  },
  {
    title: "Social Anxiety",
    description: "ESA letters for social anxiety disorder and daily functioning.",
    href: "/conditions/social-anxiety/",
  },
  {
    title: "OCD",
    description: "When obsessive-compulsive disorder may support an ESA recommendation.",
    href: "/conditions/ocd/",
  },
  {
    title: "ADHD",
    description: "When ADHD symptoms may support an ESA recommendation.",
    href: "/conditions/adhd/",
  },
  {
    title: "Autism Spectrum",
    description: "ESAs, sensory support, and housing accommodation considerations.",
    href: "/conditions/autism-spectrum/",
  },
  {
    title: "Eating Disorders",
    description: "How providers evaluate ESA need alongside eating disorder treatment.",
    href: "/conditions/eating-disorders/",
  },
];

export const CONDITIONS_PILLAR_TOC: TocItem[] = [
  { id: "qualifying-criteria", label: "Qualifying criteria" },
  { id: "licensed-provider", label: "Role of a licensed provider" },
  { id: "evaluation-process", label: "Evaluation process" },
];

export const CONDITIONS_PILLAR_FAQS: FaqItem[] = [
  {
    question: "Does my diagnosis automatically qualify me for an ESA?",
    answer:
      "No diagnosis guarantees a letter. A licensed provider must determine whether an emotional support animal is a reasonable part of your care plan based on an individual evaluation.",
  },
  {
    question: "Which conditions are commonly evaluated?",
    answer:
      "Anxiety, depression, PTSD, bipolar disorder, panic disorder, social anxiety, OCD, ADHD, autism spectrum disorders, and eating disorders are frequently assessed—but eligibility depends on functional impact, not the label alone.",
  },
  {
    question: "Is an ESA the same as treatment?",
    answer:
      "An ESA complements therapy or medication; it does not replace clinical treatment. Your therapist assesses whether the animal supports your overall plan.",
  },
];

export const CONDITIONS_BLOG_POSTS: BlogPost[] = getPostsForPillarM7(CONDITIONS_PILLAR_PATH, 4);

const REQUIRED_CROSS_LINKS: RelatedLink[] = [
  { label: CONDITIONS_PILLAR_LABEL, href: CONDITIONS_PILLAR_PATH },
  { label: "Texas ESA Letter Requirements", href: "/requirements/" },
  { label: "Apply for Your ESA Letter", href: "/apply-now/" },
];

export function getConditionRelated(slugs: string[]): RelatedLink[] {
  const byHref = new Map(CONDITION_CLUSTER_CARDS.map((c) => [c.href, c]));
  const siblings = slugs
    .map((slug) => byHref.get(`/conditions/${slug}/`))
    .filter(Boolean)
    .map((c) => ({ label: c!.title, href: c!.href }));
  return [...REQUIRED_CROSS_LINKS, ...siblings];
}
