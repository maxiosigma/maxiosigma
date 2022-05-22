const links = [
	{
		name: 'lyconet',
		short: 'lc',
		link: 'https://lyco.to/s8bxou',
		title: 'Современный бизнес',
		description: 'Начало вашего пути к самому масштабному бизнесу мира',
		alt: 'https://www.lyconet.com/ru/registration/public?r=lW8x5FQkQ0FCLWAUGasxK6et8BQkHCEfiaf40G57Eu47H50uyR%2BRrELUYMgCL6SL&t=064e202b-0e59-435e-b802-52b8fed4667d',
	},
	{
		name: 'myworld',
		short: 'mw',
		link: 'https://myw.tf/m8sk75',
		title: 'Бесплатная регистрация',
		description:
			'Делайте покупки и получайте Deals, Cashback, Shopping Points, Benefits и Vauchers. Они помогут сделать покупки еще более доступными',
		alt: 'https://www.myworld.com/ru/registration/taflink?r=jceaoVc5Iv6VgbmliC4RbmzGCvF%2BHlD0btyQib7pk3SJIIIT%2BGorrdt1i1MjSUTe&t=5d017ed9-3fa2-48d8-9da4-bdd2b3034612',
	},
	{
		name: 'duolingo',
		title: 'Duo',
		description: 'Лучший учитель английского 1',
		short: 'duo',
		link: 'https://invite.duolingo.com/BDHTZTB5CWWKSW3OHTZRPUOGWE',
	},
	{
		name: 'bezkoder',
		title: 'Будь моим партнёром',
		short: 'pbk',
		link: 'https://bezkoder.ru/part_bk?gcao=11787&gcpc=6f194',
	},
	{
		name: 'bezkoder',
		title: 'Распродажа',
		short: 'spss',
		link: 'https://bezkoda.ru/bf2021?gcao=26442&gcpc=6f194',
	},
	{
		name: 'bezkoder',
		title: 'Тренинг',
		short: 'spst',
		link: 'https://bezkoda.ru/?gcao=10931&gcpc=6f194',
	},
	{ name: 'sendpulse', short: 'sp', link: 'https://sendpulse.com/ru/?ref=7779344' },
	{ name: 'teaserfast', short: 'tss', link: 'https://teaserfast.ru/a/maxiosigma' },
	{ name: 'xteaser', short: 'xts', link: 'https://xteaser.ru/a/?ref=105269' },
	{ name: 'surfearner', short: 'ftf', link: 'https://fastref.ru/1853484' },
	{
		name: 'socialbooster',
		short: 'sbme',
		link: 'https://socialbooster.me/r/76197ac91c2b41a0997ee8fd3ed39fa8',
	},
	{ name: 'emdesell', short: 'ems', link: 'http://emdesell.ru/p/wOh5Q1' },
	{ name: 'bothelp', short: 'calling', link: 'https://bothelp.io/ru/?ref=1632' },
	{ name: 'tinkoff', short: 'tnf', link: 'https://www.tinkoff.ru/sl/38zOBL300qs' },
	{ name: 'wayup', short: 'wup', link: 'https://wayup.in?ref_link=270449' },
	{ name: 'bosslike', short: 'bsl', link: 'https://bosslike.ru/?ref=5669842' },
	{ name: 'mlmco', short: 'bmcl', link: 'https://best.mlmco.net/?ref=maxiosigma' },
	{ name: 'megadisk', short: 'mega', link: 'https://mega.nz/aff=FX_NFvIVdH0' },

	{ name: 'megadisk', short: 'amega', link: 'https://mega.nz/aff=FX_NFvIVdH0' },
]

export const state = () => ({
	data: [],
	isUpload: false,
})

export const mutations = {
	setLinks(state, data) {
		const result = links?.filter(
			(ln) => data.filter((dln) => ln?.short === dln?.short).length === 0
		)

		!state.isUpload ? (state.data = [...data, ...result]) : (state.isUpload = true)
	},
}

export const actions = {
	async getLinks({ dispatch }, data) {
		await dispatch('fetchPrismicLinks', data?.prismic)
	},
	async fetchPrismicLinks({ commit }, prismic) {
		const result = prismic
			? (await prismic.api.query(prismic.predicates.at('document.type', 'link'))).results?.reduce(
					(sum, it) => {
						const data = it?.data,
							img = data?.img
						sum.push({
							...(it?.uid && { short: it?.uid }),
							...(data?.ttl && { title: data?.ttl }),
							...(data?.dsc && { description: data?.dsc }),
							...(data?.lnk && { link: data?.lnk }),
							...(data?.alt && { alt: data?.alt }),
							...(data?.pth && { partnership: data?.pth }),
							...(img?.url && {
								img: {
									url: img?.url,
									cdn: cdn(img?.url),
									height: img?.height,
									width: img?.width,
								},
							}),
						})
						return sum
					},
					[]
			  )
			: []

		commit('setLinks', result)
	},
}

function cdn(url) {
	return 'images/cdn/' + url?.split('/')[url.split('/').length - 1].split('?')[0]
}
