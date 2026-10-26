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
  users: "/icons/Texas Counties Served.webp",
  star: "/icons/Verified Client Rating.webp",
  clock: "/icons/Supporting Texas Renters.webp",
  tag: "/icons/Flat-Rate, All-Inclusive Pricing_1.webp",
  pin: "/icons/Texas Counties Served_1.webp",
};

function formatStatValue(stat: Stat) {
  const decimals = stat.decimals ?? 0;
  return stat.value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function StatCard({ stat }: { stat: Stat }) {
  const formatted = formatStatValue(stat);

  return (
    <li
      className="group flex flex-col items-center gap-3 rounded-card border border-neutral-200 bg-brand-700 p-5 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card-hover sm:p-6"
    >
      <Image
        src={ICON_PATHS[stat.icon]}
        alt=""
        width={80}
        height={80}
        sizes="72px"
        className="h-10 w-10 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
      />

      <span className="text-stat-strip tabular-nums text-white">
        {stat.prefix}
        {formatted}
        {stat.suffix}
      </span>
      <span className="text-sm font-semibold leading-snug text-brand-200">{stat.label}</span>
    </li>
  );
}

export function StatsStrip({ stats = DEFAULT_STATS }: { stats?: Stat[] }) {
  return (
    <section className="relative border-b border-neutral-200 bg-neutral-100 py-12 md:py-16">
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
