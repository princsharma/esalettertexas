import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM, type TeamMember } from "@/data/team";

const PIN_ICON = (
  <path
    fillRule="evenodd"
    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
    clipRule="evenodd"
  />
);

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="animate-fade-up group relative flex flex-col rounded-card border border-neutral-400 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card-hover">
      {/* Photo — its own rounded div, inset within the card */}
      <div className="relative aspect-[4/3] w-full flex-none overflow-hidden rounded-2xl border-2 ">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain group-hover:scale-105"
        />
        <div className="absolute " />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 shadow-sm backdrop-blur-sm">
          {member.credential}
        </span>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-bold text-neutral-900">{member.name}</h3>
        <p className="mt-0.5 text-sm font-bold text-brand-600">{member.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{member.bio}</p>

        <div className="mt-5 flex items-start gap-2.5 border-t border-neutral-100 pt-4">
          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              {PIN_ICON}
            </svg>
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">Licensed In</p>
            <p className="text-sm font-medium leading-snug text-neutral-700">{member.licensedIn}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">Focus Areas</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {member?.focusAreas?.map((area) => (
              <li
                key={area}
                className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 transition-colors duration-300 group-hover:bg-brand-100"
              >
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/** Our Professionals — team grid. Sits between the stats strip and the
 *  process steps, introducing the licensed clinicians before explaining
 *  how the evaluation works. */
export function TeamGrid({ members = TEAM }: { members?: TeamMember[] }) {
  return (
    <section className="relative overflow-hidden bg-white section-py">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Meet the Team"
          title={
            <>
              Our Licensed <span className="text-accent-600">Mental Health</span> Professionals
            </>
          }
          subhead="We match you with licensed therapists and counselors who are ready to support your well-being with professional assessments and clinically sound recommendations."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
