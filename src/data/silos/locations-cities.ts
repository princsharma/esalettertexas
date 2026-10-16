/**
 * City page content — intended for CMS migration.
 * Each record's `cityInfoPanel` (M14) and `sections` must stay city-specific;
 * do not publish copy that only swaps the city name.
 */
import type { PageSeoFields } from "@/data/seo/types";
import type { FaqItem, RelatedLink, TocItem } from "@/components/sections";
import type { ClusterSection } from "@/components/templates/SiloClusterPage";
import type { CityResource, CityStat } from "@/components/sections";

export type CityCmsRecord = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  cityName: string;
  heroTitle: string;
  heroSubhead: string;
  quickAnswer: string;
  cityInfoPanel: {
    stats: CityStat[];
    localRules: string[];
    resources: CityResource[];
  };
  sections: ClusterSection[];
  faqs: FaqItem[];
  relatedRights: RelatedLink[];
  tocImage?: { src: string; alt: string };
  /** Optional CMS SEO overrides (canonical, robots, OG). */
  seo?: Partial<PageSeoFields>;
};

function tocFromSections(sections: ClusterSection[]): TocItem[] {
  return sections.map((s) => ({ id: s.id, label: s.title }));
}

export const LOCATION_CITY_SLUGS = [
  "houston",
  "dallas",
  "austin",
  "san-antonio",
  "fort-worth",
] as const;

export type LocationCitySlug = (typeof LOCATION_CITY_SLUGS)[number];

export const LOCATION_CITIES: Record<LocationCitySlug, CityCmsRecord> = {
  houston: {
    slug: "houston",
    metaTitle: "ESA Letters in Houston, Texas | ESA Letter Texas",
    metaDescription:
      "Houston rental market, landlord practices, local animal rules, and ESA accommodation with a Texas-licensed letter.",
    cityName: "Houston",
    heroTitle: "ESA Letters in Houston, Texas",
    heroSubhead:
      "Navigate Harris County’s large rental market and property-manager expectations with FHA-backed documentation.",
    quickAnswer:
      "Houston renters with valid ESA letters can request reasonable accommodation under the Fair Housing Act even when leases ban pets. Local pet registration and breed policies do not override federal housing rights when documentation is reliable.",
    cityInfoPanel: {
      stats: [
        { label: "Renter-occupied households (metro)", value: "~55%" },
        { label: "Typical lease term", value: "12 months" },
        { label: "Pet deposit (pets, not ESAs)", value: "Often $300–$600" },
      ],
      localRules: [
        "City of Houston requires annual registration for dogs and cats four months and older (separate from ESA housing status).",
        "Harris County rabies vaccination rules apply; keep records available if a landlord requests routine pet compliance after accommodation is granted.",
        "Breed-specific insurance lists appear in some suburban HOA communities—FHA still requires individualized ESA review.",
      ],
      resources: [
        { label: "HUD Fair Housing — file a complaint", href: "https://www.hud.gov/fairhousing" },
        { label: "Texas Workforce Commission — housing discrimination", href: "https://www.twc.texas.gov/" },
        { label: "City of Houston — Animal Shelter & Adoption", href: "https://www.houstontx.gov/health/Animal-Regulations/" },
      ],
    },
    sections: [
      {
        id: "local-housing-market",
        title: "Local Housing & Rental Market",
        paragraphs: [
          "Houston’s sprawl means renters often deal with national REITs, mid-size management firms, and individual landlords across Harris, Fort Bend, and Montgomery counties. High turnover in mid-rise complexes near the Medical Center and Galleria correlates with repeated pet-policy screening at lease renewal.",
          "Expect online portals to flag ‘pet’ questions even for ESAs—submit your accommodation request and letter before move-in or at renewal so fees are not auto-assessed.",
        ],
      },
      {
        id: "landlord-practices",
        title: "Local Landlord Practices",
        paragraphs: [
          "Many Houston operators use third-party verification services trained on Texas HB 4164. They may verify your provider’s license but cannot demand registry IDs or instant-letter mill formats.",
          "Document every email to leasing agents; hurricane-season displacement and FEMA hotel stays occasionally trigger temporary housing requests where your letter should travel with you.",
        ],
      },
      {
        id: "local-ordinances",
        title: "Local Ordinances",
        paragraphs: [
          "Municipal animal control rules cover vaccination and registration—they are not a substitute for fair housing accommodation. After approval, comply with leash and waste ordinances to avoid conduct-based disputes.",
        ],
      },
      {
        id: "esa-friendly-resources",
        title: "ESA-Friendly Areas & Resources",
        paragraphs: [
          "Inner-loop neighborhoods mix older duplex stock (often private landlords) with newer no-pet high-rises. Mid-county suburbs see more HOA oversight—pair your letter with our HB 4164 guide if a master association gets involved.",
          "Veterans and medical workers near the Texas Medical Center frequently request ESAs for shift-related anxiety; keep employer relocation timelines in mind when scheduling your therapist evaluation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do Houston landlords always accept ESAs?",
        answer: "Covered housing must consider reasonable requests; denial requires specific, individualized reasons—not a blanket no-pets rule.",
      },
      {
        question: "Does Harris County charge pet fees for ESAs?",
        answer: "Assistance animals are not pets under the FHA; pet rent and deposits should be waived with approved accommodation.",
      },
    ],
    relatedRights: [
      { label: "ESAs in No-Pet Apartments", href: "/rights/no-pet-apartments/" },
      { label: "Pet Deposits and Fees", href: "/rights/pet-deposits-and-fees/" },
      { label: "Landlord Denials", href: "/rights/landlord-denials/" },
    ],
    tocImage: { src: "/images/residential_lease_keys.webp", alt: "Houston ESA letter and rental housing" },
  },

  dallas: {
    slug: "dallas",
    metaTitle: "ESA Letters in Dallas, Texas | ESA Letter Texas",
    metaDescription:
      "Dallas–Fort Worth apartment trends, ESA requests, and local resources for emotional support animal letters.",
    cityName: "Dallas",
    heroTitle: "ESA Letters in Dallas, Texas",
    heroSubhead:
      "DFW’s competitive lease market and corporate landlords—how to document your ESA correctly.",
    quickAnswer:
      "Dallas renters can use a compliant ESA letter to request waiver of pet restrictions in most covered apartments. Texas and federal law apply equally in Dallas County; local pet limits do not automatically block accommodation.",
    cityInfoPanel: {
      stats: [
        { label: "Apartment units (Dallas city)", value: "300k+" },
        { label: "Average asking rent (1BR, trend)", value: "Check local MLS" },
        { label: "Common PM software", value: "Yardi / RealPage" },
      ],
      localRules: [
        "Dallas city code requires restraint and sanitation for animals in public; registration rules vary by suburb—Dallas, Garland, and Plano differ.",
        "Dallas Animal Services handles city licensing and lost-pet reporting.",
        "Some Uptown and Deep Ellum leases include explicit breed schedules—FHA still requires case-by-case ESA review.",
      ],
      resources: [
        { label: "Dallas Fair Housing Office (city)", href: "https://dallascityhall.com/" },
        { label: "Dallas Animal Services", href: "https://www.dallasanimalservices.org/" },
        { label: "Fair Housing Act overview", href: "/rights/fair-housing-act/" },
      ],
    },
    sections: [
      {
        id: "local-housing-market",
        title: "Local Housing & Rental Market",
        paragraphs: [
          "North Dallas and Las Colinas attract corporate transferees signing 12–15 month leases with mandatory pet addenda. Budget for time to negotiate ESA language before countersigning—portals may auto-charge pet rent until accommodation is recorded.",
          "Older Lakewood and Bishop Arts inventory often means individual owners who may be less familiar with HB 4164; polite education plus a compliant letter resolves many cases.",
        ],
      },
      {
        id: "landlord-practices",
        title: "Local Landlord Practices",
        paragraphs: [
          "DFW property managers frequently batch-verify licenses through Texas behavioral health boards. Keep your therapist’s LPC/LCSW number visible on the letter.",
          "Denials citing ‘insurance breed restrictions’ should be challenged with HUD guidance requesting individualized assessment.",
        ],
      },
      {
        id: "local-ordinances",
        title: "Local Ordinances",
        paragraphs: [
          "Dallas noise and tethering ordinances apply to all dogs; they are separate from whether your ESA may live in covered housing. Collar tags and city registration do not prove ESA status—your provider letter does.",
        ],
      },
      {
        id: "esa-friendly-resources",
        title: "ESA-Friendly Areas & Resources",
        paragraphs: [
          "Transit-oriented rentals near DART lines see younger renters with ESAs for anxiety; ask about elevator weight limits only for actual safety issues, not breed stereotypes.",
          "Irving and Farmers Branch additions to DFW jobs base mean cross-city commuting—choose a Texas-licensed evaluator to reduce landlord pushback.",
        ],
      },
    ],
    faqs: [
      {
        question: "Are ESAs allowed in downtown Dallas high-rises?",
        answer: "Most professionally managed towers are FHA-covered; submit accommodation before move-in.",
      },
    ],
    relatedRights: [
      { label: "Breed and Size Restrictions", href: "/rights/breed-and-size-restrictions/" },
      { label: "HOA Rules", href: "/rights/hoa-rules/" },
    ],
    tocImage: { src: "/images/residential_lease_keys.webp", alt: "Dallas ESA housing guide" },
  },

  austin: {
    slug: "austin",
    metaTitle: "ESA Letters in Austin, Texas | ESA Letter Texas",
    metaDescription:
      "Austin rentals, UT-adjacent housing, animal ordinances, and ESA letters for Travis County renters.",
    cityName: "Austin",
    heroTitle: "ESA Letters in Austin, Texas",
    heroSubhead:
      "Fast-growing Austin leases, student housing, and how state/federal ESA rules interact locally.",
    quickAnswer:
      "Austin renters with disability-related need and a valid ESA letter may request reasonable accommodation in most rental housing, including many large complexes near UT and the Domain. City leash and licensing rules still apply to animal care.",
    cityInfoPanel: {
      stats: [
        { label: "Renter share (city, trend)", value: "~48%" },
        { label: "Student housing impact", value: "High near UT" },
        { label: "Typical pet fee (non-ESA)", value: "$25–$50/mo" },
      ],
      localRules: [
        "City of Austin requires dogs and cats over four months to be licensed and vaccinated for rabies.",
        "Austin’s leash ordinance applies in parks and trails; ESAs do not receive off-leash public access by default.",
        "Some East Austin and Mueller developments use HOA overlays—check both landlord and association rules.",
      ],
      resources: [
        { label: "Austin Animal Services", href: "https://www.austintexas.gov/department/animal-services" },
        { label: "ESAs in College Dorms", href: "/rights/college-dorm-esa/" },
        { label: "Texas HB 4164 Explained", href: "/rights/hb-4164-explained/" },
      ],
    },
    sections: [
      {
        id: "local-housing-market",
        title: "Local Housing & Rental Market",
        paragraphs: [
          "Austin’s post-2020 supply wave added thousands of uniform pet policies in Mueller, Domain, and Riverside corridors. Automated lease systems may flag animals until you upload accommodation paperwork—do it during application, not after move-in.",
          "Short-term corporate housing near the Capitol rarely qualifies as long-term tenancy; get clarity on duration before relying on an ESA letter.",
        ],
      },
      {
        id: "landlord-practices",
        title: "Local Landlord Practices",
        paragraphs: [
          "Local owners marketing on social media sometimes ask for ‘ESA registration’—redirect them to your provider letter and our registry warning guide.",
          "Co-living and roommate-matching houses need written approval from the master lease holder, not just one roommate’s consent.",
        ],
      },
      {
        id: "local-ordinances",
        title: "Local Ordinances",
        paragraphs: [
          "Austin prohibits leaving dogs tethered unsafely and enforces heat-related welfare checks—unrelated to ESA approval but important for compliance once your animal resides there.",
        ],
      },
      {
        id: "esa-friendly-resources",
        title: "ESA-Friendly Areas & Resources",
        paragraphs: [
          "West Campus and Riverside see high ESA demand; university housing follows FHA separately from private apartments—use our dorm guide if Texas State or UT housing is involved.",
          "Trail-oriented renters in Circle C and Steiner Ranch should confirm HOA pet caps in writing after accommodation approval.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does UT Austin housing accept ESAs?",
        answer: "University housing processes reasonable accommodation requests; private West Campus leases follow FHA with your letter.",
      },
    ],
    relatedRights: [
      { label: "College Dorm ESAs", href: "/rights/college-dorm-esa/" },
      { label: "No-Pet Apartments", href: "/rights/no-pet-apartments/" },
    ],
    tocImage: { src: "/images/residential_lease_keys.webp", alt: "Austin ESA letter guide" },
  },

  "san-antonio": {
    slug: "san-antonio",
    metaTitle: "ESA Letters in San Antonio, Texas | ESA Letter Texas",
    metaDescription:
      "San Antonio and Bexar County rentals, military-adjacent housing, and ESA accommodation steps.",
    cityName: "San Antonio",
    heroTitle: "ESA Letters in San Antonio, Texas",
    heroSubhead:
      "Bexar County’s mix of military, historic, and suburban rentals—and how to submit your ESA letter.",
    quickAnswer:
      "San Antonio renters can request ESA reasonable accommodation under the FHA with a licensed provider letter. Military housing and privatized on-base family housing follow separate federal rules—civilian Bexar County leases use standard Texas documentation expectations.",
    cityInfoPanel: {
      stats: [
        { label: "Metro population rank (TX)", value: "#2" },
        { label: "Military housing share", value: "Significant NE side" },
        { label: "Animal Services", value: "City of SA ACS" },
      ],
      localRules: [
        "San Antonio requires pet microchip/registration for dogs and cats through Animal Care Services.",
        "Historic districts (King William, Monte Vista) often have tight parking and fence rules—conduct standards still apply post-approval.",
        "Short-term STR bans in some zones do not change long-term lease FHA analysis.",
      ],
      resources: [
        { label: "San Antonio Animal Care Services", href: "https://www.sa.gov/Directory/Departments/ACS" },
        { label: "Moving With an ESA", href: "/rights/moving-with-an-esa/" },
      ],
    },
    sections: [
      {
        id: "local-housing-market",
        title: "Local Housing & Rental Market",
        paragraphs: [
          "Medical Center and downtown loft conversions attract travel nurses needing quick ESA approvals—timestamp your request emails before rotation ends.",
          "Far West and Alamo Ranch subdivisions often include HOA pet limits; your landlord and association may both need copies of the letter.",
        ],
      },
      {
        id: "landlord-practices",
        title: "Local Landlord Practices",
        paragraphs: [
          "Privatized military housing partners near JBSA may use their own forms—still rooted in federal disability accommodation principles for qualifying residents.",
          "Bilingual leasing offices are common; you may provide English-language provider letters with optional translated cover summaries you prepare yourself.",
        ],
      },
      {
        id: "local-ordinances",
        title: "Local Ordinances",
        paragraphs: [
          "San Antonio enforces dangerous-dog procedures separately from ESA housing status—keep animals well-socialized to avoid conduct-based disputes.",
        ],
      },
      {
        id: "esa-friendly-resources",
        title: "ESA-Friendly Areas & Resources",
        paragraphs: [
          "River Walk tourism jobs mean irregular hours; ESAs supporting sleep and anxiety should be documented before signing near-downtown leases with strict quiet hours.",
          "VIA transit commuters from Converse and Schertz should budget extra time for therapist telehealth sessions when establishing Texas licensure proof.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Lackland housing use ESA letters?",
        answer: "On-base and privatized military housing have distinct offices—ask housing services; civilian San Antonio leases use standard ESA letters.",
      },
    ],
    relatedRights: [
      { label: "Moving With an ESA", href: "/rights/moving-with-an-esa/" },
      { label: "Fair Housing Act", href: "/rights/fair-housing-act/" },
    ],
    tocImage: { src: "/images/residential_lease_keys.webp", alt: "San Antonio ESA housing" },
  },

  "fort-worth": {
    slug: "fort-worth",
    metaTitle: "ESA Letters in Fort Worth, Texas | ESA Letter Texas",
    metaDescription:
      "Fort Worth and Tarrant County ESA letters, rental practices, and local animal ordinances.",
    cityName: "Fort Worth",
    heroTitle: "ESA Letters in Fort Worth, Texas",
    heroSubhead:
      "Western Metroplex growth, stockyards-adjacent lofts, and Tarrant County landlord trends.",
    quickAnswer:
      "Fort Worth renters with valid ESA documentation can seek reasonable accommodation in covered housing across Tarrant County. Cowtown’s mix of historic and master-planned communities does not exempt landlords from federal fair housing review.",
    cityInfoPanel: {
      stats: [
        { label: "County", value: "Tarrant" },
        { label: "Growth corridors", value: "Alliance / Walsh" },
        { label: "Code Compliance", value: "City of FW" },
      ],
      localRules: [
        "Fort Worth requires registration and rabies compliance for dogs and cats via Code Compliance / Animal Care.",
        "Stockyards and West 7th loft HOAs may impose architectural pet rules that cannot block FHA accommodation but may govern conduct.",
        "Tornado season prep plans should include your ESA in emergency housing discussions with landlords.",
      ],
      resources: [
        { label: "Fort Worth Animal Care & Control", href: "https://www.fortworthtexas.gov/departments/code-compliance/animal-care-and-control" },
        { label: "HOA Rules & ESAs", href: "/rights/hoa-rules/" },
      ],
    },
    sections: [
      {
        id: "local-housing-market",
        title: "Local Housing & Rental Market",
        paragraphs: [
          "Alliance and Walsh Ranch attract family relocations from DFW—leases often bundle pet DNA testing for dogs; ESAs are not subject to pet rent but may still need conduct compliance.",
          "Near TCU, shared houses require explicit written approval from property managers, not just roommates.",
        ],
      },
      {
        id: "landlord-practices",
        title: "Local Landlord Practices",
        paragraphs: [
          "Tarrant County judges see occasional deposit disputes—itemize communications if landlords retain pet fees after ESA approval.",
          "Cross-county commuters to Dallas should use Texas-licensed providers to avoid ‘out-of-state letter’ delays.",
        ],
      },
      {
        id: "local-ordinances",
        title: "Local Ordinances",
        paragraphs: [
          "Fort Worth limits continuous tethering and addresses noise complaints—resolve neighbor issues quickly to prevent retaliation claims tied to your animal.",
        ],
      },
      {
        id: "esa-friendly-resources",
        title: "ESA-Friendly Areas & Resources",
        paragraphs: [
          "Trinity Trails users should remember ESAs lack general public access rights; housing protection remains the core benefit of your letter.",
          "Historic Fairmount districts feature smaller yards—landlords citing ‘insufficient space’ need objective evidence tied to your specific animal.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is Fort Worth different from Dallas for ESAs?",
        answer: "State and federal rules align; rental markets and municipal animal codes differ—use city-specific accommodation records.",
      },
    ],
    relatedRights: [
      { label: "HOA Rules", href: "/rights/hoa-rules/" },
      { label: "Pet Deposits and Fees", href: "/rights/pet-deposits-and-fees/" },
    ],
    tocImage: { src: "/images/residential_lease_keys.webp", alt: "Fort Worth ESA guide" },
  },
};

export function getLocationCity(slug: string): CityCmsRecord | undefined {
  return LOCATION_CITIES[slug as LocationCitySlug];
}

export function cityToc(city: CityCmsRecord): TocItem[] {
  return tocFromSections(city.sections);
}

export function cityWordCount(city: CityCmsRecord): number {
  const panel = [
    ...city.cityInfoPanel.localRules,
    ...city.cityInfoPanel.resources.map((r) => r.label),
    ...city.cityInfoPanel.stats.map((s) => `${s.label} ${s.value}`),
  ];
  const body = city.sections.flatMap((s) => s.paragraphs);
  return [...panel, ...body, city.quickAnswer, city.heroSubhead].join(" ").split(/\s+/).filter(Boolean)
    .length;
}
