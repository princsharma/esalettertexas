export const DEFAULT_TRUST_ITEMS: string[] = [
  "Licensed TX therapists",
  "HIPAA compliant",
  "Moneyback guarantee",
  "24-48 hr turnaround",
];

/** Two-line labels for Hero trust badges only (TrustBar uses single-line `item` text). */
export const HERO_TRUST_ITEM_LINES: Record<string, readonly [string, string]> = {
  "Licensed TX therapists": ["Licensed\u00a0TX", "therapists"],
  "HIPAA compliant": ["HIPAA", "compliant"],
  "Moneyback guarantee": ["Moneyback", "guarantee"],
};

export const TRUST_ITEM_ICONS: Record<string, string> = {
  "Licensed TX therapists": "/icons/Licensed TX therapists_1.webp",
  "HIPAA compliant": "/icons/HIPAA compliant_1.webp",
  "Moneyback guarantee": "/icons/Moneyback guarantee_1.webp",
  "24-48 hr turnaround": "/icons/Flat-Rate, All-Inclusive Pricing.webp",
};
