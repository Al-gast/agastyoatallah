import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ExperienceTimeline } from "@/components/experience/experience-timeline"
import { experienceEntries } from "@/data/experience"
import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"
import { createExperienceViews } from "@/lib/experience"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dictionary = await getDictionary(locale)
  return {
    title: dictionary.metadata.experienceTitle,
    description: dictionary.metadata.experienceDescription,
    alternates: {
      canonical: "/" + locale + "/experience",
      languages: {
        en: "/en/experience",
        id: "/id/experience",
      },
    },
  }
}

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dictionary = await getDictionary(locale)
  const entries = createExperienceViews(
    experienceEntries,
    locale,
    dictionary.experience.present,
  )

  return (
    <main className="inner-page experience-page">
      <header className="inner-hero experience-hero" data-scene="experience" data-accent="#4f7cff">
        <div className="layout-grid">
          <p className="eyebrow">{dictionary.experience.pageEyebrow}</p>
          <div className="inner-hero-copy">
            <h1>{dictionary.experience.pageHeading}</h1>
            <p>{dictionary.experience.pageIntro}</p>
          </div>
          <Link href={"/" + locale + "#experience"} className="text-link inner-back">
            ← {dictionary.experience.back}
          </Link>
        </div>
      </header>
      <section className="experience-page-timeline page-gutter" aria-label={dictionary.nav.experience}>
        <ExperienceTimeline
          entries={entries}
          locale={locale}
          copy={dictionary.experience}
        />
      </section>
      <section className="experience-page-cta page-gutter">
        <Link href={"/" + locale + "#work"}>{dictionary.experience.workCta} ↗</Link>
        <Link href={"/" + locale + "#contact"}>{dictionary.experience.contactCta} ↗</Link>
      </section>
    </main>
  )
}
