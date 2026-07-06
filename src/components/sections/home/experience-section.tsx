import Link from "next/link"

import { ExperienceTimeline } from "@/components/experience/experience-timeline"
import { Reveal } from "@/components/ui/reveal"
import { experienceEntries } from "@/data/experience"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"
import { createExperienceViews } from "@/lib/experience"

type ExperienceSectionProps = {
  locale: Locale
  copy: Dictionary["experience"]
}

export function ExperienceSection({ locale, copy }: ExperienceSectionProps) {
  const entries = createExperienceViews(
    experienceEntries.slice(0, 2),
    locale,
    copy.present,
  )

  return (
    <section id="experience" aria-labelledby="experience-heading" data-scene="experience" data-accent="#4f7cff" className="section-shell experience-section">
      <div className="section-heading layout-grid">
        <div className="eyebrow">{copy.eyebrow}</div>
        <div>
          <h2 id="experience-heading">{copy.heading}</h2>
          <p>{copy.intro}</p>
        </div>
      </div>
      <Reveal className="experience-home-timeline page-gutter">
        <ExperienceTimeline entries={entries} locale={locale} copy={copy} compact />
      </Reveal>
      <div className="experience-cta page-gutter">
        <Link href={"/" + locale + "/experience"} className="button button-outline">
          {copy.viewAll} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
