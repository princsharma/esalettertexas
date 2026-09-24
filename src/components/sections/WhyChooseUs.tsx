import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

type WhyItem = { title: string; description: string; icon: string };

const WHY_ITEMS: WhyItem[] = [
  {
    title: "Licensed Professionals",
    description:
      "Every evaluation is conducted by an independent, licensed Texas mental health professional authorized to assess ESA eligibility.",
    icon: "/icons/Licensed Professionals.webp",
  },
  {
    title: "Fast, Simple Process",
    description:
      "Complete your assessment online in minutes and get your reviewed letter in as little as 24-48 hours, no office visits required.",
    icon: "/icons/Fast, Simple Process.webp",
  },
  {
    title: "100% Confidential & HIPAA Compliant",
    description:
      "Your information is encrypted and protected under HIPAA at every step, from assessment to delivery.",
    icon: "/icons/100_ Confidential & HIPAA Compliant.webp",
  },
  {
    title: "Legally Compliant Documentation",
    description:
      "Every letter meets Fair Housing Act and Texas HB 4164 requirements, and is accepted by landlords, HOAs, and airlines.",
    icon: "/icons/Legally Compliant Documentation.webp",
  },
  {
    title: "Moneyback Guarantee",
    description:
      "If you don't qualify after your evaluation, you get a full refund, no questions asked.",
    icon: "/icons/Moneyback Guarantee.webp",
  },
  {
    title: "Ongoing Support & Verification",
    description:
      "Need help with a landlord or property manager? Our team provides unlimited letter verification and renewal reminders.",
    icon: "/icons/Ongoing Support & Verification.webp",
  },
];

function WhyCard({ item }: { item: WhyItem }) {
  return (
    <li className="animate-fade-up group relative flex min-h-[15.5rem] flex-col gap-5 rounded-card border border-brand-100 bg-brand-50/70 p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:bg-white hover:shadow-card-hover">

        <Image src={item.icon} alt="" width={120} height={120} className="object-contain" />
      <div>
        <h3 className="text-base font-bold text-neutral-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-950">{item.description}</p>
      </div>
    </li>
  );
}


export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white section-py">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent-100/50 blur-3xl"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Texans Choose ESA Letter Texas"
          subhead="We make online ESA evaluations simple, secure, and fully compliant with Texas law; here's what sets us apart from other providers."
          align="center"
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_ITEMS.map((item) => (
            <WhyCard key={item.title} item={item} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
