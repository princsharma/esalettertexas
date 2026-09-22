/**
 * Curated hero background photos: direct Unsplash CDN links, each
 * downloaded and visually verified (cute, on-topic, no third-party
 * branding) before being added here. `source.unsplash.com`'s keyword
 * redirect was tried first but that service is discontinued (503).
 * Swap HERO_IMAGE or pass a different `image` prop to <Hero /> to try
 * one of the alternates.
 */
export const HERO_IMAGES = {
  /** Smiling beagle, close up outdoors */
  dog: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1920&q=80",
  /** Cat in a yellow bandana, mid-meow */
  cat: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1920&q=80",
  /** Ginger long-haired cat, relaxed indoors */
  catAlt: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1920&q=80",
  /** Person cuddling a black-and-white cat in a cozy sweater */
  catHug: "https://images.unsplash.com/photo-1642112312529-7c870afa6382?auto=format&fit=crop&w=1920&q=80",
  /** Warm, smiling headshot used as the reviewing-therapist avatar */
  therapist: "https://images.unsplash.com/photo-1705645930353-0e335311ef20?auto=format&fit=crop&w=400&q=80",
  /** Close-up hands signing a document, no faces or text visible */
  documentSign: "https://images.unsplash.com/photo-1763729805496-b5dbf7f00c79?auto=format&fit=crop&w=800&q=80",
  /** Warm shot of a hand holding house-shaped keys at a bright doorway */
  newKeys: "https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?auto=format&fit=crop&w=800&q=80",
} as const;

export const HERO_IMAGE = HERO_IMAGES.dog;
