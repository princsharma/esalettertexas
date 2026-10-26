import { ReactNode } from "react";

/** Centered content shell: 1200px max width with 20 / 32 / 80px horizontal inset. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container-page ${className}`}>{children}</div>;
}
