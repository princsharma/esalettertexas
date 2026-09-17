export type CityStat = { label: string; value: string };
export type CityResource = { label: string; href: string };

/** M14 — City info panel. Local housing stats, local rules, nearby resources. */
export function CityInfoPanel({
  cityName,
  stats,
  localRules,
  resources,
}: {
  cityName: string;
  stats: CityStat[];
  localRules: string[];
  resources: CityResource[];
}) {
  return (
    <div className="rounded-card border border-neutral-200 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <h3 className="text-lg font-bold text-neutral-900">
        ESA rules &amp; resources in {cityName}, TX
      </h3>

      <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-caption text-neutral-500">{stat.label}</dt>
            <dd className="mt-1 text-lg font-semibold text-neutral-900">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-neutral-900">
          Local housing rules
        </h4>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-neutral-600">
          {localRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-neutral-900">
          Nearby resources
        </h4>
        <ul className="mt-2 space-y-1 text-sm">
          {resources.map((r) => (
            <li key={r.href}>
              <a
                href={r.href}
                className="text-brand-700 hover:text-brand-800 hover:underline"
              >
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
