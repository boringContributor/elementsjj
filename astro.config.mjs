// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO: Auf die finale Domain anpassen, sobald das Hosting steht.
// Alle canonical URLs, og:url, sitemap & robots.txt leiten sich hiervon ab.
export default defineConfig({
  site: 'https://www.elementsjj.de',
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // noindex-Seiten gehören nicht in die Sitemap
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
