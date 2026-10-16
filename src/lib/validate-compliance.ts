import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const FORBIDDEN_UI_PATTERNS: { id: string; regex: RegExp }[] = [
  { id: "instant-approval-cta", regex: /ctaLabel\s*=\s*["'][^"']*instant\s+approval/i },
  { id: "register-cta", regex: /ctaLabel\s*=\s*["'][^"']*register/i },
  { id: "certification-cta", regex: /ctaLabel\s*=\s*["'][^"']*certif/i },
  { id: "header-forbidden-label", regex: /HEADER_CTA_LABEL\s*=\s*["'][^"']*(register|certif|instant\s+approval)/i },
];

function walkTsx(dir: string, files: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === ".next") continue;
      walkTsx(full, files);
    } else if (entry.endsWith(".tsx")) {
      files.push(full);
    }
  }
  return files;
}

export function validateComplianceCopy(): string[] {
  const root = join(process.cwd(), "src");
  const errors: string[] = [];
  for (const file of walkTsx(root)) {
    const content = readFileSync(file, "utf8");
    for (const { id, regex } of FORBIDDEN_UI_PATTERNS) {
      if (regex.test(content)) {
        errors.push(`[compliance] ${file}: forbidden UI pattern (${id})`);
      }
    }
  }
  return errors;
}

export function runComplianceValidation(): void {
  const errors = validateComplianceCopy();
  if (errors.length > 0) {
    for (const e of errors) console.error(e);
    throw new Error(`Compliance copy validation failed with ${errors.length} error(s).`);
  }
}
