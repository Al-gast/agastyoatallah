export type ExperimentSlug =
  | "kinetic-type"
  | "image-distortion"
  | "particle-field"
  | "spring-controls"

export type Experiment = {
  slug: ExperimentSlug
  title: LocalizedText
  summary: LocalizedText
  category: LocalizedText
  accent: string
  preview: LocalizedText
}
import type { LocalizedText } from "@/i18n/config"
