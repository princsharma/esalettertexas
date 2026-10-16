import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/components/sections/BlogGrid";

export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={post.href}
      className="animate-fade-up group relative flex flex-col overflow-hidden rounded-card border border-neutral-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:rotate-1 hover:border-brand-300 hover:shadow-card-brand"
    >
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
        <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">{post.excerpt}</p>

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
  );
}
