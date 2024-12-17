// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const googleAnalyticsId = 'G-4Z4PN6KMH7'

// https://astro.build/config
export default defineConfig({
	// used to deploy on github pages gh-pages
	site: 'https://pascal-brand38.github.io',
  base: 'astro-dev',

	integrations: [
		starlight({
			title: 'astro-dev',
			favicon: '/favicon.png',
			social: {
				github: 'https://github.com/pascal-brand38/astro-dev',
			},
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
						{ label: 'astro-splide', slug: 'packages/astro-splide' },
						{ label: 'astro-webtools', slug: 'packages/astro-webtools' },
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
	],
});
