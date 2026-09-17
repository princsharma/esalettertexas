import Image from "next/image";

export type LetterCallout = {
  x: number; // percent, 0-100
  y: number; // percent, 0-100
  label: string;
};

/** M12 — Sample letter viewer. Annotated document image with callout pins. */
export function SampleLetterViewer({
  imageSrc,
  imageAlt = "Sample ESA letter",
  callouts = [],
}: {
  imageSrc: string;
  imageAlt?: string;
  callouts?: LetterCallout[];
}) {
  return (
    <div className="group relative mx-auto max-w-md overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <div className="relative aspect-[8.5/11] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 448px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {callouts.map((c, i) => (
          <span
            key={i}
            className="absolute -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${c.x}%`, top: `${c.y}%` }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white shadow-card">
              {i + 1}
            </span>
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-40 -translate-x-1/2 rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs text-white opacity-0 shadow-card transition-opacity group-hover:opacity-100">
              {c.label}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
