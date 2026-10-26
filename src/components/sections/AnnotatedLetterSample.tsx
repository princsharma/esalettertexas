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
      <div className="conversion-letter-shell relative shadow-card">
        <div className="conversion-letter-preview">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-brand-800">
                  Sarah Alvarez, LPC
                </p>
                <p className="content-card-meta mt-0.5">
                  Licensed Professional Counselor : Texas License #12345
                </p>
              </div>
              <Pin n={1} />
            </div>
            <span className="trust-badge trust-badge-texas">
              Sample, not for submission
            </span>
          </div>

          <div className="mt-6 flex items-center">
            <p className="content-card-meta">September 18, 2026</p>
            <Pin n={2} />
          </div>

          <div className="mt-4 flex items-start">
            <p className="content-card-body">
              <span className="font-semibold text-neutral-900">Re: Jordan T. (client of record)</span>
              <br />
              To Whom It May Concern,
            </p>
            <Pin n={3} />
          </div>

          <div className="mt-3 flex items-start">
            <p className="content-card-body">
              I am writing to confirm that the above-named client is currently under my care and
              has a disability-related need for an emotional support animal. In my professional
              opinion, this animal's presence is a necessary part of the client's ongoing
              treatment plan, as recognized under the Fair Housing Act.
            </p>
            <Pin n={4} />
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-neutral-200 pt-6">
            <p className="text-xl italic leading-none text-brand-800">S. Alvarez</p>
            <Pin n={5} />
            <div className="ml-auto flex items-center">
              <p className="content-card-meta text-right">
                (512) 555-0148
                <br />
                licensed@example-clinic.com
              </p>
              <Pin n={6} />
            </div>
          </div>

          <p className="mt-6 text-center">
            <span className="conversion-sample-badge">Illustrative sample</span>
          </p>
        </div>

      </div>
    </div>
  );
}
