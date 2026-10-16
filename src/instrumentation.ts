export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
  const { runInternalLinkValidation } = await import("@/lib/validate-internal-links");
  runInternalLinkValidation();
}
