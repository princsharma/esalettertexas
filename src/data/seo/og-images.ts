/** Existing blog social card in `public/og/og-images/`. */
export const BLOG_OG_IMAGE =
  "/og/og-images/blog-fq/1x/ESA Letter Texas Blog.webp";

/**
 * Page-specific social images already in `public/og/og-images/`.
 * Keys are canonical paths. Unlisted pages keep the site-wide default.
 */
export const PAGE_OG_IMAGES: Record<string, string> = {
  "/": "/og/og-images/home/home page.webp",
  "/how-it-works/":
    "/og/og-images/Requirements/1x/hw our esa evelution work.webp",
  "/what-is-an-esa-letter/":
    "/og/og-images/resourase/1x/What Is an ESA Letter-.webp",
  "/how-to-get-an-esa-letter-in-texas/":
    "/og/og-images/resourase/1x/How to Get an ESA Letter in Texas.webp",
  "/requirements/":
    "/og/og-images/resourase/1x/Texas ESA Letter Requirements_1.webp",
  "/sample-letter/": "/og/og-images/resourase/1x/ESA Letter Sample.webp",
  "/cost/": "/og/og-images/resourase/1x/ESA Letter Cost in Texas.webp",
  "/renewal/": "/og/og-images/resourase/1x/ESA Letter Renewal.webp",
  "/conditions/":
    "/og/og-images/do i quelify/1x/Who Qualifies for an Emotional Support Animal in Texas-.webp",
  "/conditions/anxiety/":
    "/og/og-images/do i quelify/1x/Can You Get an ESA Letter for Anxiety in Texas.webp",
  "/conditions/depression/":
    "/og/og-images/do i quelify/1x/Can You Get an ESA Letter for Depression in Texas.webp",
  "/conditions/ptsd/":
    "/og/og-images/do i quelify/1x/Can You Get an ESA Letter for PTSD in Texas.webp",
  "/conditions/bipolar-disorder/":
    "/og/og-images/do i quelify/1x/Can You Get an ESA Letter for Bipolar Disorder in Texas.webp",
  "/conditions/panic-disorder/":
    "/og/og-images/do i quelify/1x/Can You Get an ESA Letter for Panic Disorder in Texas.webp",
  "/locations/":
    "/og/og-images/location/1x/ESA Letters in Texas — City Guide.webp",
  "/locations/houston/": "/og/og-images/location/1x/Houston.webp",
  "/locations/dallas/": "/og/og-images/location/1x/Dallas.webp",
  "/locations/austin/": "/og/og-images/location/1x/Austin.webp",
  "/locations/san-antonio/": "/og/og-images/location/1x/San Antonio.webp",
  "/locations/fort-worth/": "/og/og-images/location/1x/Fort Worth.webp",
  "/rights/": "/og/og-images/your rights/1x/Texas ESA Letter Requirements.webp",
  "/rights/fair-housing-act/":
    "/og/og-images/your rights/1x/The Fair Housing Act and Your ESA.webp",
  "/rights/hb-4164-explained/":
    "/og/og-images/your rights/1x/Texas HB 4164 Explained.webp",
  "/rights/esa-vs-service-animal/":
    "/og/og-images/your rights/1x/ESA vs. Service Animal.webp",
  "/rights/no-pet-apartments/":
    "/og/og-images/your rights/1x/ESAs in No-Pet Apartments.webp",
  "/rights/hoa-rules/":
    "/og/og-images/your rights/1x/HOAs and Emotional Support Animals.webp",
  "/blog/": BLOG_OG_IMAGE,
  "/blog/category/rights-housing/": BLOG_OG_IMAGE,
  "/blog/category/qualifying-conditions/": BLOG_OG_IMAGE,
  "/blog/category/texas-cities/": BLOG_OG_IMAGE,
  "/blog/category/esa-lifestyle-care/": BLOG_OG_IMAGE,
  "/blog/category/landlord-tenant-guides/": BLOG_OG_IMAGE,
  "/blog/category/news-policy-updates/": BLOG_OG_IMAGE,
  "/faq/": "/og/og-images/blog-fq/1x/Frequently Asked Questions.webp",
};
