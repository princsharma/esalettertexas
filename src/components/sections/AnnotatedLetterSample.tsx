/** M12: Annotated sample ESA letter. Built from real markup (not a raster image) so every
 *  annotated field stays legible and theme-consistent, matching the mock-letter language
 *  already used in Hero/CtaBand/ESALetterIntro elsewhere on the site. */
function Pin({ n }: { n: number }) {
  return (
    <span
      aria-hidden="true"
      className="ml-2 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent-500 text-[11px] font-bold text-white shadow-card"
    >
      {n}
    </span>
  );
}

export function AnnotatedLetterSample() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[1.75rem] bg-gradient-to-br from-brand-200/50 via-white/0 to-accent-200/40 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-card border border-neutral-200 bg-white p-7 shadow-letter sm:p-9">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-accent" />

        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-brand-700">
                Sarah Alvarez, LPC
              </p>
              <p className="mt-0.5 text-xs text-neutral-500">
                Licensed Professional Counselor : Texas License #12345
              </p>
            </div>
            <Pin n={1} />
          </div>
          <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
            Sample, not for submission
          </span>
        </div>

        <div className="mt-6 flex items-center">
          <p className="text-xs text-neutral-500">September 18, 2026</p>
          <Pin n={2} />
        </div>

        <div className="mt-4 flex items-start">
          <p className="text-sm leading-relaxed text-neutral-700">
            <span className="font-semibold text-neutral-900">Re: Jordan T. (client of record)</span>
            <br />
            To Whom It May Concern,
          </p>
          <Pin n={3} />
        </div>

        <div className="mt-3 flex items-start">
          <p className="text-sm leading-relaxed text-neutral-700">
            I am writing to confirm that the above-named client is currently under my care and
            has a disability-related need for an emotional support animal. In my professional
            opinion, this animal's presence is a necessary part of the client's ongoing
            treatment plan, as recognized under the Fair Housing Act.
          </p>
          <Pin n={4} />
        </div>

        <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-6">
          <p className="text-xl italic leading-none text-brand-700">S. Alvarez</p>
          <Pin n={5} />
          <div className="ml-auto flex items-center">
            <p className="text-right text-xs leading-relaxed text-neutral-500">
              (512) 555-0148
              <br />
              licensed@example-clinic.com
            </p>
            <Pin n={6} />
          </div>
        </div>
      </div>
    </div>
  );
}
