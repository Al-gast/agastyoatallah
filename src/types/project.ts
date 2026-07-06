import type { LocalizedText } from "@/i18n/config"

export type ProjectMedia = {
  src: string
  alt: LocalizedText
  width: number
  height: number
}

export type ProjectNarrative = {
  label: LocalizedText
  title: LocalizedText
  body: LocalizedText
}

export type Project = {
  slug: string
  title: string
  summary: LocalizedText
  liveUrl: string
  year?: string
  role?: LocalizedText
  stack?: string[]
  services?: string[]
  cover: ProjectMedia
  gallery: ProjectMedia[]
  theme: {
    accent: string
    surface: string
    foreground: string
  }
  narrative?: ProjectNarrative[]
  outcome?: LocalizedText
}
