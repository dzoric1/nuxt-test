// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/style.css'],

	app: {
		head: {
			title: 'Learn NUXT',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'Learn NUXT' },
				{ name: 'format-detection', content: 'telephone=no' },
			],
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
		layoutTransition: {
			name: 'slide',
			mode: 'out-in',
		},
	},

	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	googleFonts: {
		families: {
			Roboto: true,
		},
	},
});
