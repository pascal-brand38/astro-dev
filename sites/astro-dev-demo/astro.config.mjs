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
			tableOfContents: false,
			sidebar: [
				{
					label: 'Packages',
					autogenerate: { directory: 'packages' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'Packages', slug: 'guides/example' },
					// ],
				},
			],
		}),
	],
});
