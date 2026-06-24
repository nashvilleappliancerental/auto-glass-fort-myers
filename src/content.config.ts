import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Each service is a Markdown file in src/content/services/<slug>.md.
// The <slug> (filename) is the root-level URL, e.g. /<service-slug>,
// rendered by a thin page in src/pages/<slug>.astro via ServiceDetail.astro.
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    icon: z.string(),
    // Photo shown on the service page + card (path under /public).
    image: z.string(),
    // Short blurb used on cards and listings.
    summary: z.string(),
    // Hero copy for the service page.
    tagline: z.string(),
    // SEO overrides (fall back to sensible defaults if omitted).
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    // Bullet list of what's included.
    highlights: z.array(z.string()).default([]),
    // "Our process" — numbered steps for how this service is delivered.
    process: z
      .array(z.object({ title: z.string(), desc: z.string() }))
      .default([]),
    // Honest cost drivers for this service (no dollar figures).
    costFactors: z
      .array(z.object({ label: z.string(), detail: z.string() }))
      .default([]),
    // Finish / option showcase cards.
    options: z
      .object({
        heading: z.string(),
        intro: z.string().optional(),
        items: z
          .array(
            z.object({
              name: z.string(),
              desc: z.string(),
              icon: z.string().optional(),
            }),
          )
          .default([]),
      })
      .optional(),
    // Service-specific FAQ — accordion + FAQPage schema.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

// Each location is a Markdown file in src/content/locations/<city>.md.
// The page URL is built as /<locationSlugPrefix>-<slug>-<state> (see src/pages/[location].astro).
const locations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/locations" }),
  schema: z.object({
    city: z.string(),
    state: z.string().default("GA"),
    order: z.number(),
    // Short blurb for the service-area hub cards.
    summary: z.string(),
    // Optional hero background photo for the city page (path under /public).
    image: z.string().optional(),
    // SEO overrides.
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    // Neighborhoods / nearby communities served — shown as chips.
    neighborhoods: z.array(z.string()).default([]),
    zips: z.array(z.string()).default([]),
    // "Built for [city]'s conditions" block: intro + bullet points.
    conditions: z
      .object({
        heading: z.string(),
        intro: z.string(),
        points: z.array(z.string()).default([]),
      })
      .optional(),
    // Most-requested work in this city. `slug` must match a service filename.
    popularProjects: z
      .array(z.object({ slug: z.string(), why: z.string() }))
      .default([]),
    // City-specific FAQ — rendered as an accordion + emitted as FAQPage schema.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { services, locations };
