module.exports = {
	//lintOnSave: false,
	//devServer: {
	//	disableHostCheck: true,
	//},
	//publicPath: '/',
	css: {
		sourceMap: true,
		loaderOptions: {
			css: {
				camelCase: true,
			},
			//sass: {
			//	implementation: require('sass'),
			//},
		},
	},
	pluginOptions: {
		windicss: {
			scan: {
				dirs: ['/'],
				exclude: ['node_modules', '.git'],
				include: ['./assets/index.scss', './fonts/**/index.css', './config/head/index.js', '**/*.{vue, js, md}', '**/**/*.{vue, js, md}', '**/**/**/*.{vue, js, md}'],
			},
			// see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
		},
	},
}
