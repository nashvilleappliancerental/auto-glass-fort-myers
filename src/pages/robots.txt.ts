import type { APIRoute } from "astro";
import { SITE } from "../data/site";

// Generated at build so the Sitemap URL always matches SITE.url.
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url.replace(/\/$/, "")}/sitemap-index.xml\n`,
    { headers: { "Content-Type": "text/plain" } },
  );
