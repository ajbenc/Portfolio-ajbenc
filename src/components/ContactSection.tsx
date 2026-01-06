import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import type { ContactChannel } from '../types'

type ContactSectionProps = {
  channels: ContactChannel[]
}

type FormState = {
  email: string
  message: string
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactSection({ channels }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({ email: '', message: '' })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

  const validate = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Share a valid email and I will reply within 24h.')
      return false
    }
    if (form.message.trim().length < 10) {
      setError('Tell me a little more about the project (10+ characters).')
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      setStatus('error')
      return
    }
    if (!formEndpoint) {
      setError('Contact form is offline. Email me directly at ajbenc@gmail.com.')
      setStatus('error')
      return
    }

    try {
      setStatus('loading')
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          email: form.email,
          message: form.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setStatus('success')
      setForm({ email: '', message: '' })
      setError('')
    } catch (submissionError) {
      console.error(submissionError)
      setError('Something went wrong. Email me at ajbenc@gmail.com while I fix the contact form.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <div className="glass-panel space-y-6">
        <div>
          <p className="section-heading">Contact</p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Tell me about your next launch
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <label className="block text-sm text-slate-600 dark:text-white/70">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 focus:border-slate-400 dark:border-white/15 dark:text-white"
                placeholder="founder@studio.com"
                required
              />
            </label>
            <label className="block text-sm text-slate-600 dark:text-white/70">
              Project outline
              <textarea
                name="message"
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="mt-2 h-36 w-full rounded-2xl border border-slate-200 bg-transparent px-4 py-3 text-slate-900 focus:border-slate-400 dark:border-white/15 dark:text-white"
                placeholder="What are you building and when do you want to ship?"
                required
              />
            </label>
            {error && <p className="text-sm text-red-500 dark:text-red-300">{error}</p>}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-mist shadow-ring-glow disabled:opacity-60"
            >
              <Send size={16} />
              {status === 'loading' ? 'Sending…' : 'Submit inquiry'}
            </button>
            {status === 'success' && (
              <p className="text-sm text-leaf dark:text-green-300">Thank you! I will respond shortly.</p>
            )}
          </form>
          <div className="space-y-6">
            <p className="text-sm text-slate-600 dark:text-white/70">
              Prefer async scheduling? Reach out directly and I will share a tailored audit with next steps.
            </p>
            <ul className="space-y-4 text-slate-900 dark:text-white">
              {channels.map((channel) => (
                <li key={channel.href}>
                  <a
                    href={channel.href}
                    className="flex items-center gap-3 text-lg text-leaf transition hover:text-leaf/70 dark:text-white/80 dark:hover:text-white"
                  >
                    <Mail size={18} />
                    {channel.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
