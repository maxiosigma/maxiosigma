//devtools: {
//    enabled: true,
//    vscode: {},
//},

//strapi: {
//    devtools: true,
//},

//'@tailvue/nuxt',

//'nuxt-viewport',
//"@nuxtjs/fontaine",
//"@vueuse/motion",
//"@vueuse/integrations",
//"@vueuse/router",
//'@dewib/xhr-cache',
//'@vite-pwa/nuxt',

//'@vee-validate/nuxt',
//"nuxt-schema-org",
//"nuxt-full-static",
//'@nuxt/devtools',

//'nuxt-og-image',
//'nuxt-vue3-google-signin',
//'@nuxtjs/robots',
//'@nuxtjs/toast',
//'nuxt-xstate',
//'vue-final-modal/style.css'
//persistSession: false,
//robots: {
//    /* module options */
//},

//'@nuxtjs/supabase',
//supabase: {
//    //process.env.SUPABASE_URL
//    //process.env.SUPABASE_KEY
//    url: process.env.SUPABASE_URL,
//    //client: {
//    //    auth: {},
//    //},
//},

//"#1": "",
//"dev-strapi": "cross-env STRAPI_TO=true nuxt dev",
//"dev-o-strapi": "cross-env STRAPI_TO=true nuxt dev -o",
//"generate-strapi": "cross-env STRAPI_TO=true nuxt generate",
//"generate-start-strapi": "cross-env STRAPI_TO=true nuxt generate && nuxt start",
//"#2": "",
//"strapi-dev": "cd ../strapi/ && yarn strapi develop --watch-admin",
//"strapi-build": "cd ../strapi/ && yarn strapi build",
//"#3": "",
//"preview": "nuxt preview",
//"clean": "npx nuxi clean",
//"test": "node ./assets/svg.ts",
//"sync-translation-files": "node sync-translation-files.js",
//"predev": "",
//"serve": "nuxt serve",
//"f:preview": "firebase hosting:channel:deploy preview",
//"#999": "",
//"instale": "npm i -S --force"

//const { $viewport } = useNuxtApp()
//watch($viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
//    console.log("Breakpoint updated:", oldBreakpoint, "->", newBreakpoint)
//})

//if (document.addEventListener) {
//    if ('onwheel' in document) {
//        document.addEventListener('wheel', document_wheel)
//    } else if ('onmousewheel' in document) {
//        document.addEventListener('mousewheel', document_wheel)
//    } else {
//        document.addEventListener('MozMousePixelScroll', document_wheel)
//    }
//    window.addEventListener('keydown', document_wheel, false)
//} else {
//    document.attachEvent('onmousewheel', document_wheel)
//}
//function document_wheel(e) {
//    e.preventDefault()
//}

//await useVerifyIp()

//     <!--<NuxtLayout name="default">-->
//            <!--{{ view }}-->

//        <!--</NuxtLayout>-->

//        <!--<div v-click-outside></div>-->
//        <!--
//        <ClientOnly>
//            <div
//                :class="[
//                    modal ? 'fixed flex-center bg-self-1 bg-opacity-95 inset-0 w-full h-full z-99999' : '!hidden h-0 w-0 overflow-hidden',
//                ]"
//            >
//                <div
//                    class="flex-center flex-col flex-shrink rounded-md elevation-10 m-auto inset-0 bg-self-2 w-4/5 px-4 py-10 max-w-sm h-auto min-h-40 max-h-none z-99999 text-white pointer-events-none"
//                >
//                    <div class="uppercase border-b">Select language</div>

//                    <div class="flex-center flex-col mt-2 pointer-events-auto">
//                        <div
//                            class="py-1 transition duration-150 cursor-pointer hover:(text-self-4 underline-light-200)"
//                            v-for="locale in locales.filter((it, i) => i < locales.length / 2)"
//                            :key="locale.code_"
//                            @click="closeModal(locale.code_)"
//                        >
//                            {{ locale.name }}
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </ClientOnly>-->

//  <!--<teleport to="body">-->
//        <!--</teleport>-->

//  <!--<div class="index-nav">
//  <div
//  class="index-nav-item group relative flex-col ransition-all duration-500"
//  v-for="(it, i) in Object.values(sections)"
//  :key="i"
//  @click="!it.href ? toActive(Object.keys(sections)[i]) : toLink(it.href)"
//>
//  <div
//	  class="bg-self-7 bg-opacity-10 w-full min-w-8 min-h-4 rounded-t-full transition-all delay-150 duration-1550 pointer-events-none group-hover:(!bg-opacity-100)"
//  ></div>

//  <Icon
//	  class="index-nav-icon absolute z-10 transition-all delay-1050 duration-300 opacity-100 pointer-events-none"
//	  :class="[isActive(Object.keys(sections)[i]) ? 'active' : '', !it.href ? 'group-hover:(!opacity-0 delay-150)' : '']"
//	  :name="it.icon"
//  />

//  <div
//	  v-if="!it.href"
//	  class="flex-center flex-col bg-self-7 bg-opacity-10 w-full break-all text-self-1 uppercase text-xs transition-all delay-150 duration-1550 max-h-0 overflow-y-hidden pointer-events-none group-hover:(max-h-screen !bg-opacity-100)"
//  >

//	  <div v-for="(s, j) in Object.keys(sections)[i]" :key="j">
//		  {{ s }}
//	  </div>
//  </div>

//  <div
//	  class="bg-self-7 bg-opacity-10 w-full min-w-8 min-h-4 bottom-0 rounded-b-full transition-all delay-150 duration-1550 pointer-events-none group-hover:(!bg-opacity-100)"
//  ></div>
//</div>
//</div>-->
