"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries"
import type { ExperienceView } from "@/lib/experience"
import { projects } from "@/data/projects"

type ExperienceTimelineProps = {
  entries: ExperienceView[]
  locale: Locale
  copy: Dictionary["experience"]
  compact?: boolean
}

export function ExperienceTimeline({
  entries,
  locale,
  copy,
  compact = false,
}: ExperienceTimelineProps) {
  const [activeId, setActiveId] = useState(entries[0]?.id ?? "")

  useEffect(() => {
    if (entries.length === 0) return
    const observer = new IntersectionObserver(
      (observed) => {
        const visible = observed
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveId(visible.target.id)
      },
      { rootMargin: "-25% 0px -58%", threshold: [0, 0.2, 0.5] },
    )
    entries.forEach((entry) => {
      const element = document.getElementById("experience-" + entry.id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [entries])

  if (entries.length === 0) {
    return (
      <div className="experience-empty">
        <span aria-hidden="true">↳</span>
        <div>
          <h3>{copy.emptyTitle}</h3>
          <p>{copy.emptyBody}</p>
        </div>
      </div>
    )
  }

  return (
    <div className={"experience-timeline " + (compact ? "is-compact" : "")}>
      <aside className="experience-years" aria-hidden="true">
        {entries.map((entry) => (
          <span key={entry.id} className={activeId === entry.id ? "is-active" : ""}>
            {entry.startYear}
          </span>
        ))}
      </aside>
      <div className="experience-entries">
        {entries.map((entry) => (
          <article
            key={entry.id}
            id={"experience-" + entry.id}
            className={"experience-entry " + (activeId === entry.id ? "is-active" : "")}
          >
            <div className="experience-entry-meta">
              <span>{entry.period}</span>
              {entry.employmentType ? <span>{entry.employmentType}</span> : null}
              {entry.location ? <span>{entry.location}</span> : null}
            </div>
            <div className="experience-entry-heading">
              <h3>{entry.role}</h3>
              {entry.companyUrl ? (
                <a href={entry.companyUrl} target="_blank" rel="noreferrer">
                  {entry.company} ↗
                </a>
              ) : (
                <strong>{entry.company}</strong>
              )}
            </div>
            <p className="experience-summary">{entry.summary}</p>
            {!compact && entry.contributions.length ? (
              <div className="experience-contributions">
                <span>{copy.contribution}</span>
                <ul>
                  {entry.contributions.map((contribution) => (
                    <li key={contribution}>{contribution}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {entry.stack.length ? (
              <div className="experience-stack">
                <span>{copy.stack}</span>
                <div>{entry.stack.map((item) => <code key={item}>{item}</code>)}</div>
              </div>
            ) : null}
            {entry.relatedProjectSlugs.length ? (
              <div className="experience-related">
                <span>{copy.relatedWork}</span>
                {entry.relatedProjectSlugs.map((slug) => {
                  const project = projects.find((item) => item.slug === slug)
                  return project ? (
                    <Link key={slug} href={"/" + locale + "/work/" + slug}>
                      {project.title} ↗
                    </Link>
                  ) : null
                })}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </div>
  )
}
