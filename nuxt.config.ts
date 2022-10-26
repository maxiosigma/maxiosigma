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
		dirs: ["assets/gql"],
	},

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

	buildModules: [
		//
		"nuxt-windicss",
		//"nuxt-fontagon",
		"@nuxt-hero-icons/outline/nuxt",
		"@nuxt-hero-icons/solid/nuxt",
	],

	modules: [
		//
		//"@vueuse/motion/nuxt",
		"@vueuse/nuxt",
		"@nuxtjs/svg-sprite",
		"nuxt-schema-org",
		"@intlify/nuxt3",
		"@nuxtjs/strapi",
	],

	//typescript: {
	//	strict: true,
	//},

	schemaOrg: {
		canonicalHost: "https://maxiosigma.web.app",
	},

	intlify: {
		localeDir: "assets/lang",
		vueI18n: {
			locale: "en-es",
			fallbackLocale: "ru-ru",
		},
	},

	svgSprite: {
		input: "~/assets/svg/",
		output: "~/assets/images/sprite/",
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
