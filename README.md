# Vue 3 + TypeScript + Vite

```bash
 # 安装jsx插件
 pnpm install @vitejs/plugin-vue-jsx

# 初始化插件eslint 的规则
npx eslint --init   # (分别选择 problems esm vue browser javascript)

# 安装prettier
 pnpm install -D prettier eslint-plugin-prettier eslint-config-prettier

# 修改eslint配置文件
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:vue/vue3-recommended',
		'plugin:prettier/recommended'
	],
 # 新建 prettier.json
 {
    "printWidth": 80,
    "tabWidth": 2,
    "useTabs": true,
    "singleQuote": true,
    "semi": true,
    "trailingComma": "none",
    "bracketSpacing": true
  }
  # 新增两个命令
    "lint": "eslint . --ext .js,.ts,.tsx,.vue", # 检查
    "lint:fix": "eslint . --ext .js,.ts,.tsx,.vue"  # 自动修复

# 安装husky
 npx mrm@2 lint-staged


 # 安装vitepress
   pnpm install -D vitepress
 # 新增文件夹docs
    # 新增命令
    "docs:dev":"vitepress dev docs",
    "docs:serve":"vitepress serve docs",
    "docs:build":"vitepress build docs",
```
