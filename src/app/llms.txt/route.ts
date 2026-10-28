import { LLMS_TXT } from "@/data/llms";

/** Serves `/llms.txt` for LLM crawlers and citation tools. */
export function GET() {
  return new Response(LLMS_TXT, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
