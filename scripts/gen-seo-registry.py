# One-off generator — run from repo root if registry needs regeneration.
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "src" / "data" / "seo" / "seo-registry.ts"

ROWS = [
    ("/", "ESA Letter Texas | Licensed Texas Therapists Online", "Get a legitimate ESA letter in Texas from a licensed therapist. Take a short assessment, get evaluated, and learn your housing rights under the FHA.", "Get a Legitimate ESA Letter in Texas from a Licensed Therapist", "Get a legitimate ESA letter in Texas from a licensed therapist. Take a short assessment, get evaluated, and learn your housing rights under the FHA.", "website", None, "FAQPage"),
    ("/what-is-an-esa-letter/", "What Is an ESA Letter? A Texas Guide", "An ESA letter is a document from a licensed provider supporting your need for an emotional support animal. Learn the legal basis, uses and limits in Texas.", "What Is an ESA Letter and How Does It Work in Texas?", "An ESA letter is a document from a licensed provider supporting your need for an emotional support animal. Learn the legal basis, uses and limits in Texas.", "article", None, None),
    ("/how-to-get-an-esa-letter-in-texas/", "How to Get an ESA Letter in Texas: Step-by-Step", "Learn how to get an ESA letter in Texas: check eligibility, complete an assessment, meet a licensed therapist, and know what you will receive and when.", "How Do You Get an ESA Letter in Texas? A Simple Step-by-Step Guide", "Learn how to get an ESA letter in Texas: check eligibility, complete an assessment, meet a licensed therapist, and know what you will receive and when.", "article", None, "HowTo"),
    ("/requirements/", "Texas ESA Letter Requirements: Full Checklist", "See exactly what a valid Texas ESA letter must include: licensed provider rules, HB 4164 compliance, validity period, and red flags of invalid letters.", "What Does a Valid Texas ESA Letter Need to Include?", "See exactly what a valid Texas ESA letter must include: licensed provider rules, HB 4164 compliance, validity period, and red flags of invalid letters.", "article", None, None),
    ("/sample-letter/", "ESA Letter Sample: Annotated Example for Texas", "View an annotated ESA letter sample. See each required element, what Texas landlords look for, and how to tell a valid letter from a weak one.", "See an ESA Letter Sample, Explained Line by Line", "View an annotated ESA letter sample. See each required element, what Texas landlords look for, and how to tell a valid letter from a weak one.", "article", None, None),
    ("/cost/", "ESA Letter Cost in Texas: Pricing & What's Included", "What does an ESA letter cost in Texas? See our pricing, what is included, the refund policy, renewal cost, and why free or very cheap letters often fail.", "How Much Does an ESA Letter Cost in Texas?", "What does an ESA letter cost in Texas? See our pricing, what is included, the refund policy, renewal cost, and why free or very cheap letters often fail.", "product", None, "Product"),
    ("/renewal/", "ESA Letter Renewal in Texas: When and How", "Find out when your ESA letter needs renewal, how the process works, what it costs, and what changes at re-evaluation with a licensed Texas therapist.", "When Does Your ESA Letter Expire, and How Do You Renew It?", "Find out when your ESA letter needs renewal, how the process works, what it costs, and what changes at re-evaluation with a licensed Texas therapist.", "article", None, None),
    ("/rights/", "Texas ESA Laws & Housing Rights: Complete Guide", "Understand your ESA rights in Texas: the Fair Housing Act, HB 4164, what landlords can and cannot do, and how to respond if your request is denied.", "Your Emotional Support Animal Rights as a Texas Renter", "Understand your ESA rights in Texas: the Fair Housing Act, HB 4164, what landlords can and cannot do, and how to respond if your request is denied.", "website", None, None),
    ("/conditions/", "Who Qualifies for an ESA in Texas? Conditions List", "Who qualifies for an emotional support animal in Texas? Learn the criteria, the role of a licensed provider, the evaluation process, and common conditions.", "Do You Qualify for an Emotional Support Animal in Texas?", "Who qualifies for an emotional support animal in Texas? Learn the criteria, the role of a licensed provider, the evaluation process, and common conditions.", "website", None, None),
    ("/locations/", "ESA Letters in Texas: City-by-City Guide", "ESA rules apply statewide, but local housing markets differ. Explore guides for Houston, Dallas, Austin, San Antonio and Fort Worth renters.", "ESA Letters for Texas Renters: A Guide for Every Major City", "ESA rules apply statewide, but local housing markets differ. Explore guides for Houston, Dallas, Austin, San Antonio and Fort Worth renters.", "website", None, None),
]

# Rights clusters 11-21
RIGHTS = [
    ("fair-housing-act", "Fair Housing Act & ESAs: Your Rights in Texas", "How the Fair Housing Act protects emotional support animals: reasonable accommodation, covered vs exempt housing, and how to file a HUD complaint.", "How the Fair Housing Act Protects You and Your Emotional Support Animal", "How the Fair Housing Act protects emotional support animals: reasonable accommodation, covered vs exempt housing, and how to file a HUD complaint."),
    ("hb-4164-explained", "Texas HB 4164 Explained: What It Means for ESAs", "Texas HB 4164 explained in plain English: what the law says, penalties for fraud, how it affects valid ESA letters, and a simple compliance checklist.", "Texas HB 4164 Explained in Plain English", "Texas HB 4164 explained in plain English: what the law says, penalties for fraud, how it affects valid ESA letters, and a simple compliance checklist."),
    ("esa-vs-service-animal", "ESA vs. Service Animal: Key Differences in Texas", "ESA vs service animal: compare legal definitions, training rules, and public access rights in Texas, and clear up the most common points of confusion.", "Emotional Support Animal vs. Service Animal: What's the Difference?", "ESA vs service animal: compare legal definitions, training rules, and public access rights in Texas, and clear up the most common points of confusion."),
    ("no-pet-apartments", "Can You Have an ESA in a No-Pet Apartment in Texas?", "No-pet policies generally do not apply to valid ESAs. Learn how to request accommodation, what documents to give your landlord, and what to expect.", "Can Your Landlord Say No? ESAs in No-Pet Apartments", "No-pet policies generally do not apply to valid ESAs. Learn how to request accommodation, what documents to give your landlord, and what to expect."),
    ("hoa-rules", "HOAs and Emotional Support Animals in Texas", "Can an HOA refuse your ESA? Learn the limits of HOA authority, how to request accommodation in writing, and your options if the HOA pushes back.", "Can Your HOA Refuse Your Emotional Support Animal?", "Can an HOA refuse your ESA? Learn the limits of HOA authority, how to request accommodation in writing, and your options if the HOA pushes back."),
    ("breed-and-size-restrictions", "ESA Breed & Size Restrictions: Do They Apply?", "Why breed and weight limits are usually overridden for ESAs, the narrow 'direct threat' exception, and how to handle landlord or insurer pushback.", "Do Breed and Size Limits Apply to Your Emotional Support Animal?", "Why breed and weight limits are usually overridden for ESAs, the narrow 'direct threat' exception, and how to handle landlord or insurer pushback."),
    ("landlord-denials", "Landlord Denied Your ESA? Steps to Take in Texas", "Landlord said no to your ESA? Learn valid vs invalid denial reasons, how to respond, how to file a HUD or TWC complaint, and get a template reply.", "What to Do When a Texas Landlord Denies Your ESA Request", "Landlord said no to your ESA? Learn valid vs invalid denial reasons, how to respond, how to file a HUD or TWC complaint, and get a template reply."),
    ("pet-deposits-and-fees", "ESA Pet Deposits & Fees: What Landlords Can Charge", "Landlords generally cannot charge pet rent or deposits for an ESA. See what can be charged for actual damage and how to recover wrongly charged fees.", "Can a Landlord Charge Pet Fees for Your Emotional Support Animal?", "Landlords generally cannot charge pet rent or deposits for an ESA. See what can be charged for actual damage and how to recover wrongly charged fees."),
    ("moving-with-an-esa", "Moving With an ESA: Rights, Paperwork & Timing", "Moving to a new rental with your emotional support animal? Learn how your rights transfer, what new-lease paperwork to prepare, and a timing checklist.", "Moving With Your Emotional Support Animal: What You Need to Know", "Moving to a new rental with your emotional support animal? Learn how your rights transfer, what new-lease paperwork to prepare, and a timing checklist."),
    ("college-dorm-esa", "ESAs in College Dorms: Texas Student Guide", "Can you bring an ESA to a Texas college dorm? Learn how the FHA applies to university housing, how to submit a request, and what schools may ask for.", "Can You Bring an Emotional Support Animal to a Texas College Dorm?", "Can you bring an ESA to a Texas college dorm? Learn how the FHA applies to university housing, how to submit a request, and what schools may ask for."),
    ("fake-registries-warning", "ESA Registry Scams: Why Registries Aren't Valid", "Online ESA registries and ID cards carry no legal weight. Learn how they mislead buyers, what is actually required, and how to verify a legitimate provider.", "Why ESA Registries Aren't Valid, and What Landlords Actually Accept", "Online ESA registries and ID cards carry no legal weight. Learn how they mislead buyers, what is actually required, and how to verify a legitimate provider."),
]
for slug, mt, md, ogt, ogd in RIGHTS:
    ROWS.append((f"/rights/{slug}/", mt, md, ogt, ogd, "article", None, None))

CONDITIONS = [
    ("anxiety", "ESA Letter for Anxiety in Texas: Can You Qualify?", "Can you get an ESA letter for Anxiety in Texas? Learn how it qualifies, how an ESA may help with constant worry, and what to expect.", "Can You Get an Emotional Support Animal for Anxiety in Texas?", "Can you get an ESA letter for Anxiety in Texas? Learn how it qualifies, how an ESA may help with constant worry, and what to expect."),
    ("depression", "ESA Letter for Depression in Texas: Can You Qualify?", "Can you get an ESA letter for Depression in Texas? Learn how it qualifies, how an ESA may help with low mood, and what to expect.", "Can You Get an Emotional Support Animal for Depression in Texas?", "Can you get an ESA letter for Depression in Texas? Learn how it qualifies, how an ESA may help with low mood, and what to expect."),
    ("ptsd", "ESA Letter for PTSD in Texas: Can You Qualify?", "Can you get an ESA letter for PTSD in Texas? Learn how it qualifies, how an ESA may help with hypervigilance, and what to expect.", "Can You Get an Emotional Support Animal for PTSD in Texas?", "Can you get an ESA letter for PTSD in Texas? Learn how it qualifies, how an ESA may help with hypervigilance, and what to expect."),
    ("bipolar-disorder", "ESA Letter for Bipolar Disorder in Texas: Can You Qualify?", "Can you get an ESA letter for Bipolar Disorder in Texas? Learn how it qualifies, how an ESA may help with mood swings, and what to expect.", "Can You Get an Emotional Support Animal for Bipolar Disorder in Texas?", "Can you get an ESA letter for Bipolar Disorder in Texas? Learn how it qualifies, how an ESA may help with mood swings, and what to expect."),
    ("panic-disorder", "ESA Letter for Panic Disorder in Texas: Can You Qualify?", "Can you get an ESA letter for Panic Disorder in Texas? Learn how it qualifies, how an ESA may help with panic attacks, and what to expect.", "Can You Get an Emotional Support Animal for Panic Disorder in Texas?", "Can you get an ESA letter for Panic Disorder in Texas? Learn how it qualifies, how an ESA may help with panic attacks, and what to expect."),
    ("social-anxiety", "ESA Letter for Social Anxiety in Texas: Can You Qualify?", "Can you get an ESA letter for Social Anxiety in Texas? Learn how it qualifies, how an ESA may help with social avoidance, and what to expect.", "Can You Get an Emotional Support Animal for Social Anxiety in Texas?", "Can you get an ESA letter for Social Anxiety in Texas? Learn how it qualifies, how an ESA may help with social avoidance, and what to expect."),
    ("ocd", "ESA Letter for OCD in Texas: Can You Qualify?", "Can you get an ESA letter for OCD in Texas? Learn how it qualifies, how an ESA may help with intrusive thoughts, and what to expect.", "Can You Get an Emotional Support Animal for OCD in Texas?", "Can you get an ESA letter for OCD in Texas? Learn how it qualifies, how an ESA may help with intrusive thoughts, and what to expect."),
    ("adhd", "ESA Letter for ADHD in Texas: Can You Qualify?", "Can you get an ESA letter for ADHD in Texas? Learn how it qualifies, how an ESA may help with daily routine, and what to expect.", "Can You Get an Emotional Support Animal for ADHD in Texas?", "Can you get an ESA letter for ADHD in Texas? Learn how it qualifies, how an ESA may help with daily routine, and what to expect."),
    ("autism-spectrum", "ESA Letter for Autism Spectrum in Texas: Can You Qualify?", "Can you get an ESA letter for Autism Spectrum in Texas? Learn how it qualifies, how an ESA may help with sensory overload, and what to expect.", "Can You Get an Emotional Support Animal for Autism Spectrum in Texas?", "Can you get an ESA letter for Autism Spectrum in Texas? Learn how it qualifies, how an ESA may help with sensory overload, and what to expect."),
    ("eating-disorders", "ESA Letter for Eating Disorders in Texas: Can You Qualify?", "Can you get an ESA letter for Eating Disorders in Texas? Learn how it qualifies, how an ESA may help with meal-time stress, and what to expect.", "Can You Get an Emotional Support Animal for Eating Disorders in Texas?", "Can you get an ESA letter for Eating Disorders in Texas? Learn how it qualifies, how an ESA may help with meal-time stress, and what to expect."),
]
for slug, mt, md, ogt, ogd in CONDITIONS:
    ROWS.append((f"/conditions/{slug}/", mt, md, ogt, ogd, "article", None, None))

LOCATIONS = [
    ("houston", "ESA Letters in Houston, Texas: Local Rights Guide", "Houston renters: learn how ESA letters work in Harris County housing, what landlords may ask, and where to find pet-friendly support.", "Renting in Houston? Your ESA Rights Explained", "Houston renters: learn how ESA letters work in Harris County housing, what landlords may ask, and where to find pet-friendly support."),
    ("dallas", "ESA Letters in Dallas, Texas: Local Rights Guide", "Renting in Dallas? See how ESA letters and the Fair Housing Act apply to Dallas apartments, what landlords may ask, and local resources.", "Renting in Dallas? Your ESA Rights Explained", "Renting in Dallas? See how ESA letters and the Fair Housing Act apply to Dallas apartments, what landlords may ask, and local resources."),
    ("austin", "ESA Letters in Austin, Texas: Local Rights Guide", "Austin tenants: understand ESA rights in Travis County rentals, how to request accommodation, and what to do if a landlord refuses.", "Renting in Austin? Your ESA Rights Explained", "Austin tenants: understand ESA rights in Travis County rentals, how to request accommodation, and what to do if a landlord refuses."),
    ("san-antonio", "ESA Letters in San Antonio, Texas: Local Rights Guide", "San Antonio renters: learn how ESA letters apply to local apartments and HOAs, how to request accommodation, and where to get help.", "Renting in San Antonio? Your ESA Rights Explained", "San Antonio renters: learn how ESA letters apply to local apartments and HOAs, how to request accommodation, and where to get help."),
    ("fort-worth", "ESA Letters in Fort Worth, Texas: Local Rights Guide", "Fort Worth tenants: see how ESA rights apply in Tarrant County rentals, what documents to provide, and how to handle a landlord denial.", "Renting in Fort Worth? Your ESA Rights Explained", "Fort Worth tenants: see how ESA rights apply in Tarrant County rentals, what documents to provide, and how to handle a landlord denial."),
]
for slug, mt, md, ogt, ogd in LOCATIONS:
    ROWS.append((f"/locations/{slug}/", mt, md, ogt, ogd, "website", None, "Service"))

ROWS.extend([
    ("/blog/", "ESA Blog: Texas Laws, Housing Tips & Guides", "Practical articles on Texas ESA laws, housing rights, qualifying conditions, landlord-tenant issues, and ESA care, reviewed for accuracy.", "The ESA Blog: Texas Laws, Housing Tips and Practical Guides", "Practical articles on Texas ESA laws, housing rights, qualifying conditions, landlord-tenant issues, and ESA care, reviewed for accuracy.", "website", None, None),
    ("/blog/category/rights-housing/", "Rights & Housing: ESA Laws and Tenant Guides", "ESA housing rights and Texas law: Fair Housing Act explainers, HB 4164 updates, and guides to protect your emotional support animal.", "ESA Housing Rights and Texas Law: Guides and Updates", "ESA housing rights and Texas law: Fair Housing Act explainers, HB 4164 updates, and guides to protect your emotional support animal.", "website", None, None),
    ("/blog/category/qualifying-conditions/", "Qualifying Conditions: Who Can Get an ESA", "Articles on which mental health conditions may qualify for an ESA letter in Texas, how evaluations work, and what to expect.", "Who Can Get an ESA Letter? Conditions and Evaluation Guides", "Articles on which mental health conditions may qualify for an ESA letter in Texas, how evaluations work, and what to expect.", "website", None, None),
    ("/blog/category/texas-cities/", "Texas Cities: Local ESA Guides", "Local ESA guides for Texas renters: city housing trends, landlord practices, and what ESA owners should know in each major market.", "ESA Guides for Texas Renters, City by City", "Local ESA guides for Texas renters: city housing trends, landlord practices, and what ESA owners should know in each major market.", "website", None, None),
    ("/blog/category/esa-lifestyle-care/", "ESA Lifestyle & Care: Tips for Owners", "Tips for living with an emotional support animal: daily care, routines, travel, and wellbeing, with links to your housing rights.", "Living With an Emotional Support Animal: Care and Everyday Tips", "Tips for living with an emotional support animal: daily care, routines, travel, and wellbeing, with links to your housing rights.", "website", None, None),
    ("/blog/category/landlord-tenant-guides/", "Landlord-Tenant Guides for ESA Owners", "Step-by-step landlord-tenant guides for ESA owners in Texas: requests, replies, deposits, lease language, and dispute handling.", "Landlord-Tenant Guides for Emotional Support Animal Owners", "Step-by-step landlord-tenant guides for ESA owners in Texas: requests, replies, deposits, lease language, and dispute handling.", "website", None, None),
    ("/blog/category/news-policy-updates/", "ESA News & Policy Updates in Texas", "Stay current on ESA news and policy changes affecting Texas renters, including new laws, rulings, and guidance from HUD and the state.", "ESA News and Policy Updates for Texas Renters", "Stay current on ESA news and policy changes affecting Texas renters, including new laws, rulings, and guidance from HUD and the state.", "website", None, None),
    ("/faq/", "ESA Letter FAQ: Texas Questions Answered", "Answers to common questions about ESA letters in Texas: eligibility, cost, validity, landlord rights, renewals, and how our licensed therapists work.", "Your ESA Letter Questions, Answered", "Answers to common questions about ESA letters in Texas: eligibility, cost, validity, landlord rights, renewals, and how our licensed therapists work.", "website", None, "FAQPage"),
    ("/how-it-works/", "How It Works: Get Your ESA Letter in 3 Steps", "See how our process works: take a short assessment, meet a licensed Texas therapist, and receive your letter if you qualify. Timeline and what to expect.", "How Getting an ESA Letter Works in 3 Simple Steps", "See how our process works: take a short assessment, meet a licensed Texas therapist, and receive your letter if you qualify. Timeline and what to expect.", "website", None, "HowTo"),
    ("/about-our-therapists/", "About Our Licensed Texas Therapists & Credentials", "Meet the licensed mental health professionals behind our ESA evaluations. See credentials, how licenses are verified, and our standards for care.", "Meet the Licensed Therapists Behind Your ESA Evaluation", "Meet the licensed mental health professionals behind our ESA evaluations. See credentials, how licenses are verified, and our standards for care.", "website", None, None),
    ("/apply-now/", "Get Your ESA Letter in Texas: Start Your Assessment", "Start your ESA assessment online with a licensed Texas therapist. Secure, HIPAA-conscious process. A letter is issued only if you qualify.", "Start Your ESA Assessment With a Licensed Texas Therapist", "Start your ESA assessment online with a licensed Texas therapist. Secure, HIPAA-conscious process. A letter is issued only if you qualify.", "website", None, None),
    ("/privacy-policy/", "Privacy Policy | ESA Letter Texas", "Read how ESA Letter Texas collects, uses, and protects your personal and health-related information, and the choices you have.", "Privacy Policy | ESA Letter Texas", "Read how ESA Letter Texas collects, uses, and protects your personal and health-related information, and the choices you have.", "website", "noindex", None),
    ("/terms/", "Terms of Service | ESA Letter Texas", "Review the terms of using ESA Letter Texas, including eligibility, services, payments, refunds, and limits of liability.", "Terms of Service | ESA Letter Texas", "Review the terms of using ESA Letter Texas, including eligibility, services, payments, refunds, and limits of liability.", "website", "noindex", None),
    ("/disclaimer/", "Medical & Legal Disclaimer | ESA Letter Texas", "Important medical and legal disclaimers for ESA Letter Texas: information is educational, not legal advice, and approval depends on a provider's evaluation.", "Medical and Legal Disclaimer | ESA Letter Texas", "Important medical and legal disclaimers for ESA Letter Texas: information is educational, not legal advice, and approval depends on a provider's evaluation.", "website", None, None),
    ("/contact/", "Contact ESA Letter Texas | Support & Questions", "Questions about your ESA letter or assessment? Contact the ESA Letter Texas support team by form, email, or phone.", "Contact ESA Letter Texas", "Questions about your ESA letter or assessment? Contact the ESA Letter Texas support team by form, email, or phone.", "website", None, None),
])

def esc(s: str) -> str:
    return json.dumps(s)

lines = [
    '/**',
    " * SEO registry synced from esalettertexas-seo-settings (51 URLs).",
    " * Regenerate: python scripts/gen-seo-registry.py",
    " */",
    'import type { OpenGraphType, PageSeoFields } from "./types";',
    "",
    "type OgBundle = { title: string; description: string; type: OpenGraphType };",
    "",
    "function pageSeo(",
    "  canonicalPath: string,",
    "  metaTitle: string,",
    "  metaDescription: string,",
    "  og: OgBundle,",
    "  extra?: Partial<PageSeoFields>,",
    "): PageSeoFields {",
    "  return {",
    "    canonicalPath,",
    "    metaTitle,",
    "    metaDescription,",
    "    openGraph: {",
    "      title: og.title,",
    "      description: og.description,",
    "      type: og.type,",
    "    },",
    "    ...extra,",
    "  };",
    "}",
    "",
    "export const PAGE_SEO_REGISTRY: Record<string, PageSeoFields> = {",
]

for path, mt, md, ogt, ogd, ogtype, robots, schema in ROWS:
    extra_parts = []
    if robots == "noindex":
        extra_parts.append("robots: { index: false, follow: true }")
    if schema:
        extra_parts.append(f'schemaTypeOverride: "{schema}"')
    extra = ", ".join(extra_parts)
    extra_arg = f", {{ {extra} }}" if extra else ""
    lines.append(
        f"  {esc(path)}: pageSeo({esc(path)}, {esc(mt)}, {esc(md)}, "
        f"{{ title: {esc(ogt)}, description: {esc(ogd)}, type: {esc(ogtype)} }}{extra_arg}),"
    )

lines.append("};")
lines.append("")
OUT.write_text("\n".join(lines), encoding="utf-8")
print(f"Wrote {len(ROWS)} entries to {OUT}")
