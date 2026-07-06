"use client"

import { usePathname, useRouter } from "next/navigation"

import type { Locale } from "@/i18n/config"

type LanguageSwitcherProps = {
  locale: Locale
  label: string
  englishLabel: string
  indonesianLabel: string
  onSwitch?: () => void
}

export function LanguageSwitcher({
  locale,
  label,
  englishLabel,
  indonesianLabel,
  onSwitch,
}: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/" + locale
  const router = useRouter()

  function switchLocale(nextLocale: Locale) {
    if (nextLocale === locale) return
    const segments = pathname.split("/")
    segments[1] = nextLocale
    const nextPath = segments.join("/") || "/" + nextLocale
    const suffix = window.location.search + window.location.hash
    document.cookie =
      "NEXT_LOCALE=" + nextLocale + ";path=/;max-age=31536000;samesite=lax"
    onSwitch?.()
    router.push(nextPath + suffix)
  }

  return (
    <div className="language-switcher" role="group" aria-label={label}>
      <button
        type="button"
        className={locale === "en" ? "is-active" : ""}
        aria-pressed={locale === "en"}
        aria-label={englishLabel}
        title={englishLabel}
        onClick={() => switchLocale("en")}
      >
        EN
      </button>
      <button
        type="button"
        className={locale === "id" ? "is-active" : ""}
        aria-pressed={locale === "id"}
        aria-label={indonesianLabel}
        title={indonesianLabel}
        onClick={() => switchLocale("id")}
      >
        ID
      </button>
    </div>
  )
}
