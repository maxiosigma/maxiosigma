//import graphql from "@rollup/plugin-graphql";
//import WindiCSSWebpackPlugin from "windicss-webpack-plugin";
import { defineNuxtConfig } from "nuxt/config";

//firebase hosting:channel:deploy preview

//const dev = process.env.

export default defineNuxtConfig({
	ssr: true,
	//debug: true,
	telemetry: false,
	app: {
		rootId: "app",
		rootTag: 'div class="wrapper"',
		buildAssetsDir: "/public/",
		layoutTransition: false,
		pageTransition: false,
	},
	experimental: {
		inlineSSRStyles: false,
		payloadExtraction: true,
		treeshakeClientOnly: false,
	},
	vite: {
		css: {
			modules: {
				localsConvention: "camelCaseOnly",
				//generateScopedName: (name, filename, css) => `${name}_${css}`, // "[name]:[hash:10]"
				//generateScopedName: "[hash:base64:10]",
				generateScopedName: "[local]_[hash:base32:5]",
			},
			//preprocessorOptions: {
			//	scss: {},
			//},
		},
		plugins: [],
	},
	build: {
		transpile: ["animejs"], //, "windicss-webpack-plugin"
	},
	i18n: {
		lazy: false,
		strategy: "prefix",
		defaultLocale: "en",
		vueI18n: {
			fallbackLocale: ["ru"],
		},
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "lang",
		},
		locales: locales(),
	},
	modules: [
		"@nuxtjs/i18n",
		"nuxt-windicss",
		"@nuxtjs/strapi",
		"@vueuse/nuxt",
		//"@vueuse/motion",
		//"@vueuse/integrations",
		//"@vueuse/router",
		//"nuxt-icon",
		//"nuxt-schema-org",
		//"nuxt-full-static",
	],
});

// builder: "webpack",
// 	css: [],

function locales() {
	const locales_pc = [
		{ code: "en", iso: "en-ES", name: "English", file: "en-ES.js" },
		{ code: "ru", iso: "ru-RU", name: "Русский", file: "ru-RU.js" },
	];

	const locales_mobile = locales_pc.map((locale) => {
		return { ...locale, code: locale.code + "-amp" };
	});

	return [...locales_pc, ...locales_mobile];
}
