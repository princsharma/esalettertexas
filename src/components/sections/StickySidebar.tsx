"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/** Keeps its children pinned to the viewport while scrolling, the same way a plain
 *  `position: sticky` column would - but the floor isn't the end of this column's own
 *  grid row (which stops right after the article body). Instead it tracks a boundary
 *  element elsewhere on the page (the final CTA band) and stops just above it, so the
 *  sidebar rides alongside the FAQ section too instead of disappearing before it. */
export function StickySidebar({
  children,
  boundarySelector,
  topOffset = 96,
  gap = 24,
}: {
  children: ReactNode;
  boundarySelector: string;
  topOffset?: number;
  gap?: number;
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
