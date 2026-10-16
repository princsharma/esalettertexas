import { notFound } from "next/navigation";
import { TherapistProfilePage } from "@/components/templates/TherapistProfilePage";
import { getTeamMemberBySlug, getTeamSlugs } from "@/data/team";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getTeamSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) return {};
  return buildPageMetadata({
    metaTitle: `${member.name}, ${member.credential} | About Our Therapists | ESA Letter Texas`,
    metaDescription: `${member.roleTitle}. ${member.bio}`,
    canonicalPath: `/about-our-therapists/${slug}/`,
  });
}

export default async function TherapistProfileRoute({ params }: PageProps) {
  const { slug } = await params;
  const member = getTeamMemberBySlug(slug);
  if (!member) notFound();

  return <TherapistProfilePage member={member} />;
}
