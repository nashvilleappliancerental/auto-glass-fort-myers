# astro-local-seo-starter

A trade-agnostic Astro starter for fast local-service SEO sites (concrete,
roofing, plumbing, etc.). Built from the Savannah Concrete Works site.
Astro 6 · Tailwind 4 · static · Netlify.

## What you get

- Reusable component library + a brand-token theme (re-theme by changing values)
- `services` and `locations` content collections with rich schemas
  (`process`, `costFactors`, `options`, `faqs`, `conditions`, `popularProjects`)
- SEO baked in: per-page meta, JSON-LD (LocalBusiness / Service / FAQPage),
  XML sitemap, an HTML `/sitemap`, a generated `/robots.txt`, and an OG image script
- Data-driven homepage + about pages (copy lives in `src/data/`)

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
```

## Make it a real site (the brief)

Everything site-specific is concentrated in a few places:

1. **`src/data/site.ts`** — the brief: business name, trade, phone, email, domain,
   address, hours, `locationSlugPrefix`, and the `logo` wordmark. Start here.
2. **`src/styles/global.css`** — set the 3 brand colors (`--brand-charcoal`,
   `--brand-accent`, `--brand-cream`) + fonts. Re-themes the whole site.
3. **`src/layouts/Layout.astro`** — update the Google Fonts `<link>` to match.
4. **`src/data/homepage.ts` + `about.ts`** — the homepage/about copy.

## Content

- **Services:** copy `src/content/services/example-service.md` → `your-slug.md`
  (filename = URL), then copy `src/pages/example-service.astro` → `your-slug.astro`
  (must render `<ServiceDetail id="your-slug" />`).
- **Locations:** copy `src/content/locations/example-city.md` → `your-city.md`.
  URLs become `/{locationSlugPrefix}-{city}-{state}`.
- The `example-*` files have every field filled and double as documentation.

## Brand assets

- **Logo:** `src/components/Logo.astro` (mark + `SITE.logo` wordmark). Swap the
  placeholder SVG mark for the real one; the accent word uses the brand color.
- **OG image:** edit the CONFIG block in `scripts/make-og.mjs`, then
  `node scripts/make-og.mjs` → `public/og-image.png`.
- **Favicon:** replace `public/favicon.svg`.

## Deploy

`netlify.toml` is set for static deploy. Set `SITE.url` (canonical + sitemap),
add any old-slug 301s to `netlify.toml`, then connect the repo in Netlify.

## Ground rules

- **No fabricated claims.** Don't invent years in business, project counts,
  ratings, or reviews. `homepage.ts` ships with `REVIEWS` empty (the section
  hides itself); only add real ones.
- Optimize photos to WebP; keep originals out of git.

> See `EXTRACTION-PLAN.md` for how this template maps back to the source site
> and where each brief value lands.
