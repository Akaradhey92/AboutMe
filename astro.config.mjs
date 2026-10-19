import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Update this to your GitHub Pages URL e.g. 'https://<username>.github.io'
  site: 'https://placeholder.github.io',
  // Set BASE_PATH environment variable if deploying to a repo subpath, e.g. '/portfolio'
  base: process.env.BASE_PATH || '/',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

