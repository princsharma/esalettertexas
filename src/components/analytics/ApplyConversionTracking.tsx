"use client";

import { useEffect } from "react";
import { APPLY_CONVERSION_EVENTS, GA_MEASUREMENT_ID } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fires a single page-level conversion view on /apply-now/ — no PHI. */
export function ApplyConversionTracking() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
    window.gtag("event", APPLY_CONVERSION_EVENTS.pageView, {
      event_category: "conversion",
      event_label: "apply_now",
      non_interaction: true,
    });
  }, []);

  return null;
}
