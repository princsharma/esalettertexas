/** Featured-snippet style direct answer (40–60 words) for T4 cluster pages. */
export function QuickAnswerBox({ children }: { children: string }) {
  return (
    <div className="rounded-card border border-brand-200 bg-brand-50/80 px-5 py-4 shadow-sm ring-1 ring-brand-100/80">
      <p className="text-[11px] font-bold uppercase tracking-wide text-brand-600">Quick answer</p>
      <p className="text-body mt-2 text-neutral-800">{children}</p>
    </div>
  );
}
