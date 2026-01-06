import { ArrowUpRight } from 'lucide-react'
import type { BlogPost } from '../types'

type BlogSectionProps = {
  posts: BlogPost[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="section-heading">Signals</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white md:text-4xl">Notes from the field</h2>
        </div>
        <a
          href="https://example.com/blog"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-leaf dark:text-white/80"
        >
          Explore all essays
          <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post.id} className="glass-panel flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">{post.date}</p>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{post.title}</h3>
            <p className="text-sm text-slate-600 dark:text-white/70">{post.summary}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-leaf dark:text-white"
            >
              Read article <ArrowUpRight size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
