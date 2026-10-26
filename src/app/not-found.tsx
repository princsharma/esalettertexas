import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-py bg-white">
      <Container className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">404</p>
        <h1 className="mt-2 text-h1 text-neutral-900">Page not found</h1>
        <p className="mt-3 text-neutral-600">
          That URL may have moved. Try search, the sitemap, or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Link
            href="/search/"
            className="btn btn-tertiary btn-md"
          >
            Search site
          </Link>
        </div>
      </Container>
    </section>
  );
}
