import type { Project } from '../types'
import { ProjectCard } from './ProjectCard'

type ProjectGridProps = {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 space-y-3">
        <p className="section-heading">Projects</p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Case studies built for measurable outcomes
        </h2>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
