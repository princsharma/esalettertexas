import { Geist } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyCta } from "@/components/layout/MobileStickyCta";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";
import { GlobalSiteSchema } from "@/components/seo/GlobalSiteSchema";
import { rootLayoutMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = rootLayoutMetadata();

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GlobalSiteSchema />
        <AnalyticsScripts />
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <MobileStickyCta />
        <Footer />
      </body>
    </html>
  );
}
