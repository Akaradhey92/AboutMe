import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteConfig } from './src/data/siteConfig';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages URL e.g. 'https://<username>.github.io'
  site: process.env.SITE || siteConfig.meta.siteUrl,
  // Set BASE_PATH environment variable if deploying to a repo subpath, e.g. '/AboutMe'
  base: process.env.BASE_PATH || '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

