"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef } from "react";
import { SubmitButton } from "@/components/ui/Button";
import { Field, TextInput } from "@/components/ui/Field";
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
      <Field label="Full name" htmlFor="assessment-name">
        <TextInput id="assessment-name" type="text" name="name" autoComplete="name" />
      </Field>
      <Field label="Email" htmlFor="assessment-email">
        <TextInput id="assessment-email" type="email" name="email" autoComplete="email" />
      </Field>
      <Field label="State of residence" htmlFor="assessment-state">
        <TextInput id="assessment-state" type="text" name="state" defaultValue="Texas" autoComplete="address-level1" />
      </Field>
      <SubmitButton className="w-full">Continue to clinical questions</SubmitButton>
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
