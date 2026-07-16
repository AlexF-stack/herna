# Public assets

## Brand
- `/brand/herna-logo-clear.png` — **official plaquette lockup** (transparent)
- `/brand/herna-logo-official.png` — same lockup, sized for UI
- `/brand/herna-logo-nav-clear.png` — compact nav lockup (plaquette)
- `/brand/africa-map.svg` — Africa map, gold borders, Benin + HQ pin (generated)
- `/brand/africa-map-meta.json` — Benin centroid metadata
- `/brand/herna-mark.svg` — gold pillars mark
- `/brand/ceo-wayisuhu-dossou.png` — CEO portrait
- `/brand/herna-cover.jpg` — plaquette cover art

## Documents
- `/company-profile.pdf` — official **Plaquette HERNA** (Company Profile 2026)
- `/docs/HERNA-Company-Profile-2026.pdf` — same file, explicit download name

## Divisions
- `/divisions/equipment.png` — from plaquette page Equipment (heavy machinery)
- `/divisions/mining.png`
- `/divisions/agriculture.png` — from plaquette page Agriculture & Livestock
- `/divisions/energy.png`
- `/divisions/real-estate.png`

## Partners
- `/partners/*-clear.png` — transparent partner logos (use in UI)

## Media
See `/media/README.md`

## Regenerate from plaquette extracts
```bash
node scripts/sync-plaquette-assets.mjs
npm run generate:africa-map
```
