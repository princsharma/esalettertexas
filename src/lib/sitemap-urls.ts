/**
 * Sitemap URL registry — mirrors IA build phases (51 templated URLs + blog posts).
 * Used by `/sitemap.xml` and the human-readable `/sitemap/` index.
 */
import { BLOG_CATEGORIES } from "@/data/blog/categories";
import { BLOG_POSTS } from "@/data/blog/posts";
import { TEAM } from "@/data/team";
import { CONDITION_CLUSTER_SLUGS } from "@/data/silos/conditions-clusters";
import { LOCATION_CITY_SLUGS } from "@/data/silos/locations-cities";
import { RIGHTS_CLUSTER_SLUGS } from "@/data/silos/rights-clusters";

export type SitemapUrl = {
  path: string;
  label: string;
  /** ISO date when known (blog posts). */
  lastModified?: string;
};

export type SitemapSection = {
  phase: number;
  title: string;
  urls: SitemapUrl[];
};

const CORE_PATHS: SitemapUrl[] = [
  { path: "/what-is-an-esa-letter/", label: "What Is an ESA Letter?" },
  { path: "/how-to-get-an-esa-letter-in-texas/", label: "How to Get an ESA Letter in Texas" },
  { path: "/requirements/", label: "Texas ESA Letter Requirements" },
  { path: "/sample-letter/", label: "ESA Letter Sample" },
  { path: "/cost/", label: "ESA Letter Cost in Texas" },
  { path: "/renewal/", label: "ESA Letter Renewal" },
];

const THERAPIST_PROFILE_PATHS: SitemapUrl[] = TEAM.map((m) => ({
  path: `/about-our-therapists/${m.slug}/`,
  label: `${m.name} — therapist profile`,
}));

const SUPPORT_PATHS: SitemapUrl[] = [
  { path: "/how-it-works/", label: "How It Works" },
  { path: "/faq/", label: "FAQ" },
  { path: "/about-our-therapists/", label: "About Our Therapists" },
  ...THERAPIST_PROFILE_PATHS,
  { path: "/contact/", label: "Contact" },
];

const LEGAL_PATHS: SitemapUrl[] = [
  { path: "/privacy-policy/", label: "Privacy Policy" },
  { path: "/terms/", label: "Terms of Service" },
  { path: "/disclaimer/", label: "Disclaimer" },
  { path: "/apply-now/", label: "Apply Now" },
];

function categoryUrls(slugs: string[]): SitemapUrl[] {
  return slugs.map((slug) => {
    const cat = BLOG_CATEGORIES.find((c) => c.slug === slug);
    return {
      path: `/blog/category/${slug}/`,
      label: cat?.name ?? slug,
    };
  });
}

/** Grouped sections matching the phased build plan. */
export function getSitemapSections(): SitemapSection[] {
  const rightsClusters: SitemapUrl[] = RIGHTS_CLUSTER_SLUGS.map((slug) => ({
    path: `/rights/${slug}/`,
    label: slug.replace(/-/g, " "),
  }));

  const conditionClusters: SitemapUrl[] = CONDITION_CLUSTER_SLUGS.map((slug) => ({
    path: `/conditions/${slug}/`,
    label: slug.replace(/-/g, " "),
  }));

  const cityPages: SitemapUrl[] = LOCATION_CITY_SLUGS.map((slug) => ({
    path: `/locations/${slug}/`,
    label: slug.replace(/-/g, " "),
  }));

  const blogPosts: SitemapUrl[] = BLOG_POSTS.map((post) => ({
    path: `/blog/${post.slug}/`,
    label: post.title,
    lastModified: post.seo?.dateModified ?? post.publishedAt,
  }));

  return [
    {
      phase: 0,
      title: "Support pages (4)",
      urls: SUPPORT_PATHS,
    },
    {
      phase: 0,
      title: "Legal & policy (4)",
      urls: LEGAL_PATHS,
    },
    {
      phase: 2,
      title: "Home",
      urls: [{ path: "/", label: "Home" }],
    },
    {
      phase: 2,
      title: "Core pages (6)",
      urls: CORE_PATHS,
    },
    {
      phase: 2,
      title: "/rights/ silo — pillar + 11 clusters",
      urls: [{ path: "/rights/", label: "Texas ESA Laws & Housing Rights (pillar)" }, ...rightsClusters],
    },
    {
      phase: 2,
      title: "Blog hub + Rights & Housing / Landlord–Tenant categories",
      urls: [
        { path: "/blog/", label: "Blog hub" },
        ...categoryUrls(["rights-housing", "landlord-tenant-guides"]),
      ],
    },
    {
      phase: 3,
      title: "/conditions/ silo — pillar + 10 condition pages",
      urls: [
        { path: "/conditions/", label: "Who Qualifies (pillar)" },
        ...conditionClusters,
      ],
    },
    {
      phase: 3,
      title: "Qualifying Conditions / Lifestyle & Pet Care categories",
      urls: categoryUrls(["qualifying-conditions", "esa-lifestyle-care"]),
    },
    {
      phase: 4,
      title: "/locations/ silo — pillar + 5 city pages",
      urls: [{ path: "/locations/", label: "ESA Letters by Texas City (pillar)" }, ...cityPages],
    },
    {
      phase: 4,
      title: "Texas Cities category",
      urls: categoryUrls(["texas-cities"]),
    },
    {
      phase: 5,
      title: "News & Policy Updates category (freshness feed)",
      urls: categoryUrls(["news-policy-updates"]),
    },
    {
      phase: 5,
      title: "Blog posts",
      urls: blogPosts,
    },
  ];
}

/** Flat, de-duplicated list for sitemap.xml (templated + posts). */
export function getSitemapUrls(): SitemapUrl[] {
  const seen = new Set<string>();
  const flat: SitemapUrl[] = [];
  for (const section of getSitemapSections()) {
    for (const url of section.urls) {
      const key = url.path.endsWith("/") ? url.path : `${url.path}/`;
      if (seen.has(key)) continue;
      seen.add(key);
      flat.push({ ...url, path: key });
    }
  }
  return flat;
}

/** Count templated URLs (excludes individual blog post URLs). */
export function countTemplatedSitemapUrls(): number {
  const seen = new Set<string>();
  let n = 0;
  for (const section of getSitemapSections()) {
    if (section.title === "Blog posts") continue;
    for (const url of section.urls) {
      if (seen.has(url.path)) continue;
      seen.add(url.path);
      n++;
    }
  }
  return n;
}
