import "dotenv"
const env = import.meta.env
const isDev = env.NODE_ENV !== "production"

export default defineNuxtConfig({
    ssr: true,
    pages: true,
    app: { viewTransition: "always" },
    runtimeConfig: {
        public: { isDev }
    },
    unocss: {
        nuxtLayers: true
    },
    $development: {
        devtools: { enabled: false },
        devServer: {
            port: 34343
        }
    },
    nitro: {
        prerender: { routes: ["/ru", "/en"] }
    },
    extends: ["../../global-libs-ts/app/frameworks/nuxt/global/nuxt.config.ts"],
    modules: [
        //
    ]
})
