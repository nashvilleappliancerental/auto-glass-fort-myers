# Fort Myers Auto Glass — brand kit

The logo is a **windshield outline + a tilted shine sparkle**. Source of truth for
the in-site logo is `src/components/Logo.astro`; these files are standalone exports
for directories, invoices, social profiles, print, etc.

## Files

| File | Use |
|------|-----|
| `logo-horizontal.svg` | Primary lockup (mark + wordmark), for **light** backgrounds |
| `logo-horizontal-reverse.svg` | Primary lockup, for **dark** backgrounds |
| `logo-stacked.svg` | Mark over wordmark, for square-ish / centered spots |
| `logo-mark.svg` / `.png` | Mark only, **dark** ink — for light backgrounds |
| `logo-mark-reverse.svg` / `.png` | Mark only, **cream** ink — for dark backgrounds |
| `app-icon.svg` / `.png` | Mark on the charcoal tile — avatars, app/profile icons, favicons |
| `fb-profile.png` | 512×512 profile picture (mark on charcoal), safe under a circle crop — Facebook/Google/social avatars |
| `fb-cover.jpg` | 1640×624 Facebook cover — fleet photo + centered branded lockup |

SVG is preferred everywhere (sharp at any size). PNGs are 512px exports for tools
that won't take SVG. The wordmark lockups use **Space Grotesk**; if a tool renders
them in the wrong font, use the PNG mark + set the text separately, or export the
SVG to PNG from a browser (which loads the embedded font).

## Colors

| Token | Hex | Use |
|-------|-----|-----|
| Charcoal | `#0F1B2D` | Primary dark — text, dark sections, the icon tile |
| Glass Blue (accent) | `#2F6BFF` | The one brand color — the sparkle, links, buttons |
| Accent dark | `#2456CC` | Hover/pressed state of the accent |
| Cream | `#EEF4FB` | Off-white background, reversed ink on dark |

(In-site these live as OKLCH tokens in `src/styles/global.css`; the hexes above are
the matched values.)

## Fonts

- **Display / headings:** Space Grotesk (700, 800)
- **Body:** Inter

## Clear space & sizing

- Keep padding of at least the sparkle's height around the lockup.
- Minimum legible mark size is ~20px; below that use `app-icon` (the tiled version).
- Don't recolor the mark outside the palette, restretch it, or add effects.
