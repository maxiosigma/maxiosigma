export const state = () => ({
	links: [
		{
			title: 'Главная',
			items: [
				{ title: 'Автор', href: 'about' },
				//{ title: 'Политика', href: 'policy' },
				//{ title: 'Обновления', href: 'about/update' },
			],
		},
		{
			title: 'Портфолио',
			href: 'portfolio',
			class: 'font-jokerman',
			//items: [
			//	{ title: 'Дизайнер', href: 'designer' },
			//	{ title: 'Разработчик', href: 'developer' },
			//	//{
			//	//	title: 'AAAAAAAA',
			//	//	items: [{ title: 'BBBBBBB', href: 'programs' }],
			//	//},
			//],
		},
		//{ title: 'Инфо', items: [{ title: 'Блог', href: 'blog' }] },
		{
			title: 'Сообщество',
			items: [
				//{ title: 'Сотрудничество', href: 'community/world' },
				{ title: 'Программы', href: 'programs' },
			],
		},
		//{
		//	title: 'ထ',
		//	...recurseInfinity(),
		//	//items: [{ title: 'ထ', items: [{ title: '∞' }] }],
		//},
	],
})

export const mutations = {
	onID(state, prop) {
		state.thisID = prop
	},
	onCount(state, prop) {
		state.thisCount = prop
	},
}

//function recurseInfinity(i = 1) {
//	if (i < 2)
//		return {
//			items: [{ title: 'ထ', items: recurseInfinity((i += 1)) }],
//		}
//}

//img: 'about.jpg',
//img: 'news.jpg',
//{ title: 'Бизнес-модели', href: 'blog/business/models' },
//{ title: 'Бизнес-идеи', href: 'blog/business/ideas' },
//items: [
//	{ title: 'b-1', href: 'community/world' },
//	{
//		title: 'b-2',
//		href: 'community/programs',
//		items: [
//			{ title: 'b-3', href: '3' },
//			{ title: 'b-3-1', href: '4' },
//		],
//	},
//],
//img: 'team.jpg',
//{
//	title: 'Dev',
//	//img: 'web.jpg',
//	//items: [
//	//	//{ title: 'Clip Path Generator', href: 'web/clippy' },
//	//	//{ title: 'Windi Blocks', href: 'web/windi' },
//	//],
//},
