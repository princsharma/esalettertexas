import type { ReactNode } from "react";

type BadgeVariant = "licensed" | "private" | "texas";

const variantClass: Record<BadgeVariant, string> = {
  licensed: "trust-badge-licensed",
  private: "trust-badge-private",
  texas: "trust-badge-texas",
};

/** Trust / metadata pill — use verifiable claims only; prefer licensed or private over texas. */
export function Badge({
  children,
  variant = "licensed",
  icon,
  className = "",
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  className?: string;
}) {
  return (
    <span className={`trust-badge ${variantClass[variant]} ${className}`.trim()}>
      {icon && <span className="trust-badge-icon inline-flex shrink-0 items-center justify-center">{icon}</span>}
      {children}
    </span>
  );
}
