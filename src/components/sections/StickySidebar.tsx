"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Keeps sidebar content in view while scrolling.
 *  - `extended`: fixed rail until `boundarySelector` (default `#faq` on ArticleLayout).
 *  - `column`: plain sticky within the aside column only—scrolls away before sections below the article. */
export function StickySidebar({
  children,
  boundarySelector,
  topOffset = 96,
  gap = 24,
  variant = "extended",
}: {
  children: ReactNode;
  boundarySelector: string;
  topOffset?: number;
  gap?: number;
  variant?: "extended" | "column";
}) {
  if (variant === "column") {
    return (
      <div
        className="sticky z-40 space-y-6"
        style={{ top: topOffset }}
      >
        {children}
      </div>
    );
  }

  return (
    <ExtendedStickySidebar
      boundarySelector={boundarySelector}
      topOffset={topOffset}
      gap={gap}
    >
      {children}
    </ExtendedStickySidebar>
  );
}

function ExtendedStickySidebar({
  children,
  boundarySelector,
  topOffset,
  gap,
}: {
  children: ReactNode;
  boundarySelector: string;
  topOffset: number;
  gap: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({ position: "sticky", top: topOffset, zIndex: 40 });

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;
      const wrapper = wrapperRef.current;
      const rail = railRef.current;
      if (!wrapper || !rail) return;

      const wrapperRect = wrapper.getBoundingClientRect();

      if (wrapperRect.top > topOffset) {
        setStyle({ position: "sticky", top: topOffset, zIndex: 40 });
        return;
      }

      const boundary = document.querySelector(boundarySelector);
      const boundaryTop = boundary ? boundary.getBoundingClientRect().top : Infinity;
      const maxTop = boundaryTop - gap - rail.offsetHeight;

      setStyle({
        position: "fixed",
        top: Math.min(topOffset, maxTop),
        left: wrapperRect.left,
        width: wrapperRect.width,
        zIndex: 40,
      });
    }

    function onScrollOrResize() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [boundarySelector, topOffset, gap]);

  return (
    <div ref={wrapperRef} className="relative">
      <div ref={railRef} style={style} className="space-y-6">
        {children}
      </div>
    </div>
  );
}
