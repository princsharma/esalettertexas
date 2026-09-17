import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subhead,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  subhead?: string;
  align?: "left" | "center";
  /** "dark" text for light backgrounds (default), "light" text for dark/gradient backgrounds. */
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      {eyebrow && (
        <p
          className={`mb-4 inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide sm:text-sm ${
            isLight
              ? "border-white/15 bg-white/10 text-brand-100 backdrop-blur-sm"
              : "border-brand-100 bg-brand-50 text-brand-700"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight [text-wrap:balance] ${
          isLight ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {subhead && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg md:text-xl ${
            isLight ? "text-brand-100" : "text-neutral-600"
          }`}
        >
          {subhead}
        </p>
      )}
    </div>
  );
}
