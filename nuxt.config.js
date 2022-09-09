//import { apiEndpoint } from './sm.json'
import { resolve, join } from "path";
import app_config from "./app.config";

//const { plugins, buildModules, modules, transpile } = includes();

export default {
   ssr: true,
   target: "static",
   loading: false,
   telemetry: false,
   globalName: "app",
   globals: {
      id: `app`,
   },
   apisToFile: {
      file: {
         name: "data",
         ext: "json",
         path: "./",
         startFromStaticDir: false,
         options: {},
      },
   },
   vuetify: {
      // customVariables: ['~/assets/variables.scss']
      optionsPath: "./vuetify.options.js",
   },
   storybook: {},
   nuxtAlias: {
      rootDir: ["../strapi"],
   },
   stories: {
      forceBuild: false,
      storiesDir: "./assets/stories",
   },
   markdownit: {
      runtime: true,
      preset: "default",
      linkify: true,
      breaks: true,
   },
   vue: {
      config: {
         productionTip: false,
         devtools: app_config.isDev,
      },
   },
   render: {
      // csp: true
      //injectScripts: false,
      //resourceHints: false,
   },
   //proxy: {
   //   "/api": {
   //      target: "http://localhost:1337",
   //      changeOrigin: true,
   //      pathRewrite: { "^/api": "/" },
   //   },
   //},
   //axios: { proxy: true },
   image: {
      staticFilename: "[publicPath]/images/img_[hash:8].[ext]",

      //provider: "static",
      //domains: ["images.unsplash.com", "picsum.photos"],
      //alias: {
      //   unsplash: "https://images.unsplash.com",
      //   pixum: "https://picsum.photos",
      //},
      strapi: {
         baseURL: "http://localhost:1337/", // uploads/
      },
      //dir: "../strapi/public/uploads",
      //providers: {
      //   stepi: {
      //      provider: "~/./../strapi/public/uploads/Avatarka_Seller_a115c2f47f_2102ded582_79cc2bfa62_98d921f3f9.png",
      //      options: {},
      //   },
      //},
   },
   content: {
      prism: {
         theme: false,
      },
      yaml: {
         json: true,
      },
   },
   iconFont: {
      files: ["./assets/fontagon/*.svg"],
      dist: "./fonts/icons/fg",
      fontName: "font-svg",
      formatOptions: {
         svg: {
            normalize: true,
            fontHeight: 1000,
         },
      },
      styleTemplate: {
         css: "assets/fontagon/hbs/css.hbs",
      },
      order: ["eot", "ttf", "svg", "woff2", "woff"],
      baseClass: "fg",
      classPrefix: "fg",
      style: "css",
   },
   ...(app_config.optimization && {
      buildOptimisations: {
         profile: "safe",
         ...(!app_config.isDev && {
            features: {
               hardSourcePlugin: false,
            },
         }),
      },
   }),
   publicRuntimeConfig: {
      app: app_config,
      isDev: app_config.isDev,
      baseUrl: process.env.BASE_URL || (app_config.isDev || process.env.NUXT_ENV_GENDEV ? "http://localhost:3000" : app_config.host),
      update: app_config.update,
      lang: app_config.lang,
      sps: process.env.CTF_SPACE_ID,
      atk: process.env.CTF_CDA_ACCESS_TOKEN,
      env: {},
   },
   privateRuntimeConfig: {
      sps: process.env.CTF_SPACE_ID,
      atk: process.env.CTF_CDA_ACCESS_TOKEN,
      APP_KEYS: process.env.APP_KEYS,
      API_TOKEN_SALT: process.env.API_TOKEN_SALT,
      ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
      JWT_SECRET: process.env.JWT_SECRET,
   },
   alias: {
      "~": resolve(__dirname, "./"),
      "@": resolve(__dirname, "./"),
      images: resolve(__dirname, "./images"),
      strapi: resolve(__dirname, "../strapi"),
   },
   strapi: {
      url: process.env.STRAPI_URL || "http://localhost:1337",
      cookie: {
         strapi_jwt: process.env.JWT_SECRET,
      },
   },
   components: ["~/components"],
   generate: {
      dir: "dist",
      interval: 0,
      fallback: true,
      nojekyll: true,
      concurrency: 5000,
      subFolders: false,
      devtools: app_config.isDev ? true : false,
      exclude: [/^\/test/, /^\/z/, ...exd()],
   },
   sitemap: {
      lastmod: new Date(),
      hostname: app_config.host,
      cacheTime: 300000,
      path: "/sitemap/main.xml",
      gzip: true,
      //i18n: true,
      defaults: {
         changefreq: "daily",
         priority: 1,
         lastmod: new Date(),
      },
      routes: ["", "/"],
      //sitemaps: [
      //   {
      //      path: "/sitemap.txt",
      //      routes: ["", "/", "/*"],
      //      gzip: true,
      //   },
      //   {
      //      path: "/sitemapindex.xml",
      //      routes: ["", "/", "/*"],
      //      gzip: true,
      //   },
      //   {
      //      path: "/sitemap/1.xml",
      //      routes: ["", "/", "/*"],
      //      gzip: true,
      //   },
      //   {
      //      path: "/sitemap/1.txt",
      //      routes: ["", "/", "/*"],
      //      gzip: true,
      //   },
      //],
   },
   robots: () => {
      return [
         {
            UserAgent: "*",
            //Disallow: ["/test"],
            Allow: [
               "/public/images/",
               "/public/audio/",
               "/public/video/",
               "https://web.webpushs.com/js/push/46fa602925d7fdd1dc9e5b2a55a05967_1.js",
            ],
         },
         {
            UserAgent: "Googlebot",
            Allow: ["/"],
         },
         {
            UserAgent: "YandexCalendar",
            Allow: ["/"],
         },
         {
            UserAgent: "YandexMobileBot",
            Allow: ["/"],
         },
         {
            Sitemap: [app_config.host + "/sitemap/main.xml"],
         },
      ];
   },
   router: {
      fallback: true,
      mode: "history",
      prefetchLinks: false,
      prefetchPayloads: false,
      linkActiveClass: "nav-item-active",
      linkExactActiveClass: "exact-active-link",
      linkPrefetchedClass: "link-prefetched",
   },
   cookies: {
      locales: ["ru", "en"],
      barPosition: "bottom-right",
      necessary: [
         {
            name: {
               ru: "Куки по умолчанию",
               en: "Default Cookies",
            },
            description: {
               ru: "Используются для управления файлами cookie",
               en: "Used for cookie control",
            },
            cookies: ["cookie_control_consent", "cookie_control_enabled_cookies", "i18n_redirected", "strapi_jwt", "lang"],
         },
      ],
      optional: [
         {
            name: "Google Analitycs",
            identifier: "ga",
            description: {
               ru: "Google GTM",
               en: "Google GTM",
            },
            initialState: true,
            async: false,
            cookies: ["_ga", "_gat", "_gid", "_ga_X7YM5GJKXG"],
            accepted: () => {
               setTimeout(() => {
                  (function (w, d, s, l, i) {
                     w[l] = w[l] || [];
                     w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
                     var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != "dataLayer" ? "&l=" + l : "";
                     j.async = true;
                     j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                     f.parentNode.insertBefore(j, f);
                  })(window, document, "script", "dataLayer", "GTM-MSJZ4PT");

                  console.log("GTM PIXEL ACTIVE");
               }, 250);
            },
            declined: () => {
               window.$nuxt.$cookies.remove("ga");
            },
         },
         {
            name: "Yandex Metrika",
            identifier: "ym",
            description: {
               ru: "Yandex Pixel",
               en: "Yandex Pixel",
            },
            initialState: true,
            async: false,
            cookies: ["_ym_d", "_ym_isad", "_ym_uid", "_ym_visorc", "metrika_enabled"],
            accepted: () => {
               setTimeout(() => {
                  (function (m, e, t, r, i, k, a) {
                     m[i] =
                        m[i] ||
                        function () {
                           (m[i].a = m[i].a || []).push(arguments);
                        };
                     m[i].l = 1 * new Date();
                     (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]), (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a);
                  })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                  ym(89264491, "init", {
                     clickmap: true,
                     trackLinks: true,
                     accurateTrackBounce: true,
                     webvisor: true,
                  });

                  console.log("YM PIXEL ACTIVE");
               }, 250);
            },
            declined: () => {
               window.$nuxt.$cookies.remove("ym");
            },
         },
         {
            name: "VK Pixel",
            identifier: "vk",
            description: {
               ru: "VK Pixel",
               en: "VK Pixel",
            },
            initialState: true,
            async: false,
            cookies: ["remixir"],
            accepted: () => {
               !(function () {
                  var t = document.createElement("script");
                  (t.type = "text/javascript"),
                     (t.async = !0),
                     (t.src = "https://vk.com/js/api/openapi.js?169"),
                     (t.onload = function () {
                        VK.Retargeting.Init("VK-RTRG-1455228-5lkj2"), VK.Retargeting.Hit();
                     }),
                     document.head.appendChild(t);
               })();

               console.log("VK PIXEL ACTIVE");
            },
            declined: () => {
               window.$nuxt.$cookies.remove("vk");
            },
         },
         {
            name: "Pulse Pixel",
            identifier: "pp",
            description: {
               ru: "Pulse Pixel",
               en: "Pulse Pixel",
            },
            initialState: true,
            async: false,
            cookies: ["sbjs", "sbjs_current_add", "sbjs_migrations", "sbjs_current", "sbjs_first", "sbjs_udata"],
            accepted: () => {
               console.log("PULSE PIXEL ACTIVE");
            },
            declined: () => {
               window.$nuxt.$cookies.remove("pp");
            },
         },
         {
            name: "Other Cookie",
            identifier: "oz",
            description: {
               ru: "Other Cookie",
               en: "Other Cookie",
            },
            initialState: true,
            async: false,
            cookies: [], // "_sp_id.0295", "_sp_id", "ugid"
            accepted: () => {
               console.log("OTHER COOKIE ACTIVE");
            },
            declined: () => {
               window.$nuxt.$cookies.remove("oz");
            },
         },
      ],
      text: {
         locale: {
            ru: {
               barTitle: "Файлы сookie",
               barDescription:
                  "Сайт использут cookie и локальное хранилище данных. Это позволяет анализировать взаимодействие посетителей с сайтом и делать его лучше по всем правилам закона 152-ФЗ «О персональных данных». Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie и политикой конфиденциальности.",
               acceptAll: "Принять все",
               declineAll: "Удалить все",
               manageCookies: "Управление файлами cookie",
               unsaved: "У вас есть несохраненные настройки",
               close: "Закрыть",
               save: "Сохранить",
               necessary: "Необходимые файлы cookie",
               optional: "Необязательные файлы cookie",
               functional: "Функциональные файлы cookie",
               blockedIframe: "Чтобы увидеть это, включите функциональные файлы cookie",
               here: "здесь",
            },
         },
      },
      colors: {
         barTextColor: "#fff",
         barBackground: "#12957b",
         barButtonColor: "#fff",
         barButtonBackground: "#206569",
         barButtonHoverColor: "#fff",
         barButtonHoverBackground: "#2e495e",
         modalButtonBackground: "#206569",
         modalButtonHoverColor: "#fff",
         controlButtonBackground: "#12957b",
         controlButtonHoverBackground: "#2e495e",
         controlButtonIconHoverColor: "#fff",
         controlButtonIconColor: "#fff",
         modalButtonHoverBackground: "#2e495e",
         checkboxActiveBackground: "#2e495e",
         checkboxInactiveBackground: "#ede1e1",
         checkboxActiveCircleBackground: "#00c58e",
         checkboxInactiveCircleBackground: "#f44336",
         checkboxDisabledBackground: "#ddd",
         checkboxDisabledCircleBackground: "#fff",
      },
   },
   //pageTransition: {
   //   name: "page",
   //   mode: "out-in",
   //   css: false,
   //   beforeEnter(el) {
   //      this.$gsap.set(el, {
   //         opacity: 0,
   //         scale: 0,
   //      });
   //   },
   //   enter(el, done) {
   //      this.$gsap.to(el, {
   //         scale: 1,
   //         opacity: 1,
   //         duration: 10.5,
   //         ease: "power2.inOut",
   //         onComplete: done,
   //      });
   //   },
   //   leave(el, done) {
   //      this.$gsap.to(el, {
   //         scale: 0,
   //         opacity: 0,
   //         duration: 10.5,
   //         ease: "power2.inOut",
   //         onComplete: done,
   //      });
   //   },
   //},
   server: {
      host: "0.0.0.0",
   },
   build: {
      cache: false,
      target: "static",
      optimizeCss: false,
      transpile: ["lottie-web", "vue-typed-js"],
      friendlyErrors: false,
      parallel: false,
      cssSourceMap: false,
      ...(!app_config.isDev && { publicPath: "/public/" }),
      loaders: {
         sass: {
            implementation: require("sass"),
         },
         scss: {
            implementation: require("sass"),
         },
      },
      postcss: {
         plugins: {
            "postcss-import": true,
            "postcss-url": {},
            ...(!app_config.isDev && {
               autoprefixer: {},
            }),
         },
      },
      splitChunks: {
         runtime: true,
         commons: true,
         components: true,
         layouts: true,
         vendor: true,
         pages: true,
      },
      optimization: {
         minimize: !app_config.isDev,
         splitChunks: {
            chunks: "all",
            automaticNameDelimiter: "/",
            name: undefined,
         },
      },
      ...(!app_config.isDev && {
         extractCSS: true,
         filenames: {
            app: "scripts/[chunkhash:8].js",
            chunk: "scripts/[chunkhash:8].js",
            vendor: "scripts/[chunkhash:8].js",
            manifest: "manifest.[hash:8].js",
            css: "styles/[contenthash:8].css",
            img: "images/img_[hash:8].[ext]",
            font: "fonts/font_[name]_[hash:8].[ext]",
            video: "video/vio_[hash:8].[ext]",
         },
      }),
      extend(config, ctx) {
         ctx.loaders.scss.additionalData = '@use "sass:math";';

         config.module.rules.push({
            test: /\.ico$/,
            loader: "url-loader",
            query: {
               name: "icons/favicon_[hash:8].[ext]",
            },
         });

         config.module.rules.push({
            test: /\.pdf$/,
            loader: "file-loader",
            query: {
               name: "files/[name]_[hash:8].[ext]",
            },
         });

         //config.module.rules.push({
         //   test: /\.scss$/,
         //   use: [
         //      {
         //         loader: "style-loader",
         //      },
         //      {
         //         loader: "css-loader",
         //         options: {
         //            modules: true,
         //            localIdentName: "[path][name]__[local]--[hash:base64:5]",
         //            sourceMap: true,
         //         },
         //      },
         //      {
         //         loader: "sass-loader",
         //      },
         //   ],
         //});

         config.module.rules.push({ test: /\.mjs$/, include: /node_modules/, type: "javascript/auto" });

         config.node = { fs: "empty" };
      },
   },
   hooks: {},
   i18n: {
      seo: true,
      lazy: false,
      strategy: "prefix", //prefix prefix_except_default
      vueI18nLoader: true,
      defaultLocale: "ru-ru", //ru-ru
      //langDir: '~/locales/',
      noPrefixDefaultLocale: true, //true false
      vueI18n: {
         fallbackLocale: "en-es",
      },
      vuex: {
         moduleName: "i18n",
         syncLocale: false,
         syncMessages: false,
         syncRouteParams: false,
      },
      detectBrowserLanguage: {
         useCookie: true,
         cookieKey: "lang",
      },
      locales: locales(),
   },
   css: ["~/assets/index.scss"],
   pwa: {
      icon: false,
      meta: false,

      manifest: {
         display: "browser",
      },
   },
   buildModules: [
      "nuxt-windicss",
      "@nuxtjs/eslint-module",
      "@luxdamore/nuxt-apis-to-file",
      "@/plugins/active/GSR",
      "@nuxtjs/vuetify",
      "nuxt-user-agent",
      "@nuxtjs/sitemap",
      "nuxt-fontagon",
      "nuxt-animejs",
      "@nuxt/image",
      "@nuxtjs/pwa",
   ],
   modules: [
      "@nuxtjs/i18n",
      "@nuxtjs/axios",
      "nuxt-cookie-control",
      "@nuxtjs/toast",
      "@nuxtjs/robots",
      "@nuxtjs/strapi",
      "nuxt-payload-extractor",
      [
         "nuxt-image-extractor",
         {
            baseUrl: "http://localhost:1337/",
            path: "/public/images",
            extensions: ["jpg", "jpeg", "gif", "png", "webp", "svg", "mp4"],
         },
      ],
   ],
   plugins: [
      "@plugins/passive/mixins",
      "@plugins/passive/directives",

      "@plugins/active/VueScrollIndicator.client.js",
      "@plugins/active/ParticleEffectButton.client.js",
      "@plugins/active/VueObserveVisibility.client.js",

      "@plugins/active/VueSplide.client.js",

      //"@plugins/active/VideoBackground.client.js",

      //"@plugins/active/VuePlyr.client.js",
      //"@plugins/active/VueCoreVideoPlayer.client.js",
      //"@plugins/active/VueVideoPlayer",
      //"@plugins/active/H5Video.client.js",

      "@plugins/active/VueTypedJs",
      "@plugins/active/VueKinesis",
      "@plugins/active/VueTooltip",
      "@plugins/active/QR.js",

      //"@plugins/active/VueMasonry.client.js",
      //"@plugins/active/VueAwesomeSwiper",
      //"@plugins/active/NuxtVideoPlayer.client.js",
      //"@plugins/active/VueMasonry",
   ],
};

function locales() {
   return [
      { code: "ru-ru", iso: "ru-RU", name: "Русский", file: "ru-RU.js" },
      //{ code: "en-es", iso: "en-ES", name: "English", file: "en-ES.js" },
   ]?.reduce((sum, locale) => {
      sum.push(locale);
      sum.push({ ...locale, code: locale.code + "-amp" });
      return sum;
   }, []);
}

function exd() {
   return (
      app_config.excluded?.reduce((sum, ex) => locales()?.map((lc) => sum.push(new RegExp("^/" + lc.code + "/" + ex + ""))) && sum, []) ?? []
   );
}
