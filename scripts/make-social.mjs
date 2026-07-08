// Generates social-profile assets in public/brand/:
//   social-avatar.png  1024x1024  profile pic (mark + accent glow), circle-crop safe.
//                       Works for Facebook, Yelp, Google Business, Instagram, LinkedIn.
//   fb-cover.jpg       1640x624   Facebook cover: cover photo + centered branded lockup.
// Run with: node scripts/make-social.mjs
// Colors + mark come from brand.mjs; set the copy + cover photo in CONFIG below.
import sharp from "sharp";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { COLORS, markInner } from "./brand.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const C = COLORS;

// ── CONFIG (set per site; wordmark casing mirrors SITE.logo) ─────────────────
const CONFIG = {
  // Landscape photo for the cover, relative to public/. Default to the hero;
  // point at a stronger wide shot when one exists.
  coverPhoto: "images/service-fleet-auto-glass.webp",
  eyebrow: "FORT MYERS", // SITE.logo.eyebrow
  main: "AUTO", // SITE.logo.main
  accent: "GLASS", // SITE.logo.accent
  tagline: "MOBILE WINDSHIELD SERVICE · SOUTHWEST FLORIDA", // avoid raw & in SVG
  comeToYou: "We come to you",
  phone: "(239) 217-9715",
};

const brandDir = join(root, "public", "brand");

// ── 1) Profile avatar — mark on a charcoal tile with an accent glow ──────────
const avatarSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <radialGradient id="glow" cx="28%" cy="20%" r="80%">
      <stop offset="0%" stop-color="${C.accent}" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="512" height="512" fill="${C.charcoal}"/>
  <rect width="512" height="512" fill="url(#glow)"/>
  <g transform="translate(58,51) scale(4.4)">
    ${markInner({ stroke: C.cream, accent: C.accent, strokeWidth: 3.0 })}
  </g>
</svg>`;
await sharp(Buffer.from(avatarSvg)).resize(1024, 1024).png().toFile(join(brandDir, "social-avatar.png"));
console.log("Wrote public/brand/social-avatar.png");

// ── 2) Facebook cover — cover photo + centered branded lockup ────────────────
const W = 1640, H = 624;
const coverPath = join(root, "public", CONFIG.coverPhoto);
if (!existsSync(coverPath)) {
  console.warn(`! Skipped fb-cover.jpg — cover photo not found: public/${CONFIG.coverPhoto}`);
} else {
  const K = CONFIG;
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <rect width="${W}" height="${H}" fill="${C.charcoal}" fill-opacity="0.20"/>
    <rect x="300" y="104" width="1040" height="416" rx="28" fill="${C.charcoal}" fill-opacity="0.86"/>
    <g transform="translate(772,128) scale(1.12)">
      ${markInner({ stroke: C.cream, accent: C.accent, strokeWidth: 2.4 })}
    </g>
    <text x="820" y="258" text-anchor="middle" font-family="Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="7" fill="${C.accent}">${K.eyebrow}</text>
    <text x="820" y="330" text-anchor="middle" font-family="Arial, sans-serif" font-size="68" font-weight="800" letter-spacing="-1"><tspan fill="${C.cream}">${K.main}</tspan><tspan fill="${C.accent}" dx="24">${K.accent}</tspan></text>
    <rect x="760" y="356" width="120" height="3" rx="1.5" fill="${C.accent}"/>
    <text x="820" y="406" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="600" letter-spacing="2" fill="${C.cream}" fill-opacity="0.82">${K.tagline}</text>
    <text x="820" y="470" text-anchor="middle" font-family="Arial, sans-serif" font-size="30" font-weight="700"><tspan fill="${C.cream}" fill-opacity="0.85">${K.comeToYou}</tspan><tspan fill="${C.accent}" dx="18">·  ${K.phone}</tspan></text>
  </svg>`;
  const bg = await sharp(coverPath).resize(W, H, { fit: "cover", position: "centre" }).toBuffer();
  const ov = await sharp(Buffer.from(overlay)).png().toBuffer();
  await sharp(bg).composite([{ input: ov, left: 0, top: 0 }]).jpeg({ quality: 90 }).toFile(join(brandDir, "fb-cover.jpg"));
  console.log("Wrote public/brand/fb-cover.jpg");
}
