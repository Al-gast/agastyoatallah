import { readFile } from "node:fs/promises"

const experienceSource = await readFile(
  new URL("../src/data/experience.ts", import.meta.url),
  "utf8",
)

const hasEntries = !/experienceEntries:\s*Experience\[\]\s*=\s*\[\s*\]/m.test(
  experienceSource,
)

if (!hasEntries) {
  console.error(
    "Content check failed: add at least one verified bilingual Experience entry before release.",
  )
  process.exit(1)
}

for (const file of [
  "../src/i18n/dictionaries.ts",
  "../src/data/projects.ts",
  "../src/data/experiments.ts",
  "../src/data/experience.ts",
]) {
  const content = await readFile(new URL(file, import.meta.url), "utf8")
  if (/\b(en|id):\s*["']\s*["']/.test(content)) {
    console.error("Content check failed: empty localized value in " + file + ".")
    process.exit(1)
  }
}

console.log("Content check passed.")
