import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { ExperimentStage } from "@/components/ui/experiment-stage"
import { Reveal } from "@/components/ui/reveal"
import { experiments } from "@/data/experiments"
import { isLocale, localize } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const dictionary = await getDictionary(locale)
  return {
    title: dictionary.metadata.labTitle,
    description: dictionary.metadata.labDescription,
    alternates: {
      canonical: "/" + locale + "/lab",
      languages: { en: "/en/lab", id: "/id/lab" },
    },
  }
}

export default async function LabPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dictionary = await getDictionary(locale)

  return (
    <main className="inner-page lab-page">
      <header className="inner-hero" data-scene="lab" data-accent="#ff4f9a">
        <div className="layout-grid">
          <p className="eyebrow">{dictionary.labPage.eyebrow}</p>
          <div className="inner-hero-copy">
            <h1>
              {dictionary.labPage.headingBefore}{" "}
              <em>{dictionary.labPage.headingEmphasis}</em>.
            </h1>
            <p>{dictionary.labPage.intro}</p>
          </div>
          <Link href={"/" + locale + "#lab"} className="text-link inner-back">
            ← {dictionary.labPage.back}
          </Link>
        </div>
      </header>
      <section className="lab-index page-gutter" aria-label={dictionary.nav.lab}>
        {experiments.map((experiment, index) => (
          <article
            key={experiment.slug}
            id={experiment.slug}
            className="lab-entry"
            data-scene={"lab-" + experiment.slug}
            data-accent={experiment.accent}
          >
            <Reveal className="lab-entry-meta">
              <span>{"0" + (index + 1)}</span>
              <span>{localize(experiment.category, locale)}</span>
              <h2>{localize(experiment.title, locale)}</h2>
              <p>{localize(experiment.summary, locale)}</p>
            </Reveal>
            <Reveal className="lab-entry-stage" delay={0.08}>
              <ExperimentStage experiment={experiment} locale={locale} />
            </Reveal>
          </article>
        ))}
      </section>
      <section className="next-cta page-gutter">
        <p>{dictionary.labPage.enough}</p>
        <Link href={"/" + locale + "#work"}>
          {dictionary.labPage.seeWork} <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  )
}
