const links = {
	myworld: [
		{
			alt: 'https://www.myworld.com/ru/registration/taflink?r=jceaoVc5Iv6VgbmliC4RbmzGCvF%2BHlD0btyQib7pk3SJIIIT%2BGorrdt1i1MjSUTe&t=9b06e673-7d57-482f-9cbf-d6e65096407a',
			lp: 'https://myw.tf/m8sk75',
			lm: 'https://myw.tf/ab2a63',
			s: 'mw',
		},
	],
	xteaser: [{ l: 'https://xteaser.ru/a/?ref=105269', s: 'xts' }],
	teaserfast: [{ l: 'https://teaserfast.ru/a/maxiosigma', s: 'tss' }],
	surfearner: [{ l: 'https://fastref.ru/1853484', s: 'ftf' }],
	bezkoder: [
		{ t: 'Партнёрка', l: 'https://bezkoder.ru/part_bk?gcao=11787&gcpc=6f194', s: 'pbcd' },
		{ t: 'Онлайн-тренинг - Сайты на Tilda', l: 'https://bezkoda.ru/?gcao=10931&gcpc=6f194', s: 'bcd' },
	],
	duolingo: [{ l: 'https://invite.duolingo.com/BDHTZTB5CWWKSW3OHTZRPUOGWE', s: 'duo' }],
	sendpulse: [{ l: 'https://sendpulse.com/ru/?ref=7779344', s: 'sp' }],
	bosslike: [{ l: 'https://bosslike.ru/?ref=5669842', s: 'bsl' }],
	emdesell: [{ l: 'http://emdesell.ru/p/wOh5Q1', s: 'ems' }],
	wayup: [{ l: 'https://wayup.in?ref_link=270449', s: 'wup' }],
	bothelp: [{ l: 'https://bothelp.io/ru/?ref=1632', s: 'calling' }],
}

const utms = {
	origin: 'utm_medium=partner&utm_campaign=meworld&utm_content=link&utm_term=sigma&utm_source=site',
	vk: 'utm_medium=smm&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={platform}&utm_source=vk',
	fb: 'utm_medium=smm&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}&utm_source=facebook',
	tg: 'utm_medium=smm&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}&utm_source=telegram',
	ins: 'utm_medium=smm&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}&utm_source=instagram',
	ytb: 'utm_medium=smm&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}&utm_source=youtube',
	ok: 'utm_medium=smm&utm_campaign={campaign_id}&utm_content={ad_id}&utm_term={keyword}&utm_source=odnoklassniki',
}

const utm_links = Object.values(links).reduce((sum_links, link, i) => {
	Object.assign(sum_links, {
		[Object.keys(links)[i]]: link.map((info_link, index_link) => {
			const title = info_link.t

			const socials = Object.values(utms).reduce((sum_utm, utm, utmi) => {
				const social = Object.keys(utms)[utmi]
				//const orig_utm = social === 'origin' ? '' : `?${utm}`
				const orig_utm_s = social === 'origin' ? '' : `_${social}`

				const result = {
					[social]: {
						s: info_link.s + orig_utm_s,
						...{ ...(info_link.lp && { lp: info_link.lp }) },
						...{ ...(info_link.lm && { lm: info_link.lm }) },
						...{ ...(info_link.l && { l: info_link.l }) },
						...{ ...(info_link.alt && { alt: info_link.alt }) },
						o: info_link.s,
						u: '?' + utm,
					},
				}
				Object.assign(sum_utm, result)
				return sum_utm
			}, {})

			//...{ ...(info_link.lp && { lp: info_link.lp + orig_utm }) },
			//...{ ...(info_link.lm && { lm: info_link.lm + orig_utm }) },
			//...{ ...(info_link.l && { l: info_link.l + orig_utm }) },
			//...{ ...(info_link.alt && { alt: info_link.alt }) },

			return { title, socials }
		}),
	})

	return sum_links
}, {})

export const state = () => utm_links
