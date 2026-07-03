import Image from "next/image"

import type { Project } from "@/types/project"

type ProjectCardProps = {
  project: Project
  reverse?: boolean
}

export function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <article
      className={`flex flex-1 items-center gap-8 rounded-lg bg-panel p-4 lg:p-8 ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="flex-1 lg:w-1/2">
        <h2 className="text-2xl font-bold text-accent">{project.title}</h2>
        <p className="mt-2 mb-4 text-lg leading-8 text-text">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-lg bg-action px-5 py-3 text-sm font-semibold text-white opacity-95 transition hover:opacity-100 active:scale-95"
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

      <div className="mx-auto hidden w-1/2 lg:block">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="aspect-video w-full rounded-lg object-cover"
        />
      </div>
    </article>
  )
}
