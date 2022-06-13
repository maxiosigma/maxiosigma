const data = {
	excluded: ['test', 'l'],

	prefix: '',
	netlyConfig: netlyConfig(),
	MAINTENANCE_PAGE: '/techworks',
	isDev: process.env.NODE_ENV != 'production' ? true : false,
	optimization: process.env.NUXT_ENV_OPTIMIZATION ? true : false,
	route: {
		mobile: 'amp',
	},
	name: 'SIGMA',
	autor: 'Semenuk Maxim Valerievich',
	description:
		'Сайт о личном росте, бизнесе, сотрудничестве, фрилансе, заработке, путешествиях, экономии, науке, творчестве и мышлении',
	copyright: '(c) Sigma' + ' ' + new Date().getFullYear(),
	keywords:
		'Лидерство, Сотрудничество, Мышление, Потребление, Экономия, Путешествия, Фриланс, Блог, Программирование, Наука, Творчество, Вкуснота',
	email: 'maxiosigma@vk.com',
	update: process.env.NODE_ENV == 'production' ? String(Math.random()) : '0.7559774425759966',
	yandex: '7f84512887c0d6ec',
	lang: 'ru-RU',
	locale: {
		orig: 'ru_RU',
		alt: 'en_EN',
	},
	login: 'maxiosigma',
	chat: 'maxiecon',
	url: '/',
	host: 'https://maxiosigma.web.app',
	audio: '/public/audio/',
	video: '/public/video/',
}

export default { ...data, ...head() }

function head() {
	return {
		head: {
			titleTemplate: `${data.name} ${data.isDev ? '||' : '|'} %s`,
			links: links(),
			meta: meta(),
		},
	}
}

function netlyConfig() {
	// const fs = require("fs");
	// const toml = require("toml");
	// const parse = toml.parse(fs.readFileSync("./netlify.toml", "utf8"));
	// delete parse.dev;
	// delete parse.build;
	// return parse;
	return null
}

function meta() {
	return [
		{ charset: 'utf-8' },
		{
			key: 'viewport',
			name: 'viewport',
			content:
				'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
		},
		{
			key: 'format-detection',
			name: 'format-detection',
			content: 'telephone=yes,date=yes,address=yes,email=yes,url=yes',
		},

		{ name: 'yandex-verification', content: data.yandex },
		{ name: 'theme-color', content: '#000000' },

		{ name: 'keywords', content: data.keywords },
		{ name: 'copyright', content: data.copyright },
		{ name: 'apple-mobile-web-app-capable', content: 'yes' },

		{ 'http-equiv': 'imagetoolbar', content: 'yes' },
		{ 'http-equiv': 'cleartype', content: 'on' },
		{ 'http-equiv': 'Content-Language', content: 'ru' },
		{ 'http-equiv': 'Cache-Control', content: 'public, max-age=7200, s-maxage=10800' },
		{ 'http-equiv': 'vary', content: 'User-Agent' },
		{ 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
		{ 'http-equiv': 'Reply-to', content: data.email },
		{ 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },

		{ property: 'og:type', content: 'website' },
		{ property: 'og:host', content: data.host },
		{ property: 'og:locale', content: data.locale.orig },
		{ property: 'og:locale:alternate', content: data.locale.alt },
		{ property: 'og:determiner', content: 'auto' },

		{ name: 'twitter:site', content: '@' + data.chat },
		{ name: 'twitter:creator', content: '@' + data.login },
		{ name: 'twitter:url', content: data.host },

		{ property: 'fb:admins', content: data.login },
		{ property: 'profile:first_name', content: 'Maxim' },
		{ property: 'profile:last_name', content: 'Valerievich' },
		{ property: 'profile:username', content: data.login },
		{ property: 'publisher', content: data.autor },
		{ property: 'autor', content: data.autor },

		{ property: 'fb:app_id', content: data.login },
	]
}

function links() {
	return []
}

function comments() {
	//autor: 'Semenuk Maxim Valerievich',
	//Semenuk Maxim Valerievich
	//description: 'блог, партнёрство и программирование',
	//img: {
	//	path: {
	//		ico: '/public/icons/favicon.ico',
	//		short: '/public/icons/shortcut.ico',
	//		orig: '/public/icons/favicon.png',
	//		alt: '/public/icons/favicon.png',
	//	},
	//},
	//{ hid: 'icon', rel: 'icon', type: 'image/x-icon', href: config.img.path.ico },
	//{ hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: config.img.path.orig },
	//{ hid: 'icon-192x192', rel: 'icon', type: 'image/png', href: config.img.path.orig, sizes: '192x192' }, //png
	//{ hid: 'icon-256x256', rel: 'icon', type: 'image/png', href: config.img.path.orig, sizes: '256x256' }, //png
	//{ hid: 'icon-32x32', rel: 'icon', type: 'image/png', href: config.img.path.orig, sizes: '32x32' }, //png
	//{ hid: 'icon-16x16', rel: 'icon', type: 'image/png', href: config.img.path.orig, sizes: '16x16' }, //png
	//{ hid: 'icon-16x16', rel: 'mask-icon', href: config.img.path.orig, color: '#333333' }, //svg
	//{
	//	hid: 'shortcut-icon',
	//	rel: 'shortcut icon',
	//	type: 'image/x-icon',
	//	href: config.img.path.ico,
	//	'data-default-icon': config.img.path.ico,
	//	'data-badged-icon': config.img.path.ico,
	//},
	//{ name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
	//{ name: 'msapplication-TileColor', content: '#990000"' },
	//{ name: 'msapplication-window', content: 'width=1200;height=1200' },
	//{ name: 'msapplication-window', content: 'width=768' },
	//<meta property="og:video:type" content="application/x-shockwave-flash" />
	//<meta property="og:video" content="http://site.com/video/video.swf?file=files/video1001.mp4" />
	//<meta property="og:video:height" content="720" />
	//<meta property="og:video:width" content="1280" />
	//<meta property="og:duration" content="2520" />
}
