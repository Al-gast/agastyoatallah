import type { LocalizedText } from "@/i18n/config"

export type Experience = {
  id: string
  company: string
  role: LocalizedText
  employmentType: LocalizedText
  location: LocalizedText
  startDate: string
  endDate?: string
  summary: LocalizedText
  contributions: LocalizedText[]
  stack: string[]
  companyUrl?: string
  relatedProjectSlugs: string[]
}
