# Elements Jiu Jitsu Regensburg

Statische, SEO-optimierte Website für [Elements Jiu Jitsu Regensburg](https://www.elementsjiujitsu.de) — BJJ, MMA, Thaiboxen & Grappling in Regensburg & Kelheim.

Gebaut mit [Astro](https://astro.build) + Tailwind CSS 4.

## Entwicklung

```sh
npm install
npm run dev        # Dev-Server auf http://localhost:4321
npm run build      # Produktions-Build nach ./dist
npm run preview    # Produktions-Build lokal testen
```

### Lokale Vorschau der Barrierefreiheitserklärung

Nach `npm run dev` ist die Barrierefreiheitserklärung direkt unter
`http://localhost:4321/barrierefreiheit` erreichbar. Alternativ kann nach
`npm run build` mit `npm run preview` die statisch gebaute Seite lokal geprüft
werden. Der Link erscheint zusätzlich im Footer neben Impressum und
Datenschutzerklärung.

## Deployment

Der Build erzeugt rein statisches HTML in `dist/` — deploybar auf jedem Static Host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 …). Kein Server nötig.

**Wichtig vor dem Go-Live:**

1. **Domain setzen:** `site` in `astro.config.mjs` auf die finale Domain anpassen (aktuell `https://www.elementsjiujitsu.de`). Davon hängen canonical URLs, Open-Graph-URLs, `sitemap-index.xml` und `robots.txt` ab (die Sitemap-URL in `public/robots.txt` ebenfalls anpassen).
2. **Impressum/Datenschutz prüfen:** Die Website-URL im Impressum wird automatisch aus der `site`-Config übernommen. Der Hosting-Abschnitt in der Datenschutzerklärung ist bewusst anbieterneutral formuliert — nach Wahl des Hosters ggf. konkretisieren (der ursprüngliche Text nannte Lovable als Hoster).
3. **Google Search Console:** Nach dem Deploy die Sitemap (`/sitemap-index.xml`) einreichen.

## Struktur

- `src/data/` — alle Inhalte als typisierte Daten (Standorte, Stundenplan, Trainer, Angebote, Specials, Kontakt)
- `src/pages/` — 22 Seiten: Home, 7 Kampfsport-Detailseiten, 5 Specials, Team, Stundenplan, Standorte, Probetraining, Impressum, Datenschutz, 404
- `src/layouts/BaseLayout.astro` — SEO-Head (Title, Description, Canonical, Open Graph, Twitter Cards, JSON-LD `SportsActivityLocation` + `BreadcrumbList`)
- `src/assets/` — Originalbilder; werden beim Build automatisch zu responsivem WebP optimiert

## SEO-Features

- Statisches HTML, kein Client-JavaScript → sehr schnelle Ladezeiten
- Pro Seite eigener Title, Meta-Description, Canonical, OG/Twitter-Tags (aus dem Original übernommen)
- JSON-LD: SportsActivityLocation mit allen 3 Standorten (Adresse + Geo-Koordinaten), BreadcrumbList auf Unterseiten
- `sitemap-index.xml` + `robots.txt`; `noindex` auf Impressum/Datenschutz/404
- Selbst gehostete Fonts (Inter, Oswald) statt Google-Fonts-CDN — schneller & DSGVO-freundlicher
- Responsive Bilder (`srcset`, lazy loading, WebP), Alt-Texte auf allen Bildern
- Semantisches HTML (ein `<h1>` pro Seite, `<table>`-Stundenplan mit `caption`/`scope`, Skip-Link, `lang="de"`)
