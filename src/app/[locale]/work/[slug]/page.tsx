import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { CSSProperties } from "react"

import { CaseStudyNav } from "@/components/work/case-study-nav"
import { getProject, projects } from "@/data/projects"
import { isLocale, localize } from "@/i18n/config"
import { getDictionary } from "@/i18n/dictionaries"

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>
}

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  if (!isLocale(locale)) return {}
  const project = getProject(slug)
  if (!project) return {}
  return {
    title: project.title + " | Agastyo Atallah",
    description: localize(project.summary, locale),
    alternates: {
      canonical: "/" + locale + "/work/" + slug,
      languages: {
        en: "/en/work/" + slug,
        id: "/id/work/" + slug,
      },
    },
    openGraph: {
      title: project.title,
      description: localize(project.summary, locale),
      images: [project.cover.src],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale, slug } = await params
  if (!isLocale(locale)) notFound()
  const project = getProject(slug)
  if (!project) notFound()
  const dictionary = await getDictionary(locale)

  const currentIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(currentIndex + 1) % projects.length]
  const narrative = project.narrative ?? []
  const sections = [
    { id: "project-overview", label: dictionary.caseStudy.eyebrow },
    ...narrative.map((item, index) => ({
      id: "chapter-" + (index + 1),
      label: localize(item.label, locale),
    })),
    { id: "project-gallery", label: dictionary.caseStudy.gallery },
  ]

  const projectStyle = {
    "--project-accent": project.theme.accent,
    "--project-surface": project.theme.surface,
    "--project-foreground": project.theme.foreground,
  } as CSSProperties

  return (
    <main className="case-study" style={projectStyle}>
      <header id="project-overview" className="case-hero" data-scene="project" data-accent={project.theme.accent}>
        <div className="layout-grid case-hero-grid">
          <div className="eyebrow">
            {dictionary.caseStudy.eyebrow} / {"0" + (currentIndex + 1)}
          </div>
          <div className="case-title">
            <h1>
              {(project.displayTitle ?? [project.title]).map((line) => (
                <span key={line} className="project-title-line">
                  {line}
                </span>
              ))}
            </h1>
            <p>{localize(project.summary, locale)}</p>
          </div>
          <div className="case-facts">
            {project.role ? (
              <div>
                <span>{dictionary.caseStudy.role}</span>
                <strong>{localize(project.role, locale)}</strong>
              </div>
            ) : null}
            {project.year ? (
              <div>
                <span>{dictionary.caseStudy.year}</span>
                <strong>{project.year}</strong>
              </div>
            ) : null}
            {project.stack?.length ? (
              <div>
                <span>{dictionary.caseStudy.stack}</span>
                <strong>{project.stack.join(" / ")}</strong>
              </div>
            ) : null}
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              {dictionary.caseStudy.visit} ↗
            </a>
          </div>
          <div className="case-cover browser-frame">
            <div className="browser-bar"><span /><span /><span /></div>
            <Image
              src={project.cover.src}
              alt={localize(project.cover.alt, locale)}
              width={project.cover.width}
              height={project.cover.height}
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </header>

      <div className="case-body page-gutter">
        <aside>
          <CaseStudyNav
            sections={sections}
            label={dictionary.caseStudy.sections}
          />
        </aside>
        <div className="case-narrative">
          {narrative.map((chapter, index) => (
            <section
              key={localize(chapter.title, locale)}
              id={"chapter-" + (index + 1)}
              className="case-chapter"
              data-scene="project"
              data-accent={project.theme.accent}
            >
              <span>{localize(chapter.label, locale)}</span>
              <h2>{localize(chapter.title, locale)}</h2>
              <p>{localize(chapter.body, locale)}</p>
            </section>
          ))}
          <section id="project-gallery" className="case-gallery" aria-label={project.title + " " + dictionary.caseStudy.gallery}>
            {project.gallery.map((image) => (
              <div key={image.src} className="case-gallery-image">
                <Image
                  src={image.src}
                  alt={localize(image.alt, locale)}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 900px) 100vw, 75vw"
                />
              </div>
            ))}
          </section>
          {project.outcome ? (
            <section className="case-outcome">
              <span>{dictionary.caseStudy.outcome}</span>
              <p>{localize(project.outcome, locale)}</p>
            </section>
          ) : null}
        </div>
      </div>

      <nav className="next-project" aria-label={dictionary.caseStudy.next}>
        <span>{dictionary.caseStudy.next}</span>
        <Link
          href={"/" + locale + "/work/" + nextProject.slug}
          style={{ "--next-accent": nextProject.theme.accent } as CSSProperties}
        >
          {nextProject.title}<span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </main>
  )
}
