import Link from "next/link"
import { SectionHeading } from "../ui/SectionHeading"
import { Container } from "../ui/Container"
import Image from "next/image"

export default function TexasRights (){
    return (
      <section id="rights" className="scroll-mt-20 relative overflow-hidden bg-gradient-hero section-py">
        {/* Right-side background photo, faded into the gradient so the line-grid overlay below still reads on top */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-1/2 opacity-40 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent_0%,black_45%)]"
        >
          <Image src="/images/your-rights-esa-bg.webp" alt="" fill className="object-cover" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-20 h-80 w-80 rounded-full bg-accent-400/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
        />
    

        <Container className="relative max-w-5xl text-center">
          <SectionHeading
            eyebrow="Know your rights"
            title="Your Rights in Texas"
            subhead="Texas ESA owners are protected under the federal Fair Housing Act and the state's HB 4164, which limits what landlords can ask for and penalizes fraudulent ESA letters."
            align="center"
            tone="light"
          />
          <div className="mt-10 grid gap-7 sm:grid-cols-3">
            {[
              {
                href: "/requirements/",
                label: "Your Rights Overview",
                description: "A plain-language summary of what Texas law protects for ESA owners.",
                tilt: "hover:-rotate-1",
                icon: "/icons/your right overview.webp",
              },
              {
                href: "/what-is-an-esa-letter/#legal-basis",
                label: "Fair Housing Act",
                description: "The federal law requiring landlords to make reasonable ESA accommodations.",
                tilt: "hover:rotate-1",
                icon: "/icons/fair house act.webp",
              },
              {
                href: "/requirements/#hb-4164-compliance",
                label: "HB 4164 Explained",
                description: "Texas's own law limiting what landlords can ask for and penalizing fake letters.",
                tilt: "hover:-rotate-1",
                icon: "/icons/hb 4146.webp",
              },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative flex flex-col items-center gap-3 rounded-card border border-white/15 bg-white/10 p-7 text-center shadow-photo-dark backdrop-blur-md transition-all duration-300 hover:z-10 hover:scale-110 hover:border-white/30 hover:bg-white/15 hover:shadow-photo-dark-hover ${item.tilt}`}
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full  shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Image src={item.icon} alt="" width={232} height={232} className="object-contain" />
                </span>
                <h3 className="text-lg font-bold text-white">{item.label}</h3>
                <p className="text-sm leading-relaxed text-brand-100">{item.description}</p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-200">
                  Learn more
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    )
}