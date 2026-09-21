import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DEFAULT_PROCESS_STEPS, type ProcessStep } from "@/data/process-steps";

export function ProcessSteps({
  steps = DEFAULT_PROCESS_STEPS,
}: {
  steps?: ProcessStep[];
}) {
  return (
    <div id="how-it-works" className="scroll-mt-20">
      <section className="relative overflow-hidden bg-gradient-hero section-py">
        {/* Decorative ambient glow — echoes the Hero's treatment */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-accent-400/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-brand-300/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px]"
        />

        <Container className="relative">
          <SectionHeading
            eyebrow="How It Works"
            title="How Our ESA Evaluation Process Works"
            subhead="From assessment to signed letter — and beyond — here's exactly what to expect, step by step."
            align="center"
            tone="light"
          />

          <ol className="relative mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-4">
            {/* Connecting line — threads behind the avatars; vertical on mobile, horizontal on desktop */}
            <div
              aria-hidden="true"
              className="absolute left-10 top-2 bottom-2 w-px bg-gradient-to-b from-white/0 via-white/25 to-white/0 md:left-[12.5%] md:right-[12.5%] md:top-10 md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
            />

            {steps.map((step, i) => (
              <li
                key={step.title}
                className="group relative flex items-start gap-5 md:flex-col md:items-center md:gap-0 md:text-center"
              >
                <div className="relative flex-none">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-white/15 transition-all duration-300 group-hover:ring-accent-600 
                  md:h-50 md:w-50">
                    {step.image && (
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="200px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                  </div>
                  <span className="absolute -bottom-1.5 -right-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-accent-600 text-md font-bold text-white shadow-md shadow-accent-900/40 ring-2 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                    {i + 1}
                  </span>
                </div>

                <div className="pt-1 md:mt-6 md:pt-0">
                  <h3 className="text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 max-w-[16rem] text-sm leading-relaxed text-neutral-950 md:mx-auto">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  );
}
