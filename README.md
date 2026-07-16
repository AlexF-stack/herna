# HERNA — Heritage of Nations

Corporate website for **HERNA HOLDING** (Cotonou, Benin).

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · GSAP/Lenis · Playwright

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown).

## Environment

Contact form posts to `/api/contact` and delivers to **contact@herna-group.com** via FormSubmit by default.

1. Submit the form once from the live/staging site.
2. Open the activation email in the HERNA inbox and confirm.
3. Later messages arrive normally (reply-to = visitor email).

Optional: set `FORMSPREE_ID` / `NEXT_PUBLIC_FORMSPREE_ID` to use Formspree instead (see `.env.example`).

## Scripts

- `npm run build` — production build
- `npm run test:e2e` — Playwright smoke tests

## Deploy

Connected to Vercel from the GitHub repository. No env var required for the default FormSubmit inbox flow.

Official Company Profile (Plaquette HERNA 2026) is served at `/company-profile.pdf`.
Set `NEXT_PUBLIC_SITE_URL=https://www.herna-group.com` when the custom domain is live.
