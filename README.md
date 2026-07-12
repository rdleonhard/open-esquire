# Open Esquire

Marketing site for [Open Esquire](https://www.openesquire.com) — attorney-led counsel for founders and operators at the intersection of law, technology, and markets.

Built with [Next.js](https://next.js.org) (static export) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build    # writes static site to out/
npm run deploy   # builds and publishes out/ via gh-pages
```

## Project layout

- `src/app/` — routes (home, bio, insights) and global styles
- `src/components/` — shared header, footer, and brand mark
- `src/lib/` — motion helpers and site constants
- `public/` — static assets, `robots.txt`, and `sitemap.xml`
