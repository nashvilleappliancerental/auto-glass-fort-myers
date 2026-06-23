// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/data/site.ts';

// https://astro.build/config
export default defineConfig({
  // Production domain (canonical URLs + sitemap) — single source of truth: site.ts.
  site: SITE.url,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
