"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type StatIcon = "users" | "star" | "clock" | "tag" | "pin";
type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
  icon: StatIcon;
};

const DEFAULT_STATS: Stat[] = [
  { value: 10000, suffix: "+", label: "ESA Letters Delivered", icon: "users" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Verified Client Rating", icon: "star" },
  { value: 6, suffix: "+ Yrs", label: "Supporting Texas Renters", icon: "clock" },
  { value: 149, prefix: "$", label: "Flat-Rate, All-Inclusive Pricing", icon: "tag" },
  { value: 254, label: "Texas Counties Served", icon: "pin" },
];

const ICON_PATHS: Record<StatIcon, ReactNode> = {
  users: (
    <path
      fillRule="evenodd"
      d="M10 9a3 3 0 100-6 3 3 0 000 6zM3 17c0-3.314 3.134-6 7-6s7 2.686 7 6H3z"
      clipRule="evenodd"
    />
  ),
  star: (
    <path d="M10 2a1 1 0 01.894.553l1.382 2.76 3.046.443a1 1 0 01.555 1.706l-2.205 2.15.52 3.034a1 1 0 01-1.451 1.054L10 12.27l-2.741 1.43a1 1 0 01-1.451-1.054l.52-3.034-2.205-2.15a1 1 0 01.555-1.706l3.046-.443 1.382-2.76A1 1 0 0110 2z" />
  ),
  clock: (
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V5z"
      clipRule="evenodd"
    />
  ),
  tag: (
    <path d="M10 1a4 4 0 00-4 4v2H5a2 2 0 00-2 2v7a2 2 0 002 2h10a2 2 0 002-2V9a2 2 0 00-2-2h-1V5a4 4 0 00-4-4zm2 6V5a2 2 0 10-4 0v2h4z" />
  ),
  pin: (
    <path
      fillRule="evenodd"
      d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
      clipRule="evenodd"
    />
  ),
};

/** Counts up from 0 to `target` over ~1.4s, using an ease-out curve, once `active` flips true. */
function useCountUp(target: number, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const duration = 1400;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  return value;
}

function StatCard({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLLIElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animated = useCountUp(stat.value, active);
  const decimals = stat.decimals ?? 0;
  const formatted = animated.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <li
      ref={ref}
      className="group flex flex-col items-center gap-2 rounded-card border border-neutral-200 bg-white p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-hover:rotate-12 group-hover:bg-brand-600 group-hover:text-white">
        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          {ICON_PATHS[stat.icon]}
        </svg>
      </span>
      <span className="tabular-nums text-2xl font-extrabold tracking-tight text-brand-700 md:text-3xl">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </span>
      <span className="text-xs font-semibold text-neutral-600 md:text-sm">{stat.label}</span>
    </li>
  );
}

/** Stats strip — sits directly below the trust bar as a light buffer between the
 *  hero's dark photo background and the next dark section. Numbers count up
 *  from 0 the first time the strip scrolls into view. */
export function StatsStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="relative border-y border-neutral-200 bg-brand-50 py-10 md:py-12">
      <Container>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
