export type ButtonVariant = "primary" | "secondary" | "tertiary" | "ghost";
export type ButtonSize = "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  ghost: "btn-ghost",
};

export function buttonClassName({
  variant = "primary",
  size = "lg",
  className = "",
  disabled = false,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
}) {
  return [
    "btn",
    size === "md" ? "btn-md" : "",
    variantClass[variant],
    disabled ? "btn-disabled" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}
