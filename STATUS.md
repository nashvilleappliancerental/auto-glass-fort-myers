# STATUS — Fort Myers Auto Glass (auto-glass-fort-myers)

> **Read this first.** Single source of truth for where the project stands so any
> agent or person can jump in. Last updated: 2026-07-07.

## ⚠️ Before you end a session — UPDATE THIS FILE
Any agent or person working on this project **must update `STATUS.md` before
stopping** — this is how Claude ↔ Codex ↔ the owner stay in sync, and a stale
STATUS breaks the handoff. Specifically:
1. Move finished items from **TODO → Done**, and add any new tasks you discovered.
2. Bump the **Last updated** date above.
3. Record any new decisions or guardrails.
4. Commit it: `git add STATUS.md && git commit -m "Update STATUS"`.

If you're a fresh agent: read this whole file first, then start.

## What this is
Local-SEO marketing site for a mobile auto glass / windshield business serving
Fort Myers, FL and Southwest Florida. Static Astro site built from
`astro-local-seo-starter` (via the `build-local-site` orchestrator). Mobile
service-area business — no storefront. **Live in production** at
https://autoglassfortmyers.com.

## Where things live
- `src/data/site.ts` — **single source of business data** (name, phone, hours,
  domain, schema type). Every page/component reads from here. Edit the business
  facts ONLY here.
- `src/data/` — `homepage.ts`, `about.ts`, `faq.ts` page content.
- `src/content/services/` — 7 services: windshield-replacement, windshield-repair,
  adas-calibration, back-glass-replacement, side-window-replacement,
  mobile-auto-glass, fleet-auto-glass.
- `src/content/locations/` — 6 service-area cities: cape-coral, bonita-springs,
  estero, fort-myers-beach, lehigh-acres, north-fort-myers.
- `src/pages/guide/` — SEO guide hub: Florida free-windshield-law article,
  repair-or-replace checker, why-windshields-crack report, and the
  south-florida-auto-glass-scams consumer-alert article.
- `src/components/ArticleMeta.astro` — reusable byline (author + published/updated
  dates) shown at the top of guide articles. Author is set in `site.ts` (`AUTHOR`).
- `netlify.toml` — build config (`npm run build`, publish `dist`).
- `TEMPLATE_VERSION` in `site.ts` = `b6b73a2` (read by the `upgrade` skill).

## Current state — DONE
- Full site built: home, services (7), service-area cities (6), guides, about,
  faq, contact, sitemap.
- Copy humanized; SEO polish (schema, alt text, internal links); real site +
  location photos and Google Maps embeds.
- **Author bylines added to guides (2026-07-07):** visible author + publish date
  via `ArticleMeta.astro`; author = **Richard Graham, "Owner"** (set in `site.ts`
  `AUTHOR` — change the title if his role differs). Article schema `author` is now
  a `Person` (was `Organization`), publisher stays the Organization.
- **New guide (2026-07-07):** `/guide/south-florida-auto-glass-scams` — consumer
  alert on the "free windshield" AOB scam (gas-station/door-to-door solicitation),
  with red-flag cards, how-to-protect steps, and NICB/FDACS reporting links.
- **Real phone number set: (239) 217-9715** (`site.ts` phone + phoneHref).
- Git: pushed to `github.com/nashvilleappliancerental/auto-glass-fort-myers`,
  default branch **`main`**.
- Netlify: connected to the repo, auto-deploys on push, builds green.
- Domain live: `https://autoglassfortmyers.com` with valid SSL; **`www`
  301-redirects to apex**; DNS at Namecheap (apex A → `75.2.60.5`, www CNAME →
  netlify subdomain).

## NOT done — open gates
- **Business name unconfirmed** — `site.ts` still uses working placeholder
  "Fort Myers Auto Glass" (was flagged TODO). Confirm the real legal/brand name.
- **Hours unconfirmed** — Mon–Sat 7:30 AM–6:00 PM / Sun by appointment are
  placeholder defaults. Confirm real hours.
- **Email** — `info@autoglassfortmyers.com`; confirm it's a real, monitored inbox
  (and that the contact form delivers there).
- **Rating** — `rating.count` is 0 (stats hidden). Populate only with REAL review
  numbers, never fabricate.
- Google Search Console / analytics not confirmed set up.

## TODO (ordered)
- [ ] Confirm real business NAME with owner; update `site.ts` if different.
- [ ] Confirm real HOURS; update `site.ts`.
- [ ] Verify contact-form submissions are delivered and the email inbox is live.
- [ ] Add real review count/rating when available (or leave omitted).
- [ ] Set up Google Search Console + submit sitemap (`/sitemap`).

## Decisions / guardrails (don't violate)
- **All business facts live in `src/data/site.ts`** — the phone number is NOT
  hardcoded anywhere else; change it there only.
- Voice: human, concrete, no em dashes, no AI tells (see prior "Humanize" commit).
  Keep new copy consistent with that.
- Never fabricate trust stats (ratings/review counts) — real values or omit.
- schema.org type is `AutoRepair` (no AutoGlassShop type exists); address
  street/zip intentionally empty (service-area business, no storefront).
- Branch is **`main`** (renamed from `master`), matching the other
  nashvilleappliancerental sites.

## Build / run
```
cd auto-glass-fort-myers
npm install
npm run dev      # local dev server
npm run build    # outputs to dist/ (what Netlify runs)
npm run preview  # serve the built dist/
```
