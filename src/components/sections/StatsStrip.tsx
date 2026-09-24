"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
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

const ICON_PATHS: Record<StatIcon, string> = {
  users: "/icons/Artboard 10.webp",
  star: "/icons/Verified Client Rating.webp",
  clock: "/icons/Supporting Texas Renters.webp",
  tag: "/icons/Flat-Rate, All-Inclusive Pricing.webp",
  pin: "/icons/Texas Counties Served.webp",
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
      className="group flex flex-col items-center gap-2 rounded-card border border-neutral-200 bg-brand-300 p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover"
>
        <Image src={ICON_PATHS[stat.icon]} alt="" width={90} height={90} className=" object-contain" />
    
      <span className="tabular-nums text-2xl font-extrabold tracking-tight text-brand-700 md:text-3xl">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </span>
      <span className="text-xs font-semibold text-neutral-600 md:text-sm">{stat.label}</span>
    </li>
  );
}


export function StatsStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="relative border-b border-neutral-200 bg-brand-50 py-10 md:py-12">
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
