export default defineNuxtConfig({
	site: {
		// production URL
		url: 'https://boomin.pages.dev',
		name: 'Boomin Kim',
	},
	content: {
		documentDriven: true,
	},
	colorMode: {
		preference: 'system',
		fallback: 'light', // will render in light mode
	},
	ogImage: {
		fonts: [
			'Nanum+Gothic',
		],
		googleFontMirror: true,
	},
	googleFonts: {
		families: {
			'Nanum Gothic': true,
		},
	},

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
		enabled: true,
	},

	modules: [// Simple usage
		'@nuxt/content', '@nuxt/eslint', '@nuxt/ui', '@nuxthub/core', '@nuxtjs/device', 'nuxt-og-image', '@nuxtjs/google-fonts', '@nuxtjs/sitemap'],

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
