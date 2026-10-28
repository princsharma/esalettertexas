import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM, type TeamMember } from "@/data/team";



function FocusAreasTwoRows({ areas }: { areas: string[] }) {
  const firstRowCount = Math.ceil(areas.length / 2);
  const rows = [areas.slice(0, firstRowCount), areas.slice(firstRowCount)].filter(
    (row) => row.length > 0,
  );

  return (
    <div className="mt-2 flex flex-col items-center gap-1.5 sm:items-start">
      {rows.map((row) => (
        <ul
          key={row.join("|")}
          className="flex flex-wrap justify-center gap-1.5 sm:justify-start"
        >
          {row.map((area) => (
            <li
              key={area}
              className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 transition-colors duration-300 group-hover:bg-brand-100"
            >
              {area}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
     <div className="animate-fade-up group relative flex h-full flex-col rounded-card border border-neutral-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card-hover sm:p-5">
      {/* Photo: its own rounded div, inset within the card */}
      <div className="relative mx-auto aspect-[5/6] w-full max-w-[11rem] flex-none overflow-hidden rounded-2xl border-2 border-neutral-100 bg-white sm:mx-0 sm:max-w-none">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 639px) 176px, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 shadow-sm backdrop-blur-sm">
          {member.credential}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col text-center sm:mt-5 sm:text-left">
        <h3 className="text-h3 text-brand-800">{member.name}</h3>
        {member.taglineLines ? (
          <p
            className="mt-1 text-sm font-semibold leading-snug text-brand-600"
            aria-label={member.tagline}
          >
            <span className="block">{member.taglineLines[0]}</span>
            <span className="block">{member.taglineLines[1]}</span>
          </p>
        ) : (
          <p className="mt-1 text-sm font-semibold text-brand-600">{member.tagline}</p>
        )}
        {member.bioLines ? (
          <p
            className="text-body mx-auto mt-2 max-w-prose text-neutral-600 sm:mx-0 sm:mt-3"
            aria-label={member.bio}
          >
            {member.bioLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        ) : (
          <p className="text-body mx-auto mt-2 max-w-prose text-neutral-600 sm:mx-0 sm:mt-3">
            {member.bio}
          </p>
        )}

        <div className="mt-4 flex flex-col items-center gap-2 border-t border-neutral-100 pt-4 sm:mt-5 sm:flex-row sm:items-start sm:gap-2.5 sm:text-left">
          <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 sm:h-14 sm:w-14">
            <Image
              alt={`Licensed in ${member.licensedIn} icon`}
              src="/icons/esa-location-icon.webp"
              width={48}
              height={48}
              className="h-6 w-6 object-contain sm:h-9 sm:w-9"
            />
          </span>
          <div className="min-w-0 sm:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">Licensed In</p>
            <p className="text-sm font-medium leading-snug text-neutral-700">{member.licensedIn}</p>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-neutral-500">Focus Areas</p>
          {member.focusAreas?.length ? (
            <FocusAreasTwoRows areas={member.focusAreas} />
          ) : null}
        </div>

        <div className="mt-auto pt-6">
          <Link
            href={`/about-our-therapists/${member.slug}/`}
            className="flex w-full items-center justify-center gap-2 rounded-control bg-brand-700 px-4 py-3 text-center text-sm font-bold text-white shadow-sm transition-colors hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
          >
            View profile
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}


export function TeamGrid({ members = TEAM }: { members?: TeamMember[] }) {
  return (
    <section className="relative overflow-hidden bg-background section-py">
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
              Our Licensed{" "}
              <span className="text-accent-600">Mental Health Professionals</span>
            </>
          }
          subhead="We match you with licensed therapists and counselors who are ready to support your well-being with professional assessments and clinically sound recommendations."
          align="center"
        />

        <div className="mt-8 grid items-stretch gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
