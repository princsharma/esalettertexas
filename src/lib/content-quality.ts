/** Dev/content-team helpers — city pages must not ship as name-swapped duplicates. */

export function countWords(...texts: string[]): number {
  return texts
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Minimum body + panel copy before a city page should be published. */
export const CITY_PAGE_MIN_WORDS = 400;

export function validateCityWordCount(citySlug: string, wordCount: number): void {
  if (process.env.NODE_ENV === "production") return;
  if (wordCount < CITY_PAGE_MIN_WORDS) {
    console.warn(
      `[content-quality] /locations/${citySlug}/ has ${wordCount} words; minimum is ${CITY_PAGE_MIN_WORDS}. Add unique local detail before publishing.`,
    );
  }
}
