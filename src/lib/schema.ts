import type { BlogPostRecord } from "@/data/blog/types";
import { CONDITIONS_REVIEWER } from "@/data/silos/conditions";
import { ESA_LETTER_OFFER } from "@/data/pricing";
import { SITE } from "@/data/site";
import type { FaqItem } from "@/components/sections";
import type { ProcessStep } from "@/data/process-steps";
import { absoluteUrl } from "@/lib/seo";

const ORG_ID = `${SITE.url.replace(/\/$/, "")}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    areaServed: { "@type": "State", name: "Texas" },
  };
}

export function webSiteSchema() {
  const base = SITE.url.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${base}/search/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbListSchema(
  items: { label: string; href?: string }[],
  currentPagePath?: string,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => {
      const isLast = i === items.length - 1;
      const itemUrl = item.href
        ? absoluteUrl(item.href)
        : isLast && currentPagePath
          ? absoluteUrl(currentPagePath)
          : undefined;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
        ...(itemUrl ? { item: itemUrl } : {}),
      };
    }),
  };
}

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function articleSchema(post: BlogPostRecord, pageUrl: string) {
  const modified = post.seo?.dateModified ?? post.publishedAt;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: modified,
    author: {
      "@type": "Person",
      name: CONDITIONS_REVIEWER.name,
      jobTitle: CONDITIONS_REVIEWER.credentials,
    },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: pageUrl,
    image: post.image ? [absoluteUrl(post.image)] : undefined,
  };
}

export function howToSchema(
  name: string,
  description: string,
  steps: ProcessStep[],
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: pageUrl,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function esaLetterProductSchema(pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: ESA_LETTER_OFFER.name,
    description:
      "Confidential ESA assessment reviewed by a licensed Texas mental health professional when clinically appropriate.",
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: ESA_LETTER_OFFER.priceCurrency,
      price: ESA_LETTER_OFFER.price,
      availability: "https://schema.org/InStock",
    },
  };
}

export function cityServiceSchema(cityName: string, pageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `ESA letter evaluation — ${cityName}, Texas`,
    serviceType: "Emotional support animal letter clinical evaluation",
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: { "@type": "State", name: "Texas", containedInPlace: { "@type": "Country", name: "United States" } },
    },
    url: pageUrl,
  };
}
