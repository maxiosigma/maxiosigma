//import { writeFileSync, readFileSync, existsSync } from 'node:fs'
//import { resolve } from 'path'

//import { asyncReduceArray } from '../app.ts'

//import { generateRequestUrl, normaliseResponse } from 'google-translate-api-browser'
//import axios from 'axios'

//import { translate } from 'free-translate'

export default defineNuxtPlugin(async () => {
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
