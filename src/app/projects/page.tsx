import type { Metadata } from "next"

import { ProjectCard } from "@/components/ui/project-card"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects | Agastyo Atallah",
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto mt-12 max-w-5xl flex-1 px-4">
      <div className="mx-auto max-w-3xl">
        <h1
          id="projects-heading"
          className="my-4 border-b border-white/20 py-4 text-4xl font-black text-accent"
        >
          Projects!
        </h1>
      </div>

      <section className="mb-16" aria-labelledby="projects-heading">
        <p className="mx-auto max-w-3xl text-lg leading-8 text-text">
          I believe it’s the best way to learn anything. You get full control
          over the creative side of programming. Here’s is a partial list of
          projects I have built over the last few years:
        </p>

        <div className="space-y-12 pt-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
