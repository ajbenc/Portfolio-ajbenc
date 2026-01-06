export type Section = {
  id: string
  label: string
}

export type Highlight = {
  title: string
  detail: string
}

export type CTA = {
  id: string
  label: string
  href: string
}

export type HeroContent = {
  greeting: string
  name: string
  tagline: string
  intro: string
  ctas: CTA[]
  highlights: Highlight[]
  expertise: string[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  result: string
  links: ProjectLink[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type BlogPost = {
  id: string
  title: string
  date: string
  summary: string
  link: string
}

export type ContactChannel = {
  label: string
  href: string
}

export type SocialLink = ContactChannel & {
  icon: string
}
