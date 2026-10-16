import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiloCityPage } from "@/components/templates/SiloCityPage";
import { getCityRelated } from "@/data/silos/locations";
import {
  LOCATION_CITY_SLUGS,
  cityToc,
  cityWordCount,
  getLocationCity,
} from "@/data/silos/locations-cities";
import { validateCityWordCount } from "@/lib/content-quality";
import { PAGE_HERO } from "@/data/page-heroes";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LOCATION_CITY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getLocationCity(slug);
  if (!city) return {};
  return buildPageMetadata({
    ...(city.seo ?? {}),
    metaTitle: city.metaTitle,
    metaDescription: city.metaDescription,
    canonicalPath: `/locations/${slug}/`,
    schemaTypeOverride: "Service",
  });
}

export default async function LocationCityPage({ params }: PageProps) {
  const { slug } = await params;
  const city = getLocationCity(slug);
  if (!city) notFound();

  validateCityWordCount(slug, cityWordCount(city));

  return (
    <SiloCityPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "ESA Letters in Texas — City Guide", href: "/locations/" },
        { label: city.heroTitle },
      ]}
      heroTitle={city.heroTitle}
      heroSubhead={city.heroSubhead}
      quickAnswer={city.quickAnswer}
      cityName={city.cityName}
      citySlug={slug}
      cityInfoPanel={city.cityInfoPanel}
      toc={cityToc(city)}
      tocImage={city.tocImage}
      related={getCityRelated(city.relatedRights)}
      sections={city.sections}
      faqs={city.faqs}
      heroBackgroundImage={city.tocImage?.src ?? PAGE_HERO.city}
    />
  );
}
