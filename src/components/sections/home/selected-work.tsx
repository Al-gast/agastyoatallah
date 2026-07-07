import Image from "next/image"
import Link from "next/link"
import type { CSSProperties } from "react"

import { Reveal } from "@/components/ui/reveal"
import { projects } from "@/data/projects"
import { localize, type Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"

type SelectedWorkProps = {
  locale: Locale
  copy: Dictionary["work"]
}

export function SelectedWork({ locale, copy }: SelectedWorkProps) {
  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="work" aria-labelledby="selected-work-heading" data-scene="work" className="section-shell work-section">
      <div className="section-heading layout-grid">
        <div className="eyebrow">{copy.eyebrow}</div>
        <div>
          <h2 id="selected-work-heading">{copy.heading}</h2>
          <p>{copy.intro}</p>
        </div>
      </div>
      <div className="work-list">
        {featuredProjects.map((project, index) => (
          <article
            key={project.slug}
            className="work-chapter"
            data-scene={"work-" + project.slug}
            data-accent={project.theme.accent}
            style={{ "--project-accent": project.theme.accent } as CSSProperties}
          >
            <div className="work-chapter-inner layout-grid">
              <div className="work-meta">
                <span>{"0" + (index + 1)}</span>
                <span>{copy.selected}</span>
              </div>
              <Reveal className="work-copy">
                <h3>
                  {(project.displayTitle ?? [project.title]).map((line) => (
                    <span key={line} className="project-title-line">
                      {line}
                    </span>
                  ))}
                </h3>
                <p>{localize(project.summary, locale)}</p>
                <Link href={"/" + locale + "/work/" + project.slug} className="project-link" data-cursor="view">
                  {copy.read} <span aria-hidden="true">↗</span>
                </Link>
              </Reveal>
              <Reveal className="work-media" delay={0.08}>
                <Link
                  href={"/" + locale + "/work/" + project.slug}
                  aria-label={copy.read + ": " + project.title}
                  data-cursor="view"
                >
                  <div className="browser-frame">
                    <div className="browser-bar"><span /><span /><span /></div>
                    <Image
                      src={project.cover.src}
                      alt={localize(project.cover.alt, locale)}
                      width={project.cover.width}
                      height={project.cover.height}
                      sizes="(max-width: 900px) 100vw, 65vw"
                    />
                  </div>
                </Link>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
      <div className="work-view-all page-gutter">
        <Link href={"/" + locale + "/projects"} className="button button-outline">
          {copy.viewAll} <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  )
}
