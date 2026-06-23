// Generates the default social-share (Open Graph) image at public/og-image.png.
// Run with: node scripts/make-og.mjs
// Edit the CONFIG block below per site (the `brand` skill does this), then re-run.
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// ── BRAND CONFIG (set per site; keep in sync with site.ts + global.css) ──────
const CONFIG = {
  // Colors — hex approximations of the global.css oklch tokens (Glass Blue).
  charcoal: "#0F1B2D",
  accent: "#2F6BFF",
  accentDark: "#2456CC",
  cream: "#EEF4FB",
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
const C = CONFIG;

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="12%" cy="8%" r="70%">
      <stop offset="0%" stop-color="${C.accent}" stop-opacity="0.42"/>
      <stop offset="55%" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="${C.charcoal}"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Logo mark — glass pane + reflection + shine (B1) -->
  <g transform="translate(80,70) scale(1.25)" fill="none">
    <rect x="15" y="26" width="52" height="52" rx="11" stroke="${C.cream}" stroke-width="3.4"/>
    <g stroke="${C.accent}" stroke-width="5" stroke-linecap="round">
      <path d="M24 68 L44 44"/>
      <path d="M33 72 L53 48"/>
    </g>
    <path d="M70 14 L72.6 19.4 L78 22 L72.6 24.6 L70 30 L67.4 24.6 L62 22 L67.4 19.4 Z" fill="${C.accent}"/>
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
