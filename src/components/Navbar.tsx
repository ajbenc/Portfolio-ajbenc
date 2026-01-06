import { useState } from 'react'
import { Menu, Moon, SunMedium, X } from 'lucide-react'
import clsx from 'clsx'
import type { Section } from '../types'

type NavbarProps = {
  sections: Section[]
  activeSection: string
  isDarkMode: boolean
  onToggleTheme: () => void
}

export function Navbar({ sections, activeSection, isDarkMode, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const renderLinks = () => (
    <nav className="flex flex-col gap-4 text-lg md:flex-row md:text-sm">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={() => setOpen(false)}
          className={clsx(
            'font-medium tracking-wide text-slate-600 transition hover:text-slate-900 dark:text-white/70 dark:hover:text-white',
            activeSection === section.id && 'text-slate-900 dark:text-white'
          )}
        >
          {section.label}
        </a>
      ))}
    </nav>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-raisin/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-[0.4em] text-slate-900 dark:text-white">
          AJ BENC
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {renderLinks()}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="rounded-full border border-leaf/20 p-2 text-leaf transition hover:border-leaf/40 dark:border-white/10 dark:text-white"
              aria-label="Toggle color mode"
            >
              {isDarkMode ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-mist shadow-ring-glow transition hover:opacity-90"
            >
              Start a project
            </a>
          </div>
        </div>
        <button
          type="button"
          className="rounded-full border border-slate-200/60 p-2 text-slate-700 dark:border-white/10 dark:text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200/60 bg-white px-6 py-4 dark:border-white/10 dark:bg-raisin/95 md:hidden">
          <div className="flex flex-col gap-6">
            {renderLinks()}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  onToggleTheme()
                  setOpen(false)
                }}
                className="rounded-full border border-leaf/20 px-4 py-2 text-sm text-leaf dark:border-white/10 dark:text-white"
              >
                {isDarkMode ? 'Light mode' : 'Dark mode'}
              </button>
              <a
                href="#contact"
                className="rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-mist"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
