export const locales = ["en", "id"] as const

export type Locale = (typeof locales)[number]
export type LocalizedText = Record<Locale, string>

export const defaultLocale: Locale = "en"

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function localize(text: LocalizedText, locale: Locale) {
  return text[locale]
}
