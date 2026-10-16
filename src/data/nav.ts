import { CONDITION_CLUSTER_CARDS } from "@/data/silos/conditions";
import { LOCATION_CITY_CARDS } from "@/data/silos/locations";
import { RIGHTS_CLUSTER_CARDS } from "@/data/silos/rights";

export type NavLink = { label: string; href: string };

export type NavDropdown = {
  type: "dropdown";
  id: string;
  label: string;
  href: string;
  items: NavLink[];
  viewAllLabel: string;
};

export type NavItem = NavLink & { type: "link" } | NavDropdown;

function topFive(cards: { title: string; href: string }[]): NavLink[] {
  return cards.slice(0, 5).map((c) => ({ label: c.title, href: c.href }));
}

/** Primary header navigation — keep in sync with IA spec. */
export const MAIN_NAV: NavItem[] = [
  { type: "link", label: "How It Works", href: "/how-it-works/" },
  { type: "link", label: "Requirements", href: "/requirements/" },
  {
    type: "dropdown",
    id: "rights",
    label: "Your Rights",
    href: "/rights/",
    viewAllLabel: "All housing rights guides",
    items: topFive(RIGHTS_CLUSTER_CARDS),
  },
  {
    type: "dropdown",
    id: "conditions",
    label: "Do I Qualify?",
    href: "/conditions/",
    viewAllLabel: "Who qualifies overview",
    items: topFive(CONDITION_CLUSTER_CARDS),
  },
  {
    type: "dropdown",
    id: "locations",
    label: "Locations",
    href: "/locations/",
    viewAllLabel: "All Texas cities",
    items: topFive(LOCATION_CITY_CARDS),
  },
  { type: "link", label: "Blog", href: "/blog/" },
  { type: "link", label: "FAQ", href: "/faq/" },
];

/** Resources dropdown (guide pages) — unchanged from original header. */
export const RESOURCE_LINKS: NavLink[] = [
  { label: "What Is an ESA Letter?", href: "/what-is-an-esa-letter/" },
  { label: "How to Get One in Texas", href: "/how-to-get-an-esa-letter-in-texas/" },
  { label: "Requirements", href: "/requirements/" },
  { label: "Sample Letter", href: "/sample-letter/" },
  { label: "Cost", href: "/cost/" },
  { label: "Renewal", href: "/renewal/" },
];

export const HEADER_CTA_LABEL = "Get Your ESA Letter";
export const HEADER_CTA_HREF = "/apply-now/";
