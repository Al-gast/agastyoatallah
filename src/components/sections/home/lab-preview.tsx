import Link from "next/link"

import { ExperimentStage } from "@/components/ui/experiment-stage"
import { Reveal } from "@/components/ui/reveal"
import { experiments } from "@/data/experiments"
import { localize, type Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"

type LabPreviewProps = {
  locale: Locale
  copy: Dictionary["lab"]
}

export function LabPreview({ locale, copy }: LabPreviewProps) {
  return (
    <section id="lab" aria-labelledby="lab-heading" data-scene="lab" data-accent="#ff4f9a" className="section-shell lab-section">
      <div className="section-heading layout-grid">
        <div className="eyebrow">{copy.eyebrow}</div>
        <div>
          <h2 id="lab-heading">{copy.heading}</h2>
          <p>{copy.intro}</p>
        </div>
      </div>
      <div className="lab-preview-grid page-gutter">
        {experiments.slice(0, 3).map((experiment, index) => (
          <Reveal key={experiment.slug} delay={index * 0.05}>
            <article className="experiment-card">
              <ExperimentStage experiment={experiment} locale={locale} compact />
              <div className="experiment-card-meta">
                <span>{localize(experiment.category, locale)}</span>
                <h3>{localize(experiment.title, locale)}</h3>
                <p>{localize(experiment.summary, locale)}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="lab-cta page-gutter">
        <Link href={"/" + locale + "/lab"} className="button button-outline">
          {copy.open} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
