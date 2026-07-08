// Generates the default social-share (Open Graph) image at public/og-image.png.
// Run with: node scripts/make-og.mjs
// Edit the CONFIG block below per site (the `brand` skill does this), then re-run.
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { COLORS, markInner } from "./brand.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// ── OG COPY (colors + mark come from brand.mjs; set the copy per site) ───────
const CONFIG = {
  // Wordmark (mirrors SITE.logo): <top> over <main> <accent>
  headlineTop: "Fort Myers",
  headlineMain: "Auto",
  headlineAccent: "Glass",
  // Copy — claims hygiene: no fabricated certifications.
  eyebrow: "MOBILE WINDSHIELD SERVICE · SOUTHWEST FLORIDA", // avoid raw & in SVG text
  subtitle: "Windshield Replacement · Rock-Chip Repair · ADAS Calibration",
  domain: "autoglassfortmyers.com",
  cta: "Free Quote",
};
const C = { ...COLORS, ...CONFIG };

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="12%" cy="8%" r="70%">
      <stop offset="0%" stop-color="${C.accent}" stop-opacity="0.42"/>
      <stop offset="55%" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${C.charcoal}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Logo mark — windshield outline + tilted shine sparkle (from brand.mjs) -->
  <g transform="translate(80,70) scale(1.25)">
    ${markInner({ stroke: C.cream, accent: C.accent, strokeWidth: 2.6 })}
  </g>

  <text x="196" y="140" font-family="Arial, sans-serif" font-size="26" font-weight="700" letter-spacing="3" fill="${C.accent}">${C.eyebrow}</text>

  <!-- Headline -->
  <text x="76" y="330" font-family="Arial, sans-serif" font-size="104" font-weight="800" letter-spacing="-2" fill="${C.cream}">${C.headlineTop}</text>
  <text x="76" y="440" font-family="Arial, sans-serif" font-size="104" font-weight="800" letter-spacing="-2"><tspan fill="${C.cream}">${C.headlineMain}</tspan><tspan fill="${C.accent}" dx="34">${C.headlineAccent}</tspan></text>

  <!-- Subtitle -->
  <text x="80" y="505" font-family="Arial, sans-serif" font-size="32" fill="${C.cream}" fill-opacity="0.78">${C.subtitle}</text>

  <!-- Footer -->
  <rect x="80" y="548" width="1040" height="1.5" fill="${C.cream}" fill-opacity="0.15"/>
  <text x="80" y="600" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="${C.cream}">${C.domain}</text>
  <g>
    <rect x="905" y="572" width="215" height="44" rx="22" fill="${C.accent}"/>
    <text x="1012" y="601" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#ffffff">${C.cta}</text>
  </g>
</svg>`;

writeFileSync(join(root, "public", "og-image.svg"), svg);
await sharp(Buffer.from(svg)).png().toFile(join(root, "public", "og-image.png"));
console.log("Wrote public/og-image.png and public/og-image.svg");
