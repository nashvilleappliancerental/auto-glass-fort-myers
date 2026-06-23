// Homepage copy — written in the brand voice (see VOICE.md).
// CLAIMS HYGIENE: no fabricated reviews, stats, or years in business. REVIEWS stay
// empty until real ones exist (the section hides itself when empty). Mobile auto
// glass business — audience is DRIVERS, not homeowners. No "licensed" claim.

export const HERO = {
  badge: "Fort Myers, FL · Mobile Service",
  titleLead: "Mobile ",
  titleAccent: "auto glass", // rendered in the brand accent
  titleTail: " & windshield service in Fort Myers.",
  subhead:
    "Chip or crack in your windshield? We come to you — at home, at work, or on the roadside — anywhere in Fort Myers and across Southwest Florida. Insurance claims welcome, and you get a free quote before we start.",
  badges: ["Mobile — we come to you", "Insurance claims welcome", "Free quotes"],
};

export const TRUST = [
  { icon: "truck", title: "We come to you", desc: "Fully mobile. We handle your windshield in your driveway, the office parking lot, or wherever you're stuck — across Fort Myers and Southwest Florida.", proof: "Mobile service" },
  { icon: "shield-check", title: "Insured & guaranteed", desc: "We're fully insured, we use quality glass and proper urethane, and we stand behind every install. No cutting corners on a part of your car that keeps you safe.", proof: "Fully insured" },
  { icon: "badge-check", title: "Insurance claims welcome", desc: "We work with the major insurers and help you file the claim. What you owe depends on your policy — we'll help you check before anything starts.", proof: "We handle the claim" },
  { icon: "wrench", title: "ADAS calibration", desc: "Newer windshields carry the cameras for lane-keeping and automatic braking. We recalibrate after replacement so those safety systems actually work.", proof: "ADAS recalibration" },
];

// Leave empty until you have REAL testimonials.
export const REVIEWS: { name: string; area: string; text: string }[] = [];

export const FAQS = [
  { q: "Do you really come to me?", a: "Yes — we're fully mobile. Give us your address in Fort Myers, Cape Coral, Lehigh Acres, or anywhere nearby and we'll bring the glass and tools to your home, work, or roadside. No waiting room, no dropping your car off." },
  { q: "How much does a windshield replacement cost?", a: "It depends on your vehicle and the glass — the year, make, and model, whether it's a basic windshield or one loaded with sensors, OEM versus aftermarket glass, and whether your car needs ADAS calibration afterward. Rather than guess, we give you a free, no-obligation quote up front so you know the number before we start. Going through insurance, what you owe may be little or nothing, depending on your policy." },
  { q: "Will my insurance cover it, and do I owe a deductible in Florida?", a: "Florida has long been a no-deductible state for auto glass — under comprehensive coverage, insurers were required to waive your deductible on a windshield (Florida Statute 627.7288). A 2023 law change now lets insurers offer policies that don't include that, so whether you owe anything comes down to your specific policy. We work with the major insurers and will help you check your coverage before any work begins — no surprises." },
  { q: "Should a chip be repaired or the whole windshield replaced?", a: "As a rule of thumb, a chip under about 3/8 inch or a crack shorter than roughly three inches — and not in the driver's direct line of sight — can usually be repaired. Once a crack runs longer, reaches the edge of the glass, or sits in your line of sight, it weakens the windshield and replacement is the safe call. Southwest Florida heat spreads cracks fast, so send us a photo early — the sooner we look, the more likely it's a quick repair." },
  { q: "Do you install OEM or aftermarket glass?", a: "Both, depending on your vehicle and budget — and we'll walk you through the difference. It matters most on newer cars with windshield-mounted cameras: the glass has to meet the right optical spec so your ADAS safety systems calibrate correctly. We'll recommend the right glass for your car and won't put you on something that won't calibrate." },
  { q: "How long does it take, and when can I drive?", a: "The install itself is usually about an hour. After that there's a short safe drive-away time while the urethane adhesive cures — we'll tell you exactly when it's safe to drive. If your vehicle needs ADAS calibration, we build that into the same appointment." },
];

// Decorative service-area map pins — the `locations` skill regenerates these.
export const MAP_PINS = [
  { city: "Fort Myers", top: "46%", left: "50%", hq: true },
  { city: "North Fort Myers", top: "26%", left: "52%", hq: false },
  { city: "Cape Coral", top: "50%", left: "26%", hq: false },
  { city: "Lehigh Acres", top: "42%", left: "80%", hq: false },
  { city: "Estero", top: "74%", left: "60%", hq: false },
  { city: "Bonita Springs", top: "90%", left: "54%", hq: false },
];
