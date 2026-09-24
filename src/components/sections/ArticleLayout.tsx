import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { TableOfContents, type TocItem, type TocImage } from "./TableOfContents";
import { RelatedPages, type RelatedLink } from "./RelatedPages";
import { AuthorBox } from "./AuthorBox";
import { StickySidebar } from "./StickySidebar";

type Author = {
  name: string;
  credentials: string;
  licenseState: string;
  reviewedDate: string;
  avatarSrc?: string;
};

export function ArticleLayout({
  toc,
  tocImage,
  related,
  author,
  children,
}: {
  toc: TocItem[];
  tocImage?: TocImage;
  related: RelatedLink[];
  author: Author;
  children: ReactNode;
}) {
  const sidebar = (
    <>
      <RelatedPages links={related} />
      <AuthorBox {...author} />
    </>
  );

  return (
    <section className="relative bg-gradient-article section-py">
      {/* Decorative blur/grid layer only - kept in its own overflow-hidden wrapper (instead of on
          the section itself) so it doesn't clip the sticky sidebar's `position: fixed` rail, which
          needs to keep painting even after this section has scrolled out of the viewport. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -left-28 h-96 w-96 rounded-full bg-brand-100/50 blur-3xl" />
        <div className="absolute -bottom-32 -right-20 h-[26rem] w-[26rem] rounded-full bg-accent-100/30 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--color-neutral-200)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,black_25%,transparent_100%)]" />
      </div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_18rem] lg:gap-12">
          <div className="min-w-0 overflow-hidden rounded-card border border-neutral-200 bg-white p-6 shadow-card sm:p-10 lg:p-12">
            <div className="space-y-10">
              <TableOfContents items={toc} image={tocImage} />
              {children}
            </div>
          </div>

          <aside className="hidden lg:block">
            <StickySidebar boundarySelector="#final-cta">{sidebar}</StickySidebar>
          </aside>
        </div>

        <div className="mt-8 space-y-6 lg:hidden">{sidebar}</div>
      </Container>
    </section>
  );
}
