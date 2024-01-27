import {
	demoblockPlugin,
	demoblockVitePlugin
} from 'vitepress-theme-demoblock';
import vueJsxPlugin from '@vitejs/plugin-vue-jsx';

const sidebar = {
	'/': [
		{ text: '首页', link: '/' },
		{ text: '关于', link: '/components/about' },
		{
			text: '前端',
			items: [
				{ text: 'bug', link: '/components/bug' },
				{ text: 'bug2', link: '/components/bug' }
			]
		}
	]
};

const config = {
	title: '我是文档标题',
	description: '使用 Vitepress 搭建组件库文档站点。',
	themeConfig: {
		sidebar,
		nav: [
			{ text: '文档', link: '/guide/', activeMatch: '^/guide/' },
			{
				text: '组件',
				link: '/components/button',
				activeMatch: '^/components/'
			},
			{ text: 'API 参考', link: '/api/' },
			{
				text: '更新日志',
				link: 'https://github.com/xinlei3166/vitepress-demo'
			}
		],
		search: {
			placeholder: '搜索',
			provider: 'local'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/xinlei3166/vitepress-demo' }
		],
	},
	markdown: {
		theme: { light: 'github-light', dark: 'github-dark' },
		config: (md) => {
			md.use(demoblockPlugin, {
				customClass: 'demoblock-custom'
			});
		}
	},
	vite: {
		plugins: [demoblockVitePlugin(), vueJsxPlugin()]
	}
};

export default config;
