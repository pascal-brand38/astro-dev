// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
