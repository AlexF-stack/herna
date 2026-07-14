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

Copy `.env.example` → `.env.local` and set `NEXT_PUBLIC_FORMSPREE_ID` for live form delivery.

## Scripts

- `npm run build` — production build
- `npm run test:e2e` — Playwright smoke tests

## Deploy

Connected to Vercel from the GitHub repository. Set `NEXT_PUBLIC_FORMSPREE_ID` in the Vercel project env.

Replace `public/company-profile.pdf` and `public/media/hero.mp4` with official assets when available.
