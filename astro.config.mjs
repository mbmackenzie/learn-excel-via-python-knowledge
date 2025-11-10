// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), alpinejs(), pagefind()],

  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },

  vite: {
    plugins: [tailwindcss()]
  }
});