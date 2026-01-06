import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import { SkillsSection } from './components/SkillsSection'
// import { BlogSection } from './components/BlogSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { contactChannels, heroContent, projects, sections, skills, socialLinks } from './data/portfolio'

const getInitialTheme = () => {
  if (typeof window === 'undefined') return true
  const stored = window.localStorage.getItem('portfolio-theme')
  if (stored) return stored === 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light')
  }, [isDarkMode])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.25 }
    )

    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: heroContent.name,
    description: heroContent.intro,
    url: 'https://ajbenc.studio',
    jobTitle: heroContent.tagline,
    sameAs: socialLinks.map((link) => link.href),
  }

  return (
    <div
      className={clsx(
        'min-h-screen font-body transition-colors duration-500',
        isDarkMode ? 'bg-raisin text-mist' : 'bg-mist text-leaf'
      )}
    >
      <Navbar
        sections={sections}
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((prev) => !prev)}
      />
      <main className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="grid-overlay h-full w-full" />
        </div>
        <Hero content={heroContent} />
        <ProjectGrid projects={projects} />
        {/**
         * Signals / Notes from the field blog module is paused until new articles ship.
         * Uncomment BlogSection + blogPosts import when long-form content is ready.
         */}
        {/** <BlogSection posts={blogPosts} /> */}
        <SkillsSection skills={skills} />
        <ContactSection channels={contactChannels} />
      </main>
      <Footer socials={socialLinks} />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}

export default App
