/** GA4 / GTM IDs — only loaded when set in env (no PHI in events). */
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "";
export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID?.trim() || "";

export function isAnalyticsEnabled(): boolean {
  return Boolean(GA_MEASUREMENT_ID || GTM_CONTAINER_ID);
}

/** Safe conversion events for /apply-now/ (no form fields, no query params). */
export const APPLY_CONVERSION_EVENTS = {
  pageView: "apply_now_page_view",
  formStart: "apply_assessment_start",
  formSubmit: "apply_assessment_submit",
} as const;
