// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import buildTimeConstants from 'astro-build-time-constants';

const googleAnalyticsId = 'G-4Z4PN6KMH7'

import packageSwiper from './node_modules/astro-swiper/package.json'
import packageSplide from './node_modules/astro-splide/package.json'
import packageLeaflet from './node_modules/astro-leaflet/package.json'
import packageLightgallery from './node_modules/astro-lightgallery/package.json'
import packageWebtools from './node_modules/astro-webtools/package.json'
import packageBuildtimeconstants from './node_modules/astro-build-time-constants/package.json'

// https://astro.build/config
export default defineConfig({
    // used to deploy on github pages gh-pages
    // cf. https://docs.astro.build/en/guides/deploy/github/
    site: 'https://pascal-brand38.github.io',
    base: 'astro-dev',

  vite: {
    optimizeDeps: {
      include: ['astro-leaflet > leaflet'],
    }
  },

    integrations: [starlight({
        title: 'astro-dev',
        favicon: '/favicon.png',
        social: [
            { icon: 'github', label: 'GitHub', href: 'https://github.com/pascal-brand38/astro-dev' },
        ],
        customCss: [
    // Relative path to your custom CSS file
    './src/styles/custom.css',
  ],
        tableOfContents: false,
        sidebar: [
            {
                label: 'Packages',
                // autogenerate: { directory: 'packages' },
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'astro-leaflet', slug: 'packages/astro-leaflet' },
                    { label: 'astro-lightgallery', slug: 'packages/astro-lightgallery' },
                    { label: 'astro-swiper', slug: 'packages/astro-swiper' },
                    { label: 'astro-splide', slug: 'packages/astro-splide' },
                    { label: 'astro-webtools', slug: 'packages/astro-webtools' },
                    { label: 'astro-build-time-constants', slug: 'packages/astro-build-time-constants' },
                ],
            },
            {
                label: 'Resources',
                autogenerate: { directory: 'resources' },
                // items: [
                // 	// Each item here is one entry in the navigation menu.
                // 	{ label: 'astro-splide', slug: 'packages/astro-splide' },
                // ],
            },
        ],


        head: [
            // Adding google analytics
    {
      tag: 'script',
      attrs: {
        src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
      },
    },
    {
      tag: 'script',
      content: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${googleAnalyticsId}');
      `,
    },
        ],
		}),
		buildTimeConstants( {
				version: {
					splide: packageSplide.version,
					swiper: packageSwiper.version,
					lightgallery: packageLightgallery.version,
					leaflet: packageLeaflet.version,
					webtools: packageWebtools.version,
					buildtimecontants: packageBuildtimeconstants.version
				}
			}
		)
	],
});