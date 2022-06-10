import { defineNuxtConfig } from 'nuxt'
import config from './app.config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	ssr: config.isDev,
	typescript: {
		strict: true,
		shim: true,
	},
})
