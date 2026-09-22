export type ComparisonRow = { label: string; values: (string | boolean)[] };

/** M10: Comparison table. Two- or three-column responsive table (e.g. ESA vs Service Animal). */
export function ComparisonTable({
  columns,
  rows,
  caption,
}: {
  columns: string[];
  rows: ComparisonRow[];
  caption?: string;
}) {
  return (
    <div className="overflow-x-auto rounded-card border border-neutral-200">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-neutral-50">
            <th className="px-4 py-3 text-left font-semibold text-neutral-700">
              &nbsp;
            </th>
            {columns.map((col) => (
              <th
                key={col}
                className="px-4 py-3 text-left font-semibold text-neutral-900"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={`transition-colors duration-150 hover:bg-brand-50/60 ${
                i % 2 === 1 ? "bg-neutral-50/60" : ""
              }`}
            >
              <th
                scope="row"
                className="px-4 py-3 text-left font-medium text-neutral-700"
              >
                {row.label}
              </th>
              {row.values.map((value, j) => (
                <td key={j} className="px-4 py-3 text-neutral-700">
                  {typeof value === "boolean" ? (
                    value ? (
                      <span className="text-success-600">✓</span>
                    ) : (
                      <span className="text-neutral-300">✕</span>
                    )
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
