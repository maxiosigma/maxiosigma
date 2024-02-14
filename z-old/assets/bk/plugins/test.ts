//import { writeFileSync, readFileSync, existsSync } from 'node:fs'
//import { resolve } from 'path'

//import { asyncReduceArray } from '../app.ts'

//import { generateRequestUrl, normaliseResponse } from 'google-translate-api-browser'
//import axios from 'axios'

//import { translate } from 'free-translate'

//import data from '~/assets/index.graphql'

export default defineNuxtPlugin(async () => {
    //if (process.server) {}
})

//const translate = async (text = '', lang = 'en') => normaliseResponse((await axios(generateRequestUrl(text, { to: lang }))).data).text
//console.log(await translate('Я мою шкаф', 'zh'))

//nuxtApp.vueApp.directive("focus", {
//	mounted(el) {
//		el.focus();
//	},
//	getSSRProps(binding, vnode) {
//		// you can provide SSR-specific props here
//		return {};
//	},
//});

// && !process.browser
//if (process.server) {
//}
//return {
//	provide: {
//		hello: (msg: string) => `Hello ${msg}!`,
//	},
//};
//console.log(await translate('Я сьел чернику', { from: 'ru', to: 'en' }))
//const translate = async (text = '', lang = 'en') => {
//    const url = (await axios(generateRequestUrl(text, { to: lang }))) ?? {}
//    return normaliseResponse(url?.data)?.text
//}
//const read = (name = '') => {
//    const fileName = resolve(__dirname, `../assets/data/${name}.json`)
//    return existsSync(fileName) ? JSON.parse(readFileSync(fileName, { encoding: 'utf8' })) : []
//}
//const en = {
//    works: await asyncReduceArray(
//        read('ru/works').filter((w, i) => i < 2),
//        async (w) => {
//                 return [
//                {
//                    title: await translate(w.title, 'en'),
//                    description: await translate(w.description, 'en'),
//                },
//            ]
//        }
//    ),
//}
//console.log(en.works)
//console.log(await translate('Сегодня пьём чай', 'zh'))

//    const graphql = useStrapiGraphQL()
//    const { asyncReduceObject } = useFunctions()
//    const menu = await asyncReduceObject(['nav', 'footer', 'social'], async (it) => ({
//        [it]: (await graphql(data.menu(it)))?.data.renderNavigation,
//    }))
//    //['nav', 'footer', 'social'].reduce(async (sum, it) => {
//    //    const gql = (await graphql(data.menu(it)))?.data.renderNavigation
//    //    sum = Object.assign(await sum, { [it]: gql })
//    //    return sum
//    //}, {})
//    console.log(menu)
