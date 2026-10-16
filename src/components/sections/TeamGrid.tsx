import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM, type TeamMember } from "@/data/team";



function TeamCard({ member }: { member: TeamMember }) {
  return (
     <div className="animate-fade-up group relative flex h-full flex-col rounded-card border border-neutral-200 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-card-hover sm:p-5">
      {/* Photo: its own rounded div, inset within the card */}
      <div className="relative aspect-[5/6] w-full flex-none overflow-hidden rounded-2xl border-2 border-neutral-100 bg-white">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute" />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700 shadow-sm backdrop-blur-sm">
          {member.credential}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col sm:mt-5">
        <h3 className="text-base font-bold text-neutral-900 sm:text-lg">{member.name}</h3>
        <p className="mt-0.5 text-sm font-bold text-brand-600">{member.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600 sm:mt-3">{member.bio}</p>

        <div className="mt-4 flex items-start gap-2.5 border-t border-neutral-100 pt-4 sm:mt-5">
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-50 text-brand-600 sm:h-14 sm:w-14">
            <Image
              alt=""
              src="/icons/esa-location-icon.webp"
              width={48}
              height={48}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />
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

        <div className="mt-8 grid items-stretch gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
