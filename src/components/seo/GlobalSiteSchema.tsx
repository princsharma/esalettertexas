import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, webSiteSchema } from "@/lib/schema";

/** Sitewide Organization + WebSite graph on every page. */
export function GlobalSiteSchema() {
  return <JsonLd data={[organizationSchema(), webSiteSchema()]} />;
}
