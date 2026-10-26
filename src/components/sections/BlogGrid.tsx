import type { ReactNode } from "react";
import Link from "next/link";
import { BlogPostCard } from "@/components/blog/BlogPostCard";
import { resolveViewAllHref } from "@/lib/blog";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  /** Drives M7 “View all” → `/blog/category/{slug}/` via category pillar mapping */
  categorySlug?: string;
  date: string;
  image?: string;
};

/**
 * M7: Latest from the Blog.
 * Auto-pulls the newest posts from a mapped blog category. Required on all 3 pillar pages.
 * `posts` is passed in for now; wire to a CMS/content query later.
 */
export function BlogGrid({
  posts,
  title,
  subhead,
  viewAllHref,
}: {
  posts: BlogPost[];
  title?: ReactNode;
  subhead?: string;
  /** Optional override; otherwise resolved from the first post’s category CMS mapping */
  viewAllHref?: string;
}) {
  const archiveHref = viewAllHref ?? resolveViewAllHref(posts);
  const resolvedTitle =
    title ?? (
      <>
        Latest From the <span className="text-accent-600">Blog</span>
      </>
    );

  return (
       <div id="blog" className="scroll-mt-20">
    <section className="relative overflow-hidden bg-brand-50 section-py">
      {/* Background effect: soft brand/accent glows, matching the other mint sections */}
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
          <SectionHeading eyebrow="Blog" title={resolvedTitle} subhead={subhead} align="center" />
          <Link
            href={archiveHref}
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

        <div className="card-grid mt-10">
          {posts.map((post) => (
            <BlogPostCard key={post.href} post={post} />
          ))}
        </div>
      </Container>
    </section>
    </div>
  );
}
