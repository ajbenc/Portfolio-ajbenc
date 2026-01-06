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

