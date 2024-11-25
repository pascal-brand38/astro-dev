// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'astro-dev',
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
					],
				},
			],
		}),
	],
});
