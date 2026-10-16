import { notFound } from "next/navigation";
import { ComparisonTable } from "@/components/sections";
import { SiloClusterPage } from "@/components/templates/SiloClusterPage";
import { ESA_VS_SERVICE_COMPARISON, RIGHTS_REVIEWER } from "@/data/silos/rights";
import {
  RIGHTS_CLUSTER_SLUGS,
  getClusterRelated,
  getRightsCluster,
} from "@/data/silos/rights-clusters";
import { getRightsClusterHeroBackground } from "@/data/page-heroes";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return RIGHTS_CLUSTER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cluster = getRightsCluster(slug);
  if (!cluster) return {};
  return buildPageMetadata({
    metaTitle: cluster.metaTitle,
    metaDescription: cluster.metaDescription,
    canonicalPath: `/rights/${slug}/`,
  });
}

export default async function RightsClusterPage({ params }: PageProps) {
  const { slug } = await params;
  const cluster = getRightsCluster(slug);
  if (!cluster) notFound();

  const sectionExtras =
    cluster.showComparison && cluster.sections.some((s) => s.id === "comparison")
      ? {
          comparison: (
            <ComparisonTable
              columns={ESA_VS_SERVICE_COMPARISON.columns}
              rows={ESA_VS_SERVICE_COMPARISON.rows}
              caption={ESA_VS_SERVICE_COMPARISON.caption}
            />
          ),
        }
      : undefined;

  return (
    <SiloClusterPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Texas ESA Laws & Housing Rights", href: "/rights/" },
        { label: cluster.heroTitle },
      ]}
      heroEyebrow="ESA Letter Texas · Housing Rights"
      heroTitle={cluster.heroTitle}
      heroSubhead={cluster.heroSubhead}
      heroSecondaryLabel="Back to rights overview"
      heroSecondaryHref="/rights/"
      quickAnswer={cluster.quickAnswer}
      toc={cluster.toc}
      tocImage={cluster.tocImage}
      related={getClusterRelated(cluster.relatedSlugs)}
      author={RIGHTS_REVIEWER}
      sections={cluster.sections}
      sectionExtras={sectionExtras}
      legalCallout={cluster.legalCallout}
      faqs={cluster.faqs}
      heroBackgroundImage={getRightsClusterHeroBackground(slug)}
    />
  );
}
