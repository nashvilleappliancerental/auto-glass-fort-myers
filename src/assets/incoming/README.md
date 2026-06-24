# Photo drop folder

Drop your raw, full-size auto-glass photos here (JPG/PNG/HEIC — any size).

The `images` workflow picks them up from this folder, evaluates each one,
optimizes it to WebP, writes the optimized copy into `public/images/`, and
wires it into the hero / service / location pages.

Notes:
- Everything in this folder is **gitignored** except this README, so original
  photos never get committed.
- Originals can be archived to `src/assets/originals/` after processing.
- Helpful but optional: name files by where they go, e.g.
  `hero-windshield.jpg`, `service-adas-calibration.jpg`,
  `location-cape-coral.jpg`.
