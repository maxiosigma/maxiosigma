import graphql from "@rollup/plugin-graphql";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
	ssr: true,
	//mode: "ssr",
	target: "static",
	//modern: "server",
	//globalName: "app",

	//globals: { id: () => "app", nuxt: () => "app" },

	//nitro: {
	//	//prerender: {
	//	//  routes: ['/user/1', '/user/2']
	//	//}
	//},

	//autoImports: {
	//	dirs: ["assets/gql"],
	//},

	//extends: ["./assets/xapi"],

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
		//css: {
		//	preprocessorOptions: {
		//		//scss: {
		//		//	additionalData: '@use "@/assets/_colors.scss" as *;',
		//		//},
		//		stylus: {
		//			use: [stylusApplyPlugin()],
		//		},
		//	},
		//},
		plugins: [
			//
			graphql(),
			//eslint(),
		],
	},

	strapi: {
		url: "http://localhost:1337",
		prefix: "/api",
		version: "v4",
	},

	css: ["virtual:windi-base.css", "virtual:windi-components.css", "virtual:windi-utilities.css"],

	//build: {},

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

	buildModules: [
		//
		"nuxt-windicss",
		//"@nuxt-hero-icons/outline/nuxt",
		//"@nuxt-hero-icons/solid/nuxt",
	],

	modules: [
		//
		"nuxt-icon",
		"@vueuse/nuxt",
		//"@nuxtjs/i18n",
		"nuxt-schema-org",
		"@nuxtjs/strapi",
	],

	// AutoImport
	// plugins: [] .server .client

	schemaOrg: {
		canonicalHost: "https://maxiosigma.web.app",
	},

	nuxtIcon: {
		size: "24px",
		aliases: {
			nuxt: "logos:nuxt-icon",
		},
	},

	i18n: {
		/* module options */
	},
});

//import stylus from "stylus";
//function stylusApplyPlugin() {
//	// = { define: null }
//	return function (style) {
//		style.define("apply", function () {
//			const strings = Object.keys(arguments).map((key) => arguments[key].string);
//			return new stylus.nodes.String(`@apply ${strings.join(" ")};`, " ");
//		});
//	};
//}
