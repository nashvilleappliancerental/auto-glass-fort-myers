// Shared brand tokens for the raster asset generators (make-og.mjs, make-social.mjs).
// This is the ONE place the `brand` skill sets the palette + logo mark for generated
// images, so the mark/colors don't have to be kept in sync across several scripts.
// Keep the mark geometry in sync with src/components/Logo.astro (same 90x90 viewBox).

export const COLORS = {
  charcoal: "#0F1B2D", // primary dark — backgrounds, tiles
  accent: "#2F6BFF", // the one brand accent (Glass Blue)
  accentDark: "#2456CC", // accent hover/pressed
  cream: "#EEF4FB", // off-white — reversed ink on dark
};

// Inner SVG of the logo mark, authored in a 90x90 viewBox. Wrap the return value in
// a <g transform="translate(x,y) scale(s)"> to place and size it.
//   stroke      — outline color (usually COLORS.cream on a dark tile)
//   accent      — accent detail color (usually COLORS.accent)
//   strokeWidth — outline weight in the 90-unit space
export function markInner({ stroke, accent, strokeWidth = 2.6 }) {
  return (
    `<path d="M26 32 Q45 27 64 32 L70 60 Q45 66 20 60 Z" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linejoin="round"/>` +
    `<path d="M57 32 L59.5 38.5 L66 41 L59.5 43.5 L57 50 L54.5 43.5 L48 41 L54.5 38.5 Z" fill="${accent}" transform="rotate(22.5 57 41)"/>`
  );
}
