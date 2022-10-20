import gql from "@rollup/plugin-graphql";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	ssr: true,
	mode: "ssr",
	target: "static",
	modern: "server",
	globalName: "app",

	globals: { id: () => "app", nuxt: () => "app" },

	nitro: {
		//prerender: {
		//  routes: ['/user/1', '/user/2']
		//}
	},

	vite: {
		//css: {
		//	preprocessorOptions: {
		//		scss: {
		//			additionalData: '@use "@/assets/_colors.scss" as *;',
		//		},
		//	},
		//},
		plugins: [gql()],
	},

	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
	},

	css: [
		//"virtual:windi.css",
		//"virtual:windi-devtools"
	],

	//windicss: {
	//	analyze: true,
	//},

	runtimeConfig: {
		// The private keys which are only available within server-side
		apiSecret: "123",
		// Keys within public, will be also exposed to the client-side
		public: {
			apiBase: "/api",
		},
	},

	buildModules: ["nuxt-windicss"],

	modules: [
		//"@nuxtjs/axios",
		"@nuxtjs/strapi",
	],

	typescript: {
		strict: true,
	},
});
