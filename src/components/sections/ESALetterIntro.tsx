import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import Image from "next/image";
import { HERO_IMAGES } from "@/data/hero-images";

export default function ESALetterIntro(){
    return (
      <section className="relative overflow-hidden bg-brand-50 section-py">
        <div  
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-accent-200/30 blur-3xl"
        />
        <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16 text-neutral-950">
          <div>
            <SectionHeading
              eyebrow="Get started"
              title="What Is an ESA Letter?"
              subhead="An ESA letter is a signed document from a licensed mental health professional, confirming your emotional support animal is a necessary part of your treatment. It's the only documentation Texas landlords can legally require for ESA housing accommodations."
            />

            <ul className="mt-6 space-y-3">
              {[
                "Signed by a licensed Texas mental health professional",
                "Legally recognized under the Fair Housing Act & HB 4164",
                "Accepted by landlords, HOAs, and property managers",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 rounded-control border border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-neutral-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-card"
                >
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-600 text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.9 3.9 6.7-6.7a1 1 0 011.4 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Link
              href="/#how-it-works"
              className="group mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              Learn more about ESA letters
              <svg
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {/* Mock letter preview card */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div
              aria-hidden="true"
              className="absolute -inset-4 -z-10 rounded-[1.75rem] bg-gradient-to-br from-brand-200/50 via-white/0 to-accent-200/40 blur-2xl"
            />
            <div className="group relative -rotate-2 rounded-card border border-neutral-200 bg-white p-7 shadow-card-hover transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 sm:p-8">
              <div className="absolute inset-x-0 -top-px h-2 rounded-t-card bg-gradient-brand" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-wide text-brand-700">
                  ESA Letter
                </span>
                <span className="flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-700">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Verified
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-neutral-500 sm:text-sm">
                Reviewed and signed by S. Alvarez, LPC, licensed to practice in Texas.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-neutral-600">
                This letter confirms that the above-named client is currently under my care and
                that their emotional support animal is a necessary part of their treatment plan,
                as recognized under the Fair Housing Act.
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-neutral-100 pt-7">
                <span className="relative flex h-12 w-12 flex-none items-center justify-center overflow-hidden rounded-full ring-2 ring-brand-100">
                  <Image
                    src={HERO_IMAGES.therapist}
                    alt="Licensed reviewing therapist"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
                <div>
                  <p className="text-base font-semibold text-neutral-900">Licensed Therapist</p>
                  <p className="text-sm text-neutral-500">State of Texas · LPC</p>
                </div>
                <svg
                  className="ml-auto h-7 w-7 text-brand-300 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.5 3.5c-1.5-2-5-1.5-5 2 0 3 3 5 5 6.5 2-1.5 5-3.5 5-6.5 0-3.5-3.5-4-5-2z" />
                </svg>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
}