# HERNA — Heritage of Nations

Corporate website for **HERNA HOLDING** (Cotonou, Benin).

**Production:** [https://www.hernaholding.com](https://www.hernaholding.com)

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · GSAP/Lenis · Playwright

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the port shown).

## Domain & email

Canonical domain: **hernaholding.com** (`NEXT_PUBLIC_SITE_URL=https://www.hernaholding.com`).

### Boîte mail `contact@hernaholding.com`

1. Chez ton registrar / Cloudflare du domaine → **Email Routing** (ou Google Workspace).
2. Crée `contact@hernaholding.com` (forward vers Gmail, ou boîte complète).
3. Soumets une fois le formulaire du site pour activer FormSubmit, puis confirme l’e-mail reçu.

Optionnel : `FORMSPREE_ID` / `NEXT_PUBLIC_FORMSPREE_ID` (voir `.env.example`).

## SEO

- Titles / descriptions EN+FR orientés « HERNA HOLDING · Cotonou · Bénin »
- Canonical + hreflang (`en` / `fr` / `x-default`)
- `sitemap.xml` + `robots.txt`
- JSON-LD Organization + WebSite
- H1 hero = **HERNA HOLDING**

Après déploiement : soumettre `https://www.hernaholding.com/sitemap.xml` dans [Google Search Console](https://search.google.com/search-console).

## Scripts

- `npm run build` — production build
- `npm run test:e2e` — Playwright smoke tests
- `node scripts/sync-plaquette-assets.mjs` — assets plaquette

## Deploy

Vercel (repo GitHub). Définir en production :

```bash
NEXT_PUBLIC_SITE_URL=https://www.hernaholding.com
```

Plaquette : `/company-profile.pdf`.
