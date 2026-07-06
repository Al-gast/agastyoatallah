import Image from "next/image"

import { localize, type Locale } from "@/i18n/config"
import type { Project } from "@/types/project"

type ProjectCardProps = {
  featured?: boolean
  number?: string
  project: Project
  reverse?: boolean
  locale?: Locale
}

export function ProjectCard({
  featured = false,
  number,
  project,
  reverse = false,
  locale = "en",
}: ProjectCardProps) {
  return (
    <article
      data-cursor="view"
      className={`group flex flex-1 items-center gap-6 rounded-xl border border-border bg-surface p-5 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-border-strong hover:shadow-[0_16px_40px_rgba(14,131,136,0.13)] focus-within:border-border-strong focus-within:shadow-[0_16px_40px_rgba(14,131,136,0.13)] motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 motion-reduce:transition-none sm:p-6 lg:gap-8 lg:p-8 ${
        featured ? "flex-col" : ""
      } ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className={featured ? "w-full lg:w-1/2" : "flex-1 lg:w-1/2"}>
        {number ? (
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] uppercase">
            <span className="text-accent">{number}</span>
            <span className="text-muted">Selected work</span>
          </div>
        ) : null}
        <h2
          className={`leading-snug font-semibold text-accent ${
            featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h2>
        <p className="mt-3 mb-6 text-base leading-7 text-muted-strong sm:text-lg sm:leading-8">
          {localize(project.summary, locale)}
        </p>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center justify-center gap-3 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-[transform,background-color] hover:bg-accent-hover active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
        >
          View Website
          <svg
            width="20"
            height="20"
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      <div
        className={`mx-auto overflow-hidden rounded-lg ${
          featured
            ? "order-first block w-full lg:order-none lg:w-1/2"
            : "hidden w-1/2 lg:block"
        }`}
      >
        <Image
          src={project.cover.src}
          alt={localize(project.cover.alt, locale)}
          width={project.cover.width}
          height={project.cover.height}
          className="aspect-video w-full object-cover opacity-[0.97] transition-[transform,opacity] duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-safe:group-hover:scale-[1.015] motion-safe:group-focus-within:scale-[1.015] motion-reduce:transition-none"
        />
      </div>
    </article>
  )
}
