import { notFound } from "next/navigation";
import { SiloClusterPage } from "@/components/templates/SiloClusterPage";
import {
  CONDITIONS_PILLAR_LABEL,
  CONDITIONS_REVIEWER,
  getConditionRelated,
} from "@/data/silos/conditions";
import {
  CONDITION_CLUSTER_SLUGS,
  getConditionCluster,
} from "@/data/silos/conditions-clusters";
import { getConditionClusterHeroBackground } from "@/data/page-heroes";
import { pageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CONDITION_CLUSTER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const cluster = getConditionCluster(slug);
  if (!cluster) return {};
  return pageMetadata(`/conditions/${slug}/`);
}

export default async function ConditionClusterPage({ params }: PageProps) {
  const { slug } = await params;
  const cluster = getConditionCluster(slug);
  if (!cluster) notFound();

  return (
    <SiloClusterPage
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: CONDITIONS_PILLAR_LABEL, href: "/conditions/" },
        { label: cluster.heroTitle },
      ]}
      heroEyebrow="ESA Letter Texas · Conditions"
      heroTitle={cluster.heroTitle}
      heroSubhead={cluster.heroSubhead}
      heroSecondaryLabel="Who qualifies overview"
      heroSecondaryHref="/conditions/"
      quickAnswer={cluster.quickAnswer}
      toc={cluster.toc}
      tocImage={cluster.tocImage}
      related={getConditionRelated(cluster.relatedSlugs)}
      author={CONDITIONS_REVIEWER}
      sections={cluster.sections}
      legalCallout={cluster.legalCallout}
      faqs={cluster.faqs}
      inlineCta={{
        title: "See If You Qualify for an ESA Letter",
        subhead: "Confidential online assessment with a licensed Texas therapist.",
        ctaLabel: "Apply Now",
        ctaHref: "/apply-now/",
      }}
      heroBackgroundImage={getConditionClusterHeroBackground(slug)}
    />
  );
}
