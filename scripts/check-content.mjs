import { readFile } from "node:fs/promises"

const experienceSource = await readFile(
  new URL("../src/data/experience.ts", import.meta.url),
  "utf8",
)
const projectSource = await readFile(
  new URL("../src/data/projects.ts", import.meta.url),
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

const experienceIds = [
  ...experienceSource.matchAll(/^ {4}id:\s*"([^"]+)"/gm),
].map((match) => match[1])

if (experienceIds.length !== 3 || new Set(experienceIds).size !== experienceIds.length) {
  console.error(
    "Content check failed: expected three Experience entries with unique ids.",
  )
  process.exit(1)
}

const datePattern = /^(\d{4})-(\d{2})$/
for (const match of experienceSource.matchAll(
  /startDate:\s*"([^"]+)"[\s\S]*?endDate:\s*"([^"]+)"/g,
)) {
  const [, startDate, endDate] = match
  for (const value of [startDate, endDate]) {
    const parsed = value.match(datePattern)
    const month = Number(parsed?.[2])
    if (!parsed || month < 1 || month > 12) {
      console.error("Content check failed: invalid Experience date " + value + ".")
      process.exit(1)
    }
  }
  if (startDate > endDate) {
    console.error(
      "Content check failed: Experience start date is after end date.",
    )
    process.exit(1)
  }
}

const projectSlugs = new Set(
  [...projectSource.matchAll(/^\s+slug:\s*"([^"]+)"/gm)].map(
    (match) => match[1],
  ),
)

for (const match of experienceSource.matchAll(
  /relatedProjectSlugs:\s*\[([^\]]*)\]/g,
)) {
  const relatedSlugs = [...match[1].matchAll(/"([^"]+)"/g)].map(
    (slugMatch) => slugMatch[1],
  )
  for (const slug of relatedSlugs) {
    if (!projectSlugs.has(slug)) {
      console.error(
        "Content check failed: unknown related project slug " + slug + ".",
      )
      process.exit(1)
    }
  }
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
