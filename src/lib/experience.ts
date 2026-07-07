import type { Locale } from "@/i18n/config"
import { localize } from "@/i18n/config"
import type { Experience } from "@/types/experience"

export type ExperienceView = {
  id: string
  company: string
  role: string
  employmentType?: string
  location?: string
  period: string
  startYear: string
  summary: string
  contributions: string[]
  stack: string[]
  companyUrl?: string
  relatedProjectSlugs: string[]
}

function formatDate(value: string, locale: Locale) {
  const parts = value.split("-")
  const year = Number(parts[0])
  const month = Number(parts[1] ?? 1)
  return new Intl.DateTimeFormat(locale === "id" ? "id-ID" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(Date.UTC(year, month - 1, 1)))
}

export function createExperienceViews(
  entries: Experience[],
  locale: Locale,
  presentLabel: string,
) {
  return [...entries]
    .sort((a, b) => b.startDate.localeCompare(a.startDate))
    .map<ExperienceView>((entry) => ({
      id: entry.id,
      company: entry.company,
      role: localize(entry.role, locale),
      employmentType: entry.employmentType
        ? localize(entry.employmentType, locale)
        : undefined,
      location: entry.location ? localize(entry.location, locale) : undefined,
      period:
        formatDate(entry.startDate, locale) +
        " — " +
        (entry.endDate ? formatDate(entry.endDate, locale) : presentLabel),
      startYear: entry.startDate.slice(0, 4),
      summary: localize(entry.summary, locale),
      contributions: entry.contributions.map((item) => localize(item, locale)),
      stack: entry.stack,
      companyUrl: entry.companyUrl,
      relatedProjectSlugs: entry.relatedProjectSlugs,
    }))
}
