export default defineNuxtConfig({
	app: {
		head: {
			title: 'Boomin Kim',
			charset: 'utf-8',
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
				{ rel: 'stylesheet', href: '/lib/github-markdown.css' },
			],
		},
	},

	devtools: {
		enabled: false,
	},

	modules: [// Simple usage
		'@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxthub/core', '@nuxtjs/device'],

	eslint: {
		checker: true,
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
				// ...
			},
		},
	},

	compatibilityDate: '2024-09-22',
});
