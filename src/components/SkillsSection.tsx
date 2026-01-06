import { BadgeCheck } from 'lucide-react'
import type { SkillGroup } from '../types'

type SkillsSectionProps = {
  skills: SkillGroup[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 space-y-2">
        <p className="section-heading">Capabilities</p>
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">
          Available skillsets for project contribution
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((group) => (
          <div key={group.title} className="glass-panel space-y-4">
            <div className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">
              <BadgeCheck size={16} />
              {group.title}
            </div>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-white/80">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-200/70 bg-slate-50 px-3 py-2 dark:border-white/5 dark:bg-white/5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
