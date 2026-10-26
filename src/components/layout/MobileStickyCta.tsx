"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_CTA_HREF, HEADER_CTA_LABEL } from "@/data/nav";

/** Mobile-first sticky CTA — hidden on large screens and on the conversion route. */
export function MobileStickyCta() {
  const pathname = usePathname();
  if (pathname === "/apply-now" || pathname === "/apply-now/") return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200/80 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden"
      aria-hidden={false}
    >
      <Link
        href={HEADER_CTA_HREF}
        className="btn btn-primary pointer-events-auto w-full"
      >
        {HEADER_CTA_LABEL}
      </Link>
    </div>
  );
}
