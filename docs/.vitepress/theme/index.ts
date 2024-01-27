import DefaultTheme from 'vitepress/dist/client/theme-default/index.js';
import { useComponents } from './useComponents';
import 'vitepress-theme-demoblock/dist/theme/styles/index.css';
import './style.css'
export default {
	...DefaultTheme,
	enhanceApp(ctx) {
		DefaultTheme.enhanceApp(ctx);
		useComponents(ctx.app);
	}
};
