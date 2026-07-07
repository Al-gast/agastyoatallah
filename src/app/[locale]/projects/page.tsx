import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { CSSProperties } from "react"

import { projects } from "@/data/projects"
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
    title: dictionary.metadata.projectsTitle,
    description: dictionary.metadata.projectsDescription,
    alternates: {
      canonical: "/" + locale + "/projects",
      languages: {
        en: "/en/projects",
        id: "/id/projects",
      },
    },
  }
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dictionary = await getDictionary(locale)

  return (
    <main className="inner-page projects-page">
      <header className="inner-hero projects-hero" data-scene="work" data-accent="#4f7cff">
        <div className="layout-grid">
          <p className="eyebrow">{dictionary.work.allEyebrow}</p>
          <div className="inner-hero-copy">
            <h1>{dictionary.work.allHeading}</h1>
            <p>{dictionary.work.allIntro}</p>
          </div>
          <Link href={"/" + locale + "#work"} className="text-link inner-back">
            ← {dictionary.experience.back}
          </Link>
        </div>
      </header>

      <section className="projects-index page-gutter" aria-label={dictionary.work.allHeading}>
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="projects-index-card"
            style={{ "--project-accent": project.theme.accent } as CSSProperties}
            data-scene={"work-" + project.slug}
            data-accent={project.theme.accent}
          >
            <div className="projects-index-meta">
              <span>{"0" + (index + 1)}</span>
              <span>{project.role ? localize(project.role, locale) : dictionary.work.selected}</span>
            </div>
            <Link
              href={"/" + locale + "/work/" + project.slug}
              className="projects-index-media browser-frame"
              aria-label={dictionary.work.read + ": " + project.title}
              data-cursor="view"
            >
              <div className="browser-bar"><span /><span /><span /></div>
              <Image
                src={project.cover.src}
                alt={localize(project.cover.alt, locale)}
                width={project.cover.width}
                height={project.cover.height}
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </Link>
            <div className="projects-index-copy">
              <h2>{project.title}</h2>
              <p>{localize(project.summary, locale)}</p>
              <Link
                href={"/" + locale + "/work/" + project.slug}
                className="project-link"
                data-cursor="view"
              >
                {dictionary.work.read} <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
