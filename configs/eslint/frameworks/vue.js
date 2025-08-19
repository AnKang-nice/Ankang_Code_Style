// eslint-plugin-vue   vue-eslint-parser
// https://eslint-vue.nodejs.cn/rules/
module.exports = {
	// 继承基础配置（复用通用 JS 规则）
	// 继承 Vue 官方推荐规则
	extends: [
		// 绝对路径
		`${process.cwd()}/node_modules/project-code-rule/configs/eslint/base.js`,
		'plugin:vue/vue3-essential', // 若支持 Vue 3（推荐）
		// 'plugin:vue/recommended', // 若需要兼容 Vue 2
	],
	// 解析器配置：处理 Vue 单文件组件
	// parser: 'vue-eslint-parser', // 解析 .vue 文件
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: false, // Vue 项目通常不使用 JSX，如需支持可设为 true
		},
	},

	// Vue 专用规则（覆盖或补充基础规则）
	rules: {
		// Vue 组件规则
		'vue/multi-word-component-names': 'off',
		'vue/no-unused-components': 'warn', // 未使用的组件警告
		'vue/prop-name-casing': ['error', 'camelCase'], // props 命名使用驼峰
		'vue/v-on-event-hyphenation': ['error', 'always'], // v-on 事件使用连字符

		// 关闭与 Vue 语法冲突的基础规则
		'no-undef': 'off', // Vue 模板中的变量由组件定义，无需 ESLint 检测未定义
	},
};
