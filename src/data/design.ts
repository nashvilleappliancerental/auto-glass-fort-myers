// ── LOOK PRESETS ─────────────────────────────────────────────────────────────
// Bundles the non-color design dials so one choice changes the whole skeleton.
// Color is set separately in global.css. The brand/design skill picks a preset
// per site and ROTATES them so neighboring sites don't look alike.
//
// Dials:
//   radius   — corner roundness: "sharp" (industrial) | "soft" | "round" (friendly)
//   hero/services/why/area — which section VARIANT to use (files in components/sections/*)
//   order    — homepage section order (hero is always first, contact always last;
//              "reviews" only renders if there are real reviews)

export const PRESETS = {
  // Warm, rounded, photo hero — the original look (concrete site).
  "warm-classic": {
    radius: "soft",
    hero: "HeroSplit",
    services: "ServicesGrid",
    why: "WhyRows",
    area: "AreaMapList",
    order: ["services", "why", "reviews", "area", "faq"],
  },
  // Sharp corners, photo cards, dark stat band, directory area — heavy/industrial.
  "industrial-sharp": {
    radius: "sharp",
    hero: "HeroSplit",
    services: "ServicesShowcase",
    why: "WhyStatBand",
    area: "AreaDirectory",
    order: ["services", "area", "why", "reviews", "faq"],
  },
  // Centered hero, airy, soft — clean and modern.
  "clean-light": {
    radius: "soft",
    hero: "HeroCentered",
    services: "ServicesGrid",
    why: "WhyRows",
    area: "AreaMapList",
    order: ["why", "services", "area", "faq", "reviews"],
  },
  // Centered hero, big round cards, showcase — bold and friendly.
  "bold-round": {
    radius: "round",
    hero: "HeroCentered",
    services: "ServicesShowcase",
    why: "WhyStatBand",
    area: "AreaMapList",
    order: ["services", "why", "area", "reviews", "faq"],
  },
} as const;

// The active preset for THIS site — change this one line to re-skin the skeleton.
export const ACTIVE_PRESET: keyof typeof PRESETS = "clean-light";

export const DESIGN = PRESETS[ACTIVE_PRESET];
