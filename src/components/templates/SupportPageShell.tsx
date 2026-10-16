import type { ReactNode } from "react";
import { AuthorBox, Breadcrumbs, Hero } from "@/components/sections";
import type { BreadcrumbItem } from "@/components/sections";
import { Container } from "@/components/ui/Container";

/** T10 flexible support layout shared across FAQ, How It Works, legal, etc. */
export function SupportPageShell({
  breadcrumbs,
  title,
  subhead,
  children,
  narrow = true,
  reviewer,
  heroBackgroundImage,
}: {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  subhead?: string;
  children: ReactNode;
  narrow?: boolean;
  heroBackgroundImage?: string | null;
  reviewer?: {
    name: string;
    credentials: string;
    licenseState: string;
    reviewedDate: string;
    avatarSrc?: string;
  };
}) {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        variant="compact"
        eyebrow="ESA Letter Texas"
        title={title}
        subhead={subhead ?? ""}
        ctaLabel="Apply Now"
        ctaHref="/apply-now/"
        secondaryCtaLabel="How it works"
        secondaryCtaHref="/how-it-works/"
        backgroundImage={heroBackgroundImage ?? null}
      />
      <section className="section-py bg-white">
        <Container className={narrow ? "max-w-3xl" : undefined}>
          {reviewer && (
            <div className="not-prose mb-6 sm:mb-8">
              <AuthorBox {...reviewer} />
            </div>
          )}
          <div
            className="min-w-0 text-base leading-relaxed text-neutral-700 sm:text-lg [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900 sm:[&_h2]:text-2xl [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-neutral-900 sm:[&_h3]:text-xl [&_p]:mt-4 [&_a]:font-semibold [&_a]:text-brand-700 [&_a]:underline-offset-2 hover:[&_a]:underline"
          >
            {children}
          </div>
        </Container>
      </section>
    </>
  );
}
