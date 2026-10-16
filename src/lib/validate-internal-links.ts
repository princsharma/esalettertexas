/**
 * Internal linking rules (build / publish-time).
 * See editorial checklist in project docs — failures block production builds.
 */
import { BLOG_CATEGORIES } from "@/data/blog/categories";
import { BLOG_POSTS } from "@/data/blog/posts";
import {
  getAllowedSiloHrefsForCategory,
  getCategoryBySlug,
  getCategorySlugsForPillar,
  getRelatedPosts,
  hrefMatchesSiloRoots,
  resolveSiloLink,
} from "@/lib/blog";

const SILO_PILLARS = ["/rights/", "/conditions/", "/locations/"] as const;

export type ValidationResult = {
  errors: string[];
  warnings: string[];
};

export function validateInternalLinks(): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const cat of BLOG_CATEGORIES) {
    if (!SILO_PILLARS.includes(cat.pillarHref as (typeof SILO_PILLARS)[number])) {
      errors.push(
        `Category "${cat.slug}" must map to a silo pillar (/rights/, /conditions/, or /locations/), got ${cat.pillarHref}`,
      );
    }
    if (cat.supportingPillars?.length) {
      for (const p of cat.supportingPillars) {
        if (!SILO_PILLARS.includes(p.href as (typeof SILO_PILLARS)[number])) {
          errors.push(`Category "${cat.slug}" supporting pillar must be a silo root: ${p.href}`);
        }
      }
    }
  }

  for (const post of BLOG_POSTS) {
    if (!getCategoryBySlug(post.categorySlug)) {
      errors.push(`[blog] "${post.slug}": unknown category "${post.categorySlug}"`);
      continue;
    }

    const silo = resolveSiloLink(post);
    const allowed = getAllowedSiloHrefsForCategory(post.categorySlug);
    if (!hrefMatchesSiloRoots(silo.href, allowed)) {
      errors.push(
        `[blog] "${post.slug}": silo link ${silo.href} must be under ${allowed.join(" or ")}`,
      );
    }

    if (!post.siloLink) {
      warnings.push(
        `[blog] "${post.slug}": no explicit siloLink — using pillar fallback (editorial checklist)`,
      );
    }

    const related = getRelatedPosts(post, 2);
    if (related.length > 2) {
      errors.push(`[blog] "${post.slug}": at most 2 related posts (same category)`);
    }
    for (const r of related) {
      if (r.categorySlug !== post.categorySlug) {
        errors.push(
          `[blog] "${post.slug}": related "${r.slug}" must be same category (no cross-category sideways links)`,
        );
      }
    }
  }

  for (const pillar of SILO_PILLARS) {
    const slugs = getCategorySlugsForPillar(pillar);
    const count = BLOG_POSTS.filter((p) => slugs.includes(p.categorySlug)).length;
    if (count === 0) {
      warnings.push(`[m7] No blog posts mapped to pillar ${pillar}`);
    }
  }

  return { errors, warnings };
}

/** Run during `next build` (instrumentation). Warnings log; errors fail the build. */
export function runInternalLinkValidation(): void {
  const { errors, warnings } = validateInternalLinks();
  for (const w of warnings) {
    console.warn(`[internal-links] ${w}`);
  }
  if (errors.length > 0) {
    for (const e of errors) {
      console.error(`[internal-links] ${e}`);
    }
    throw new Error(`Internal link validation failed with ${errors.length} error(s).`);
  }
}
