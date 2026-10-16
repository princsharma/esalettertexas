import { ApplyConversionTracking } from "@/components/analytics/ApplyConversionTracking";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/apply-now/");

/** Conversion layout: full site chrome, but Header uses minimal nav on this route. */
export default function ApplyNowLayout({ children }: LayoutProps<"/apply-now">) {
  return (
    <>
      <ApplyConversionTracking />
      {children}
    </>
  );
}
