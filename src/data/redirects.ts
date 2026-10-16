/**
 * Legacy URL → current path (308 permanent).
 * Add entries as migrations complete; keep trailing slashes consistent.
 */
export type RedirectRule = { source: string; destination: string };

export const REDIRECT_MAP: RedirectRule[] = [
  { source: "/apply", destination: "/apply-now/" },
  { source: "/apply/", destination: "/apply-now/" },
  { source: "/get-started", destination: "/apply-now/" },
  { source: "/get-started/", destination: "/apply-now/" },
];
