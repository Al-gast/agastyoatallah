import Image from "next/image"

import type { Project } from "@/types/project"

type ProjectCardProps = {
  project: Project
  reverse?: boolean
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article
      data-cursor="view"
      className={`group flex flex-1 items-center gap-8 rounded-lg border border-border bg-surface p-4 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-border-strong hover:shadow-[0_14px_36px_rgba(14,131,136,0.14)] focus-within:border-border-strong focus-within:shadow-[0_14px_36px_rgba(14,131,136,0.14)] motion-safe:hover:-translate-y-1 motion-safe:focus-within:-translate-y-1 motion-reduce:transition-none lg:p-8 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex-1 lg:w-1/2">
        <h2 className="text-xl leading-snug font-semibold text-accent sm:text-2xl">
          {project.title}
        </h2>
        <p className="mt-2 mb-4 text-base leading-7 text-muted-strong sm:text-lg sm:leading-8">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-[transform,background-color] hover:bg-accent-hover active:scale-95 motion-reduce:transform-none motion-reduce:transition-none"
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

      <div className="mx-auto hidden w-1/2 overflow-hidden rounded-lg lg:block">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="aspect-video w-full object-cover opacity-[0.97] transition-[transform,opacity] duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100 motion-safe:group-hover:scale-[1.015] motion-safe:group-focus-within:scale-[1.015] motion-reduce:transition-none"
        />
      </div>
    </article>
  )
}
