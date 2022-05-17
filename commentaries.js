/*

	//async downloadLinksImage({ state }) {
	//	const https = require('https') // or 'https' for https:// URLs
	//	const fs = require('fs')

	//	await state.data
	//		?.filter((it) => it?.img)
	//		.map((it) => {
	//			const path = it.img.cdn,
	//				url = it.img.url

	//			fs.access?.(path, (error) => {
	//				if (error) {
	//					const file = fs.createWriteStream(path)
	//					https.get(url, function (response) {
	//						response.pipe(file)
	//						file.on('finish', () => {
	//							file.close()
	//						})
	//					})
	//				}
	//			})
	//		})
	//},

#[build]
#	 dir="dist"
#  publish = "dist/"

[build.environment]
	#CI = "1"
	#CI = "true"
	#functions="netlify/functions"

#[[redirects]]
#	from="/napi/*"
#	to="/.netlify/functions/:splat"
#	status="200"

#[[redirects]]
#	from="/"
#	to="/ru-ru/"
#	status="301"

#[[redirects]]
#	from="/about"
#	to="/ru-ru/about"
#	status="301"

#[[plugins]]
#  package = "netlify-plugin-html-validate"

#		[plugins.inputs]
#			ext = "html"
#			config = ".htmlvalidate.json"

#[[plugins]]
#	package = "netlify-plugin-webmentions"

#		[plugins.inputs]
#			feedPath = "/feed.xml"
#			limit = 1

#[[plugins]]
#	package = "netlify-plugin-fetch-feeds"

#		[plugins.inputs]
#			dataDir = "netlify/data"
#			[[plugins.inputs.feeds]]
#				name = "hawksworx"
#				url = "https://hawksworx.com/feed.json"
#				ttl = 3600
#			[[plugins.inputs.feeds]]
#				name = "netlify"
#				url = "https://www.netlify.com/blog/index.xml"
#				ttl = 86400

#[dev]
#	framework = "nuxt"
#	port = 3000
#	targetPort = 3000
	#jwtSecret = "secret"
	#jwtRolePath = "app_metadata.authorization.roles"
	#port = 8888
	#targetPort = 3000
	#autoLaunch = true




// @nuxt/content @nuxt/static @nuxt/utils @nuxtjs/axios @nuxtjs/feed @nuxtjs/html-minifier @nuxtjs/html-validator @nuxtjs/localtunnel @nuxtjs/netlify-files @nuxtjs/pwa @nuxtjs/sitemap @nuxtjs/svg-sprite @nuxtjs/toast @nuxtjs/universal-storage @nuxtjs/webpack-profile @nuxtjs/webpackmonitor @windicss/animations @windicss/plugin-heropatterns @windicss/plugin-icons @windicss/plugin-interaction-variants @windicss/plugin-question-mark @windicss/plugin-scrollbar contentful contentful-management cookie-universal-nuxt core-js cross-env css-loader glob lottie-web node-sass nuxt nuxt-build-optimisations nuxt-content-body-html nuxt-helmet nuxt-ssr-cache nuxt-static nuxt-user-agent nuxt-windicss postcss postcss-import postcss-loader sass sass-loader tailwindcss-border-gradients tailwindcss-elevation tailwindcss-fluid tailwindcss-triangle-after vue-fragment vue-kinesis vue-slick-carousel vue-typed-js windicss @nuxtjs/google-analytics nuxt-animejs nuxt-fontagon nuxt-gsap-module nuxt-typed-router pug pug-plain-loader

// npm i core-js@3.20.0 vue@2.6.14 nuxt-windicss@2.2.1 vue-server-renderer@2.6.14 vue-template-compiler@2.6.14 webpack@5.65.0

/*
rm -rf node_modules package-lock.json && npm install && npm start

"main": "nuxt.config.js",
"type": "module",

"files.watcherExclude": {
	"**/.git/objects/**": true,
	"**/node_modules/**": true
},
*/

/*

"engines": {
	"node": ">=0.12"
},
"engineStrict": true

<template>
	<noscript inline-template>
		<meta http-equiv="refresh" :content="'0.005;url=' + url" />
	</noscript>
</template>

asyncData({ app, redirect }) {
	if (!app.$cookies.get('openmw')) {
		//  window.open('https://myw.tf/m8sk75', 'Приглашение попробовать новый маркетплейс', 'resizable=yes,scrollbars=yes,status=no,menubar=no,toolbar=no,location=no')

		app.$cookies.set('openmw', 'true', {
			path: '/',
			maxAge: 604800, // 86400 * 7 - дней
			sameSite: 'lax',
		})
	}

	//console.log(app.$ua.deviceType())

	app.$cookies.set('count-sessions', (app.$cookies.get('count-sessions') || 0) + 1, { path: '/', maxAge: 604800, sameSite: 'lax' })

	app.$cookies.get('openmw') && app.$cookies.get('count-sessions') === 6
		? redirect(302, 'https://myw.tf/m8sk75')
		: app.$ua.deviceType() === 'pc'
		? redirect('/about')
		: redirect('/amp/about')
},

<svg class="h-10 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.92 790"><path d="M251.05,287.24c-8.81-29.83,3.07-63.93,34.24-81,9.76-5.36,20.94-7.66,32.08-7.66h0a69.12,69.12,0,1,1-32.2,130.29,70.05,70.05,0,0,1-9-5.63c-90.68,56.36-169.38,121-224,182.39v69.93a43.93,43.93,0,0,0,22,38l304,175.54a44,44,0,0,0,43.92,0l42.64-24.62c-58.84-56.34-118.92-131.45-171.38-216.24a69,69,0,1,1,36.06-25c53.93,87.51,115.6,164,174.67,218.52l222-128.2a43.93,43.93,0,0,0,22-38V352.11C694.2,405.65,625.7,459.56,549.25,507.27a69,69,0,1,1-25.14-36c90.68-56.37,169.38-121,224-182.39V224.46a43.9,43.9,0,0,0-22-38L422.1,10.88a43.93,43.93,0,0,0-43.91,0l-39.88,23c59.38,56.51,120.1,132.24,173.05,217.83a69.1,69.1,0,1,1-41.74,34,68.07,68.07,0,0,1,5.67-9C420.85,188.38,358.5,111.3,298.9,56.67L74.15,186.43a43.9,43.9,0,0,0-22,38V442.4C106.11,388.87,174.6,335,251.05,287.24Z" transform="translate(-52.19 -5)" style="fill: rgb(255, 255, 255); fill-rule: evenodd;"></path><path d="M519.74,338.7a23,23,0,0,0,10.9,2.73,23.34,23.34,0,0,0,11-43.95,23,23,0,0,0-10.91-2.73,23.33,23.33,0,0,0-11,43.95Z" transform="translate(-52.19 -5)" style="fill: rgb(52, 166, 81); fill-rule: evenodd;"></path><path d="M274.08,458.58A23.33,23.33,0,1,0,285,461.3,23.31,23.31,0,0,0,274.08,458.58Z" transform="translate(-52.19 -5)" style="fill: rgb(86, 125, 191); fill-rule: evenodd;"></path><path d="M493.85,506.19A23,23,0,0,0,483,503.5a23.37,23.37,0,1,0,10.84,2.69Z" transform="translate(-52.19 -5)" style="fill: rgb(250, 186, 21); fill-rule: evenodd;"></path><path d="M317.29,291a23.34,23.34,0,1,0-10.83-2.68A23.06,23.06,0,0,0,317.29,291Z" transform="translate(-52.19 -5)" style="fill: rgb(232, 68, 55); fill-rule: evenodd;"></path></svg>

asyncData({ $config: { NUXT_LOCALE, MAINTENANCE_MODE } }) {
	// const posts = await fetch(`${baseURL}/posts`)
	//   .then(res => res.json())
	// console.log(NUXT_LOCALE)
},
mounted() {
	console.log(this.$config)
}

"html.format.wrapAttributes": "force-aligned",
"html.printWidth": 1200,
"html.singleQuote": true,
"[html]": {
	"singleQuote": true,
	"printWidth": 1200,
	"format.wrapAttributes": "force-aligned"
},
"[scss]": {
	"printWidth": 1000,
	"format.wrapAttributes": "force-aligned"
},
"[sass]": {
	"printWidth": 1000,
	"format.wrapAttributes": "force-aligned"
}
"generate-analize": "nuxt generate --webpackmonitor --profile",
"start": "cross-env NODE_ENV=start nuxt start",
"generate": "nuxt generate",
"static": "nuxt static",
"generate-gulp": "nuxt generate && gulp",
"netly-dev": "netlify dev",
"netly-build": "netlify build",
"netly-deploy": "netlify deploy --prod",
"netly-build-start": "npm run netly-build && npm run start",
"netly-build-deploy": "npm run netly-build && npm run netly-deploy",
"netly-init": "netlify init",
"dev+": "cross-env NODE_ENV=development && npm run dev"
"@luxdamore/vue-cursor-fx": "^1.6.2",
"@rnwcode/vue-mouse-cursor": "0.0.5",
"@nuxtjs/prismic": "^1.3.1",
"@nuxtjs/toast": "^3.3.1",
"@prismicio/vue": "^2.0.11",
"gotrue-js": "^0.9.29",
"lodash": "^4.17.21",
"nuxt-generate-cluster": "^2.7.0",
"prismic-javascript": "^3.0.2",
"tailwind": "^4.0.0",
"v-tooltip": "^2.1.3",
"vue-mouse-parallax": "^1.3.3",
"vue-recognizer": "^1.1.3",
"vue-lottie-player": "^0.1.9",
"vue-input-facade": "^1.3.6",
"@braid/vue-formulate": "^2.5.2"

asyncData({ store, route, redirect }) {
	const slug = route.params.slug
	const title = String(slug).toUpperCase().split('_').join(' | ')
	const item = Object.values(store.state.shortlinks).reduce(
		(sum, socials) =>
			Object.assign(
				sum,
				Object.values(socials).find((social) => social.s === slug)
			) && sum,
		{}
	)
	console.log(item)
	const link = item.l
	const redir = () => redirect(link)
	setTimeout(() => redir(), 1436 + Math.random() * 300)
	return { title, link, slug }
},

//const looped = () => {
//	loop += 2
//	speed = -speed
//	this.anime.pause(this.name)
//	this.anime.setSpeed(speed, this.name)
//	this.anime.play(this.name)

//	if (loop !== this.loop) setTimeout(looped(), dury)
//}

//looped()

// this.delay ? anime.setSpeed(0) || setTimeout(() => anime.setSpeed(Number(this.speed)), Number(this.delay)) : anime.setSpeed(Number(this.speed))

// this.specimen.setDirection(-1)
// let counter = 0
// let duration = (anime.getDuration(false) * 1000.0) / this.speed + this.duration
// const go = () => {
// 	counter == 1 ? (duration = duration - this.duration) : null
// 	speed = -speed
// 	anime.setSpeed(speed)
// 	counter++
// 	console.log(counter)
// 	console.log(duration)
// 	setTimeout(go, duration) // callback
// }
// go()
// / this.speed
// - this.duration
// console.log((anime.getDuration(false) * 1000 * 0.95) / this.speed, this.speed)
// while (duration != 0) {
// 	setTimeout(() => console.log('aaa'), 3000)
// }
// console.log(duration)
// setInterval(() => {
// 	speed = speed > 0 ? -1 : speed
// 	duration = speed > 0 ? duration / this.speed : duration
// 	anime.setSpeed(speed)
// }, duration)

// anime() {
// 	return lottie.loadAnimation({
// 		container: this.$refs.animContainer,
// 		name: this.name,
// 		renderer: this.renderer,
// 		loop: this.loop,
// 		width: this.width,
// 		height: this.height,
// 		autoplay: this.autoplay,
// 		animationData: this.dynamicLottie,
// 	})
// },

// if (this.duration) {
// 	anime.setSpeed(0)
// 	setTimeout(() => anime.setSpeed(Number(this.speed)), Number(this.duration))
// } else {
// 	anime.setSpeed(Number(this.speed))
// }
// Number(this.duration) * 1000
// this.duration
// 	? anime.setSpeed(0) && anime.autoplay(false) && setTimeout(() => anime.setSpeed(Number(this.speed)) && anime.autoplay(true), 5000)
// 	: anime.setSpeed(Number(this.speed))

// this.duration ? anime.setSpeed(0) && setTimeout(() => anime.setSpeed(Number(this.speed)), 5000) : anime.setSpeed(Number(this.speed))
// if (check) this.anime().stop()
// console.log(check)
// if (this.reverse) {
// 	const low = this.anime().getDuration(false) / speed
// 	const duration = low * 500

// 	setInterval(function() {
// 		speed = -speed
// 		this.anime().setSpeed(speed)
// 	}, duration)
// }
// animate() {
// 	if (this.mainMenu == 1) this.startAnimation()
// 	else if (this.mainMenu == -1) this.startAnimation()
// },



//[[['Об 8.2.1', 'Об 8.2.0'], 'Об 8.1.0'], 'Об 8.0'],
//[['Об 7.4.1', 'Об 7.4.0'], 'Об 7.3', 'Об 7.2', 'Об 7.1', 'Об 7.0'],
//['Об 6.1', 'Об 6.0'],
//'Об 5',
//'Об 4',
//'Об 3',
//'Об 2',
//'Об 1',

//const it = [1, 0]
//const ANU = recurseUpdate(update, 1, 0, 0).reverse()
//console.log(it)

//function recurseUpdate(items, go, gl, it) {
//	const result = items.reverse().reduce((sum, item, i) => {
//		Array.isArray(item)
//			? sum.push(...recurseUpdate(item, (go += 1), (gl += 1), it + i + 1)) && (gl -= 1)
//			: sum.push({
//					index: go + '.' + gl + '.' + (it === 0 ? i + 1 : it),
//					value: item,
//			  })

//		return sum
//	}, [])

//	return result
//}

//console.log(elementDepth(update))
//function elementDepth(array) {
//	function extract(arr) {
//		var newArr = []
//		for (let i = 0, z = 0; arr[i] != undefined; i++, z++) {
//			if (arr[i][1].constructor.name != 'Array') {
//				newArr[z] = arr[i]
//			} else {
//				newArr.push(...arr[i][1].map((e) => [arr[i][0] + 1, e]))
//				z += arr[i][1].length - 1
//			}
//		}
//		if (newArr.filter((i) => i != undefined).length != newArr.length) {
//			var g = newArr.map((i) => {
//				if (i == undefined) {
//					return [-1, '']
//				} else {
//					return i
//				}
//			})
//			return extract(g)
//		} else if (newArr.filter((i) => i[1].constructor.name == 'Array').length > 0) {
//			return extract(newArr)
//		} else {
//			return newArr
//		}
//	}
//	var x = array.map((i) => [0, i])
//	return extract(x)
//}

//console.log(it[0], ' - ', args[0])

//it[0]-- && sum.push(...recurseUpdate(item, it))
//console.log(item, ' - ', it[0])
//&& (iterator[0] += 1)
//console.log(args.join('.'))

//function setItem(item, i) {}

//function recurseUpdate(item, i, j = 0) {
//	return Array.isArray(item)
//		? item.reverse().reduce((sum, item) => {

//				recurseUpdate(item, i, (j += 1))

//				return sum
//		  }, [])
//		: {
//				index: i + '.' + j,
//				value: item,
//		  }
//}

//update.reverse().reduce((sum, item, i) => {
//	Array.isArray(item)
//		? sum.push(...recurseUpdate(item, i + 1))
//		: sum.push({
//				index: i + 1 + '.0',
//				value: item,
//		  })

//	return sum
//}, [])

//const title =
//	year
//		.split('')
//		.map((it, i) => it + '~' + category[i])
//		.join('~') +
//	'~' +
//	category
//		.split('')
//		.filter((it, i) => i >= year.split('').length)
//		.join('~')

*/
