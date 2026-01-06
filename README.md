## AJ Benc — Portfolio

A professional portfolio built with Vite, React 19, TypeScript, and TailwindCSS. The layout focuses on editorial typography, bold gradients, and measurable storytelling for product-minded engineers.

### Highlights

- Sticky navbar with section-aware highlighting and a client-side dark/light toggle persisted to `localStorage`.
- Hero with CTA buttons (GitHub, LinkedIn, Résumé download), metrics, and capabilities badges.
- Responsive project grid, blog teasers, skills matrix, and validated contact form with fallback channels.
- SEO-friendly head tags, JSON-LD schema, and a Google Analytics placeholder (`G-PORTFOLIO123`).
- Data-driven content via `src/data/portfolio.ts` so you can swap projects/blog posts without touching layout components.

### Tech Stack

- React 19 + TypeScript
- Vite 7
- TailwindCSS with forms/typography plugins
- lucide-react + clsx utilities

### Getting Started

```bash
npm install
npm run dev        # start local dev server
npm run build      # type-check + production build
npm run preview    # preview built assets
```

### Customization Cheatsheet

- Update copy, links, and metrics inside `src/data/portfolio.ts`.
- Replace `/resume.pdf`, the demo/case-study URLs, and analytics ID (`index.html`).
- Social icons map to `lucide-react`; add new entries by extending the `iconMap` in `Footer`.
- Blog cards, skills, and contact channels are arrays—append/remove items as needed.
- For inbound messages, create a Formspree form and set `VITE_FORMSPREE_ENDPOINT` in `.env` (see `.env.example`).

### Deployment Notes

- Provide a real Open Graph image at `/public/og-image.png` for rich link previews.
- Keep SEO metadata (title, description, twitter tags) in `index.html` aligned with your brand voice.
- Wire the validated contact form to your email/API service; the current implementation only confirms success client-side.
