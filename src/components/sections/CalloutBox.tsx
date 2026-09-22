import { ReactNode } from "react";

type Tone = "info" | "warning" | "danger";

const TONES: Record<
  Tone,
  { wrap: string; icon: string; iconPath: string }
> = {
  info: {
    wrap: "bg-brand-50 border-brand-200 text-brand-900",
    icon: "text-brand-600",
    iconPath:
      "M10 18a8 8 0 100-16 8 8 0 000 16zm-1-9a1 1 0 112 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z",
  },
  warning: {
    wrap: "bg-warning-500/10 border-warning-500/30 text-neutral-900",
    icon: "text-warning-600",
    iconPath:
      "M10.3 2.3a1 1 0 011.4 0l7 7a1 1 0 010 1.4l-7 7a1 1 0 01-1.4 0l-7-7a1 1 0 010-1.4l7-7zM10 6a1 1 0 00-1 1v3a1 1 0 102 0V7a1 1 0 00-1-1zm0 7a1 1 0 100 2 1 1 0 000-2z",
  },
  danger: {
    wrap: "bg-danger-500/10 border-danger-500/30 text-neutral-900",
    icon: "text-danger-600",
    iconPath:
      "M8.3 3a2 2 0 013.4 0l6.4 11a2 2 0 01-1.7 3H3.6a2 2 0 01-1.7-3l6.4-11zM10 8a1 1 0 00-1 1v3a1 1 0 102 0V9a1 1 0 00-1-1zm0 7a1 1 0 100 2 1 1 0 000-2z",
  },
};

/** M9: Callout / alert box. For legal warnings, scam alerts, key takeaways. */
export function CalloutBox({
  tone = "info",
  title,
  children,
}: {
  tone?: Tone;
  title?: string;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <div className={`flex gap-3 rounded-card border px-5 py-4 ${t.wrap}`}>
      <svg
        className={`h-5 w-5 flex-none ${t.icon}`}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={t.iconPath} />
      </svg>
      <div className="text-sm leading-relaxed">
        {title && <p className="font-semibold">{title}</p>}
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
