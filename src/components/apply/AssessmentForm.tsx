"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef } from "react";
import { APPLY_CONVERSION_EVENTS, GA_MEASUREMENT_ID } from "@/lib/analytics";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Placeholder intake — production should POST over HTTPS to your assessment provider.
 * No query-string PHI; do not attach field values to analytics events.
 */
export function AssessmentForm() {
  const startedRef = useRef(false);

  function track(eventName: string) {
    if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;
    window.gtag("event", eventName, {
      event_category: "conversion",
      event_label: "apply_now",
    });
  }

  useEffect(() => {
    const onFocus = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      track(APPLY_CONVERSION_EVENTS.formStart);
    };
    const form = document.getElementById("assessment-form-inner");
    form?.addEventListener("focusin", onFocus, { once: true });
    return () => form?.removeEventListener("focusin", onFocus);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    track(APPLY_CONVERSION_EVENTS.formSubmit);
    const form = event.currentTarget;
    // Wire `form.action` to your encrypted endpoint; keep method POST only.
    if (process.env.NODE_ENV === "development") {
      console.info("[apply-now] Form submit intercepted (no PHI logged). Wire HTTPS POST in production.");
    }
    form.reset();
  }

  return (
    <form
      id="assessment-form-inner"
      className="space-y-5 rounded-card border border-neutral-200 bg-white p-6 shadow-card sm:p-8"
      method="post"
      action="#"
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <p className="text-sm text-neutral-600">
        Your answers are transmitted over encrypted HTTPS when this form is connected to our intake
        provider. We do not put personal or health information in URLs or marketing analytics.
      </p>
      <label className="block">
        <span className="text-sm font-semibold text-neutral-800">Full name</span>
        <input
          type="text"
          name="name"
          className="mt-1 w-full rounded-control border border-neutral-200 px-3 py-2.5 text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          autoComplete="name"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-neutral-800">Email</span>
        <input
          type="email"
          name="email"
          className="mt-1 w-full rounded-control border border-neutral-200 px-3 py-2.5 text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          autoComplete="email"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-neutral-800">State of residence</span>
        <input
          type="text"
          name="state"
          defaultValue="Texas"
          className="mt-1 w-full rounded-control border border-neutral-200 px-3 py-2.5 text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          autoComplete="address-level1"
        />
      </label>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-control bg-gradient-brand px-5 py-3 text-base font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
      >
        Continue to clinical questions
      </button>
      <p className="text-center text-xs text-neutral-500">
        By continuing, you agree to our{" "}
        <Link href="/privacy-policy/" className="text-brand-700 hover:underline">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link href="/terms/" className="text-brand-700 hover:underline">
          Terms
        </Link>
        .
      </p>
    </form>
  );
}
