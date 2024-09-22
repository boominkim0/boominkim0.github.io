export default defineNuxtConfig({
	app: {
		head: {
			title: 'Boomin Kim',
			charset: 'utf-8',
		},
	},

	devtools: {
		enabled: false,
	},

	modules: [// Simple usage
		'@nuxt/content', '@nuxt/eslint', '@nuxt/ui',
	],

	ssr: false,

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
