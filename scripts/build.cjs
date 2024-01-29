/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsxPlugin = require('@vitejs/plugin-vue-jsx');
const baseConfig = defineConfig({
	configFile: false,
	publicDir: false,
	plugins: [vue(), vueJsxPlugin()]
});
// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts');
// 输出目录
const outFile = path.resolve(__dirname, '../lib');

// 组件库打包配置

const rollupOptions = {
	// 排除的库
	external: ['vue'],
	// input: entryFile,
	output: {
		globals: {
			vue: 'Vue'
		}
	}
};
const buildAll = async () => {
	await build({
		...baseConfig,
		build: {
			rollupOptions,
			lib: {
				entry: entryFile,
				name: 'vue3-ui',
				fileName: 'vue3-ui',
				formats: ['es', 'umd']
			},
			outDir: outFile
		}
	});
};

const buildLib = async () => {
	await buildAll();
};
buildLib();
