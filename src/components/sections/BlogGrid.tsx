import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  date: string;
  image?: string;
};

/**
 * M7 — Latest from the Blog.
 * Auto-pulls the newest posts from a mapped blog category. Required on all 3 pillar pages.
 * `posts` is passed in for now; wire to a CMS/content query later.
 */
export function BlogGrid({
  posts,
  title = "Latest From the Blog",
  subhead,
  viewAllHref = "/#apply",
}: {
  posts: BlogPost[];
  title?: string;
  subhead?: string;
  viewAllHref?: string;
}) {
  return (
       <div id="blog" className="scroll-mt-20">
    <section className="relative overflow-hidden bg-brand-50 section-py">
      {/* Background effect — soft brand/accent glows, matching the other mint sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-1/4 h-80 w-80 translate-x-1/2 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionHeading eyebrow="Blog" title={title} subhead={subhead} align="center" />
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700 transition-all duration-200 hover:border-brand-400 hover:bg-brand-50"
          >
            View all posts
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post,index) => (
            <Link
              key={index}
              href={post.href}
              className="animate-fade-up group relative flex flex-col overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:border-brand-300 hover:shadow-[0_25px_45px_-15px_rgba(28,88,82,0.35)]"
            >
              {/* Thumbnail banner — real photo when provided, icon fallback otherwise */}
              <div className="relative aspect-[4/3] flex-none overflow-hidden bg-gradient-brand">
                {post.image ? (
                  <>
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/5 to-transparent" />
                  </>
                ) : (
                  <>
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:20px_20px]"
                    />
                    <div className="flex h-full items-center justify-center">
                      <svg
                        className="relative h-9 w-9 text-white/90 transition-transform duration-300 group-hover:scale-110"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h3a1 1 0 100-2H7z" />
                      </svg>
                    </div>
                  </>
                )}
                <span className="absolute left-3 top-3 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-500">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-bold text-neutral-900 transition-colors group-hover:text-brand-700">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3.5">
                  <time className="text-xs text-neutral-500">{post.date}</time>
                  <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold text-brand-600 transition-all duration-300 group-hover:bg-brand-50 group-hover:px-3 group-hover:text-brand-700">
                    Read
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1.5"
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
    </div>
  );
}
