# Handover checklist — ESA Letter Texas

## Responsive templates (360 / 768 / 1280 / 1920)

| Status | Notes |
|--------|--------|
| **Manual QA** | Templates use Tailwind breakpoints (`sm`, `md`, `lg`). Spot-check key routes: `/`, `/rights/fair-housing-act/`, `/conditions/anxiety/`, `/locations/houston/`, `/blog/[slug]/`, `/apply-now/` at 360, 768, 1280, 1920 px before launch. |

## Indexing & GSC

| Status | Notes |
|--------|--------|
| **noindex removed** | `src/app/robots.ts` allows `/`. Per-page `noindex` only on utility routes (`/sitemap/`, `/search/`). |
| **Sitemap** | Submit `https://<domain>/sitemap.xml` in Search Console. Human table: `/sitemap/`. |
| **GSC verification** | Set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in production `.env` (see `.env.example`), deploy, then verify property in GSC. |

## Category → pillar & M7

| Status | Notes |
|--------|--------|
| **Done** | `pillarHref` on each category in `src/data/blog/categories.ts`. |
| **Done** | M7 on pillars: `CONDITIONS_BLOG_POSTS`, `RIGHTS_BLOG_POSTS`, `LOCATIONS_BLOG_POSTS` via `getPostsForPillarM7()`. |

## Breadcrumbs & schema (Rich Results)

| Status | Notes |
|--------|--------|
| **Done** | `BreadcrumbList` JSON-LD with absolute URLs; pass `pageUrl` on `Breadcrumbs` when the last crumb has no link. |
| **Done** | Sitewide `Organization` + `WebSite` (+ `SearchAction` → `/search/`). |
| **Manual** | Run [Rich Results Test](https://search.google.com/test/rich-results) on home, one cluster, one blog post, one FAQ page. |

## Internal linking (§6)

| Status | Notes |
|--------|--------|
| **Done** | Enforced at build: `npm run validate:links` (see `src/lib/validate-internal-links.ts`). |
| **Editorial** | Every post should set explicit `siloLink` in `src/data/blog/posts.ts`; build warns if missing. |

## Analytics & `/apply-now/`

| Status | Notes |
|--------|--------|
| **Ready** | Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` and/or `NEXT_PUBLIC_GTM_CONTAINER_ID`. |
| **Done** | Events: `apply_now_page_view`, `apply_assessment_start`, `apply_assessment_submit` — no field values or URL PHI. |
| **Manual** | Map events to conversions in GA4/GTM after deploy. |

## 404, search, redirects

| Status | Notes |
|--------|--------|
| **Done** | `src/app/not-found.tsx` |
| **Done** | `/search/?q=` — `src/lib/site-search.ts` (not in main nav; linked from 404). |
| **Done** | `src/data/redirects.ts` → `next.config.ts` `redirects()`. Add legacy URLs there as needed. |
