// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                includePaths: ['node_modules/astro-webtools/src/scss'],
            },
        },
    },
  },
});
