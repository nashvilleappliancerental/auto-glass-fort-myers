// ── SITE BRIEF ──────────────────────────────────────────────────────────────
// The single source of business data — every page/component reads from here.
// TODO before launch: confirm real business NAME + PHONE (currently placeholders).

// Template version this site is up to date with (read by the `upgrade` skill).
export const TEMPLATE_VERSION = "b6b73a2";

export const SITE = {
  name: "Fort Myers Auto Glass", // TODO: confirm real business name (working placeholder)
  shortName: "FM Auto Glass", // short form (tight spaces)
  trade: "auto glass", // lowercase trade noun (multi-word ok; tradeCap title-cases it)
  tradeAdjective: "mobile", // used in copy: "{tradeAdjective} auto glass services in ..."

  url: "https://autoglassfortmyers.com", // production domain — canonical URLs + sitemap
  domain: "autoglassfortmyers.com",
  tagline: "Mobile auto glass & windshield service. We come to you.",

  phone: "(239) 217-9715",
  phoneHref: "tel:+12392179715",
  email: "info@autoglassfortmyers.com",

  // LocalBusiness structured data. Mobile/service-area business — no storefront, so
  // street + zip are intentionally empty. TODO: refine Layout schema to omit empty
  // address fields + add areaServed (template improvement).
  address: { street: "", city: "Fort Myers", state: "FL", zip: "" },

  hours: [
    { day: "Mon–Sat", time: "7:30 AM – 6:00 PM" }, // TODO: confirm real hours
    { day: "Sun", time: "By appointment" },
  ],

  // Location page URLs: /{locationSlugPrefix}-{city}-{state}
  // e.g. "auto-glass" -> /auto-glass-cape-coral-fl
  locationSlugPrefix: "auto-glass",

  // schema.org @type — no AutoGlassShop type exists; AutoRepair is the closest
  // automotive LocalBusiness subtype.
  schemaType: "AutoRepair",

  // Logo wordmark: <eyebrow> (small) over <main> <accent>, accent in brand color.
  logo: { eyebrow: "FORT MYERS", main: "AUTO", accent: "GLASS" },

  // Optional trust stats — set REAL values only, or omit. Never fabricate.
  rating: { value: "5.0", count: 0 },
};

export const NAV = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/guide", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Capitalized trade noun for titles/headings. Title-cases every word so multi-word
// trades render correctly ("auto glass" -> "Auto Glass").
export const tradeCap = SITE.trade
  .split(" ")
  .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
  .join(" ");

// "City, ST" — the primary service location, used across page titles + schema.
export const cityState = `${SITE.address.city}, ${SITE.address.state}`;

// Canonical builder for a location page URL from a locations collection entry.
export const locationUrl = (entry: { id: string; data: { state: string } }) =>
  `/${SITE.locationSlugPrefix}-${entry.id}-${entry.data.state.toLowerCase()}`;
