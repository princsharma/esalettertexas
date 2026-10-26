import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { buttonClassName, type ButtonSize, type ButtonVariant } from "@/components/ui/buttonStyles";

export type { ButtonSize, ButtonVariant };

export function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
  disabled = false,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Renders a non-interactive disabled style (link still navigates unless href is omitted). */
  disabled?: boolean;
}) {
  const classes = buttonClassName({ variant, size, className, disabled });

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function SubmitButton({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  disabled = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
}) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={buttonClassName({ variant, size, className, disabled })}
      {...props}
    >
      {children}
    </button>
  );
}
