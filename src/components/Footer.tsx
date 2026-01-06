import { Copyright, Dribbble, Github, Linkedin } from 'lucide-react'
import type { SocialLink } from '../types'

type FooterProps = {
  socials: SocialLink[]
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  dribbble: Dribbble,
}

export function Footer({ socials }: FooterProps) {
  return (
    <footer className="border-t border-leaf/10 bg-meadow dark:border-white/5 dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2 text-sm text-leaf/80 dark:text-white/60">
          <Copyright size={16} /> {new Date().getFullYear()} AJ Benc. All rights reserved.
        </div>
        <div className="flex gap-5">
          {socials.map((social) => {
            const Icon = iconMap[social.icon as keyof typeof iconMap]
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noreferrer"
                className="text-leaf transition hover:text-leaf/70 dark:text-white/60 dark:hover:text-white"
              >
                {Icon ? <Icon size={18} /> : social.label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
