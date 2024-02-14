"compilerOptions": {
	"allowJs": true,
	"esModuleInterop": false,
	"types": ["@nuxtjs/i18n", "@nuxt/image", "vite/client"],
	"paths": {
		"maxiosigma_libs/*": ["../global-libs/*.js"],
		"assets_data/*": ["./assets/data/*"],
		"assets/*": ["./assets/*"],
		"~/*": ["./*"]
	}
}