import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col gap-6 rounded-3xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-slate-400 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">{project.result}</span>
      </div>
      <p className="text-sm text-slate-600 dark:text-white/70">{project.description}</p>
      <ul className="flex flex-wrap gap-2 text-xs text-slate-600 dark:text-white/70">
        {project.tech.map((tech) => (
          <li key={tech} className="rounded-full border border-slate-200/70 px-3 py-1 dark:border-white/15">
            {tech}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-leaf transition hover:gap-3 dark:text-white"
          >
            {link.label}
            <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/0 bg-gradient-to-r from-slate-200/20 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-white/5" />
    </article>
  )
}
