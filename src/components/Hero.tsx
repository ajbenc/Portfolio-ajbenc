import { ArrowUpRight, Download, Github, Linkedin } from 'lucide-react'
import type { ReactElement } from 'react'
import profileImage from '../assests/gh-pro-pic.jpg'
import resumePdf from '../assests/cv-andres-benavides.pdf'
import type { HeroContent } from '../types'

const iconMap: Record<string, ReactElement> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  resume: <Download size={18} />,
}

type HeroProps = {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-24 pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-10 mx-auto h-72 w-72 animate-pulseGlow rounded-full bg-accent/30 blur-3xl" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-start">
        <div className="flex w-full flex-col gap-6 md:w-2/5">
          <figure className="relative w-full max-w-sm md:max-w-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-accent/80 to-leaf/60 blur-2xl opacity-70" />
            <div className="relative mx-auto aspect-square w-60 rounded-full border-4 border-mist bg-white/30 p-1 shadow-ring-glow dark:border-white/20 md:w-64">
              <img
                src={profileImage}
                alt="Portrait of AJ Benc"
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-full object-cover object-[50%_18%]"
              />
            </div>
          </figure>
          <div className="glass-panel space-y-5">
            <p className="text-sm uppercase tracking-[0.3em] text-leaf/60 dark:text-white/60">Collaboration fit</p>
            <ul className="space-y-4">
              {content.highlights.map((item) => (
                <li key={item.title} className="rounded-2xl border border-leaf/15 bg-meadow/40 p-4 dark:border-white/15 dark:bg-white/5">
                  <p className="text-sm font-semibold text-leaf dark:text-white">{item.title}</p>
                  <p className="text-sm text-leaf/80 dark:text-white/70">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="space-y-8 md:w-3/5">
          <div className="section-heading text-leaf/70 dark:text-white/60">{content.greeting}</div>
          <div>
            <p className="text-4xl font-semibold text-leaf dark:text-white md:text-5xl xl:text-6xl">{content.name}</p>
            <p className="mt-3 text-lg text-slate-600 dark:text-white/70 md:text-xl">{content.tagline}</p>
          </div>
          <p className="max-w-2xl text-base text-slate-600 dark:text-white/70 md:text-lg">{content.intro}</p>
          <ul className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-leaf/60 dark:text-white/60">
            {content.expertise.map((item) => (
              <li
                key={item}
                className="rounded-full border border-leaf/20 px-4 py-2 text-[0.7rem] text-leaf dark:border-white/15 dark:text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-4">
            {content.ctas.map((cta) => {
              const isPrimary = cta.id === 'resume'
              const href = isPrimary ? resumePdf : cta.href
              const isExternal = href.startsWith('http')
              return (
                <a
                  key={cta.id}
                  href={href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noreferrer' : undefined}
                  download={isPrimary ? 'Andres-Benavides-Resume.pdf' : undefined}
                  className={
                    isPrimary
                      ? 'flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-mist shadow-ring-glow transition hover:opacity-90'
                      : 'flex items-center gap-2 rounded-full border border-leaf/30 px-5 py-3 text-sm font-semibold text-leaf transition hover:border-leaf/60 dark:border-white/20 dark:text-white'
                  }
                >
                  {iconMap[cta.id] ?? <ArrowUpRight size={16} />} {cta.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
