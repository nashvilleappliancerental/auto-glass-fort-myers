// Homepage copy, written in the brand voice (see VOICE.md).
// CLAIMS HYGIENE: no fabricated reviews, stats, or years in business. REVIEWS stay
// empty until real ones exist (the section hides itself when empty). Mobile auto
// glass business; audience is DRIVERS, not homeowners. No "licensed" claim.

export const HERO = {
  badge: "Fort Myers, FL · Mobile Service",
  titleLead: "Mobile ",
  titleAccent: "auto glass", // rendered in the brand accent
  titleTail: " & windshield service in Fort Myers.",
  subhead:
    "Chip or crack in your windshield? We bring the glass to you. At home, at work, or stuck on the side of the road, anywhere in Fort Myers and across Southwest Florida. Insurance claims are welcome, and you get a real price before we start, not a surprise after.",
  badges: ["We come to you", "Insurance claims welcome", "Free quotes"],
};

export const TRUST = [
  { icon: "truck", title: "We come to you", desc: "We're fully mobile. Your driveway, the office lot, a parking garage downtown, wherever your car sits. We cover Fort Myers and all of Southwest Florida.", proof: "Mobile service" },
  { icon: "shield-check", title: "Insured & guaranteed", desc: "We're fully insured and we stand behind every install. Quality glass, proper urethane, no shortcuts. Your windshield holds up the roof and backs your airbags, so it's not the place to cut corners.", proof: "Fully insured" },
  { icon: "badge-check", title: "Insurance claims welcome", desc: "We work with the major insurers and help you file the claim. What you owe comes down to your policy, so we'll check it with you before anything starts.", proof: "We handle the claim" },
  { icon: "wrench", title: "ADAS calibration", desc: "Newer windshields hold the cameras that run lane-keeping and automatic braking. We recalibrate after the replacement so those systems actually do their job.", proof: "ADAS recalibration" },
];

// Leave empty until you have REAL testimonials.
export const REVIEWS: { name: string; area: string; text: string }[] = [];

export const FAQS = [
  { q: "Do you really come to me?", a: "Yes. We're fully mobile. Give us your address in Fort Myers, Cape Coral, Lehigh Acres, or anywhere nearby and we'll bring the glass and tools to your home, work, or the roadside. No waiting room, no dropping your car off for the day." },
  { q: "How much does a windshield replacement cost?", a: "It comes down to your vehicle and the glass: the year, make, and model, whether it's a plain windshield or one packed with sensors, OEM versus aftermarket, and whether your car needs ADAS calibration after. Rather than guess, we give you a free quote up front so you know the number before we start. If you're going through insurance, you may owe little or nothing, depending on your policy." },
  { q: "Will my insurance cover it, and do I owe a deductible in Florida?", a: "Florida was long a no-deductible state for auto glass. Under comprehensive coverage, insurers had to waive your deductible on a windshield (Florida Statute 627.7288). A 2023 law change let insurers start offering policies without that, so what you owe now comes down to your specific policy. We work with the major insurers and check your coverage with you before any work begins. No surprises." },
  { q: "Should a chip be repaired or the whole windshield replaced?", a: "Rule of thumb: a chip under about 3/8 inch, or a crack shorter than three inches and out of the driver's line of sight, can usually be repaired. Once a crack runs longer, reaches the edge, or sits in your view, it weakens the glass and you need a replacement. Southwest Florida heat spreads cracks fast, so text us a photo early. The sooner we see it, the better your odds of a quick repair instead of a new windshield." },
  { q: "Do you install OEM or aftermarket glass?", a: "Both, depending on your vehicle and budget, and we'll walk you through it. It matters most on newer cars with windshield cameras: the glass has to hit the right optical spec or your ADAS won't calibrate. We'll point you to the right glass for your car and won't put you on something that can't calibrate." },
  { q: "How long does it take, and when can I drive?", a: "The install runs about an hour. After that comes a short safe drive-away time while the urethane cures, and we'll tell you the exact point it's safe to drive. If your car needs ADAS calibration, that happens at the same appointment." },
];

// Decorative service-area map pins; the `locations` skill regenerates these.
export const MAP_PINS = [
  { city: "Fort Myers", top: "46%", left: "50%", hq: true },
  { city: "North Fort Myers", top: "26%", left: "52%", hq: false },
  { city: "Cape Coral", top: "50%", left: "26%", hq: false },
  { city: "Lehigh Acres", top: "42%", left: "80%", hq: false },
  { city: "Estero", top: "74%", left: "60%", hq: false },
  { city: "Bonita Springs", top: "90%", left: "54%", hq: false },
];
