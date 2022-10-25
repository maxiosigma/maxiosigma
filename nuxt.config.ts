//import pug from "vite-plugin-pug";
//import gql from "@rollup/plugin-graphql";
//import graphqlPlugin from "vite-plugin-graphql";
//import WindiCSS from "vite-plugin-windicss";
import { defineNuxtConfig } from "nuxt/config";
import graphql from "@rollup/plugin-graphql";

export default defineNuxtConfig({
	//ssr: true,
	//mode: "ssr",
	//target: "static",
	//modern: "server",
	//globalName: "app",

	//globals: { id: () => "app", nuxt: () => "app" },

	//nitro: {
	//	//prerender: {
	//	//  routes: ['/user/1', '/user/2']
	//	//}
	//},

	autoImports: {
		dirs: ["assets/gql"], // Enable auto-discovery within given folders
	},

	runtimeConfig: {
		public: {
			graphqlUrl: "http://localhost:1337/graphql",
		},
	},

	vite: {
		//	//server: {
		//	//	hmr: {
		//	//		clientPort: 3000,
		//	//		host: "0.0.0.0",
		//	//	},
		//	//	watch: {
		//	//		usePolling: true,
		//	//	},
		//	//},
		css: {
			preprocessorOptions: {
				//scss: {
				//	additionalData: '@use "@/assets/_colors.scss" as *;',
				//},
				stylus: {
					use: [stylusApplyPlugin()],
				},
			},
		},
		plugins: [graphql()],
	},

	strapi: {
		url: process.env.STRAPI_URL || "http://localhost:1337",
		prefix: "/api",
		version: "v4",
	},

	css: ["virtual:windi-base.css", "virtual:windi-components.css", "virtual:windi-utilities.css"],

	build: {},

	//windicss: {
	//	analyze: true,
	//},

	//runtimeConfig: {
	//	// The private keys which are only available within server-side
	//	apiSecret: "123",
	//	// Keys within public, will be also exposed to the client-side
	//	public: {
	//		apiBase: "/api",
	//	},
	//},

	buildModules: ["nuxt-windicss"],

	modules: [
		//
		"@vueuse/nuxt",
		//"@vueuse/motion/nuxt",
		"nuxt-schema-org",
		"@nuxtjs/strapi",
	],

	//typescript: {
	//	strict: true,
	//},

	schemaOrg: {
		canonicalHost: "https://maxiosigma.web.app",
	},
});

import stylus from "stylus";
function stylusApplyPlugin() {
	// = { define: null }
	return function (style) {
		style.define("apply", function () {
			const strings = Object.keys(arguments).map((key) => arguments[key].string);
			return new stylus.nodes.String(`@apply ${strings.join(" ")};`, " ");
		});
	};
}
