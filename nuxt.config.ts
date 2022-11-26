//import graphql from "@rollup/plugin-graphql";
//import WindiCSSWebpackPlugin from "windicss-webpack-plugin";
import { defineNuxtConfig } from "nuxt/config";

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
				generateScopedName: "▬[local]_[hash:base32:5]",
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
	modules: [
		"nuxt-windicss",
		"@nuxtjs/strapi",
		"@vueuse/nuxt",

		//"nuxt-icon",
		//"@nuxtjs/i18n",
		//"nuxt-schema-org",
		//"nuxt-full-static",
	],
});

// builder: "webpack",
// 	css: [],
