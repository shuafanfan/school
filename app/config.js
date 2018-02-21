/*!
 * =====================================================
 * require Config
 * 配置文件 引入JS
 * =====================================================
 */

require.config({
	baseUrl: './app/lib',
	paths: {
		'jquery': 'jquery.min',
		'jquery.cookie': 'jquery.cookie',
		'light': 'light7.min',
		'light.swiper': 'light7-swiper.min',
		'md5': 'md5'
	},
	shim:{
		'jquery.cookie': {
			exports: "$",
			deps: ['jquery']
		},
		'light': {
			exports: "$",
			deps: ['jquery']
		},
		'light.swiper': {
			exports: "$",
			deps: ['jquery','light']  
		}
	}
});