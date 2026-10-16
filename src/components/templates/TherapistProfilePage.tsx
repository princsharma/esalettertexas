import Image from "next/image";
import { Breadcrumbs, CtaBand, HeroPhotoBackdrop } from "@/components/sections";
import { PAGE_HERO } from "@/data/page-heroes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import type { TeamMember } from "@/data/team";

function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-5 text-center sm:px-6">
      <p className="text-2xl font-bold text-brand-800 sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-600 sm:text-sm">{label}</p>
    </div>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-500">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold text-brand-900 sm:text-3xl lg:text-[2rem]">{title}</h2>
      </div>
      <p className="max-w-xl text-sm leading-relaxed text-neutral-600 lg:max-w-md lg:text-right">{description}</p>
    </div>
  );
}

function LicenseRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-neutral-100 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <span className="text-[11px] font-bold uppercase tracking-wide text-brand-500">{label}</span>
      <span className="text-sm font-semibold text-brand-900 sm:text-right">{value}</span>
    </div>
  );
}

export function TherapistProfilePage({ member }: { member: TeamMember }) {
  const focusCount = String(member.profileFocusAreas.length);
  const firstName = member.name.split(/[,\s]/)[0];
  const statesBadge = member.licensedIn;

  return (
    <>
      <Breadcrumbs
        pageUrl={`/about-our-therapists/${member.slug}/`}
        items={[
          { label: "Home", href: "/" },
          { label: "About Our Therapists", href: "/about-our-therapists/" },
          { label: member.name },
        ]}
      />

      <section className="relative overflow-hidden bg-hero-mesh">
        <HeroPhotoBackdrop src={PAGE_HERO.aboutTherapists} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 h-[28rem] w-[28rem] rounded-full bg-accent-400/15 blur-3xl"
        />
        <Container className="relative z-10 grid gap-8 py-10 sm:gap-10 sm:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:py-16">
          <div className="order-2 min-w-0 lg:order-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-300">Therapist profile</p>
            <h1 className="mt-3 text-2xl font-bold leading-tight text-white [text-wrap:balance] sm:text-3xl md:text-4xl lg:text-[2.65rem]">
              {member.name}
              <span className="text-brand-200">, {member.credential}</span>
            </h1>
            <span className="mt-4 inline-flex rounded-full bg-accent-500 px-4 py-1.5 text-sm font-bold text-brand-950 shadow-sm">
              {member.roleTitle}
            </span>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-50/95 sm:mt-5 sm:text-base">{member.bio}</p>

            <div className="mt-6 grid grid-cols-3 gap-2 sm:max-w-md">
              {[
                { v: member.licensedIn.replace(" States", ""), l: "States" },
                { v: focusCount, l: "Focus areas" },
                { v: member.credential, l: "License" },
              ].map((chip) => (
                <div
                  key={chip.l}
                  className="rounded-control border border-white/15 bg-brand-950/35 px-2 py-2.5 text-center backdrop-blur-sm"
                >
                  <p className="text-sm font-bold text-white">{chip.v}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-brand-200">{chip.l}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 sm:mt-8">
              <Button href="/apply-now/" size="lg" className="w-full justify-center shadow-lg sm:w-auto">
                Schedule consultation
                <span aria-hidden="true">→</span>
              </Button>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative">
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-[17.5rem] lg:w-[17.5rem]">
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 p-[3px] shadow-xl ring-4 ring-white/10"
                  aria-hidden="true"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-brand-800">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 256px, 280px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
              <span className="absolute bottom-2 left-0 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-800 shadow-card">
                <span className="h-2 w-2 rounded-full bg-success-500" aria-hidden="true" />
                Available
              </span>
              <span className="absolute right-0 top-2 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-brand-800 shadow-card">
                <svg className="h-4 w-4 text-brand-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="relative z-10 -mt-6 sm:-mt-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-neutral-200 bg-neutral-200 shadow-card lg:grid-cols-4">
          <StatCell value={member.licensedIn.replace(" States", "")} label="States licensed" />
          <StatCell value={focusCount} label="Specialization areas" />
          <StatCell value={member.credential} label="Clinical credentials" />
          <StatCell value="Evidence-based" label="Therapeutic care" />
        </div>
      </Container>

      <section className="bg-white section-py">
        <Container>
          <SectionIntro
            eyebrow={`Get to know ${firstName}`}
            title="About me & my approach"
            description={`${member.tagline}. Evaluations follow Texas housing documentation standards—clear, verifiable, and clinically grounded.`}
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-5">
            <div className="rounded-card border border-neutral-200 bg-neutral-50/50 p-6 shadow-card lg:col-span-3 sm:p-8">
              <div className="space-y-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                {member.longBio.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-card bg-brand-900 p-6 shadow-card lg:col-span-2 sm:p-8">
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent-500/20 blur-2xl"
                aria-hidden="true"
              />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-400">My philosophy</p>
              <blockquote className="mt-5 border-l-4 border-accent-500 py-1 pl-4 text-base italic leading-relaxed text-brand-50">
                {member.philosophy}
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-100 bg-white section-py">
        <Container>
          <SectionIntro
            eyebrow="Areas of focus"
            title="Where I can help you"
            description="Clinical themes commonly addressed during ESA and mental health evaluations—each case is reviewed individually."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {member.profileFocusAreas.map((area) => (
              <li
                key={area}
                className="rounded-card border border-neutral-200 border-l-4 border-l-accent-500 bg-white px-5 py-4 text-base font-semibold text-brand-900 shadow-sm transition-shadow hover:shadow-card"
              >
                {area}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-accent-50/80 via-neutral-50 to-neutral-50 section-py">
        <Container>
          <SectionIntro
            eyebrow="Credentials"
            title="License & states served"
            description="License type and practice details appear on signed letters. State list reflects active telehealth authority at time of review."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-card border border-neutral-200 bg-white p-6 shadow-card sm:p-8">
              <h3 className="border-b-4 border-accent-500 pb-2 text-sm font-bold uppercase tracking-wide text-brand-800">
                License information
              </h3>
              <div className="mt-2">
                <LicenseRow label="Type" value={member.license.type} />
                <LicenseRow label="Full title" value={member.license.fullTitle} />
                <LicenseRow label="Practice level" value={member.license.practiceLevel} />
                <LicenseRow label="Experience" value={member.license.experience} />
              </div>
            </div>

            <div className="rounded-card border border-neutral-200 bg-white p-6 shadow-card sm:p-8">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-sm font-bold uppercase tracking-wide text-brand-800">States served</h3>
                <span className="shrink-0 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-brand-950">
                  {statesBadge}
                </span>
              </div>
              <ul className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {member.statesServed.map((state) => (
                  <li
                    key={state}
                    className="flex items-center gap-2 rounded-control bg-accent-100/80 px-3 py-2 text-sm font-medium text-brand-900"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden="true" />
                    {state}
                  </li>
                ))}
              </ul>
              {member.licensedIn.includes("+") && (
                <p className="mt-4 text-xs text-neutral-500">
                  Additional states may apply; your letter lists the evaluator&apos;s active license at signing.
                </p>
              )}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to work with a licensed clinician?"
        subhead="Confidential online assessment. HIPAA aligned. No registry shortcuts."
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
      />
    </>
  );
}
