module.exports = {
	extends: [
		'eslint:recommended',
		'prettier'
	],
	env: {
		node: true,
		es2020: true,
		commonjs: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
		// 变量和声明相关
		'no-unused-vars': ['warn', {
			vars: 'all',
			args: 'after-used', // 允许未使用的尾部参数（如回调中未用的 next）
			ignoreRestSiblings: true, // 忽略解构中的未使用变量（如 const { a, ...rest } = obj; 忽略 a）
			varsIgnorePattern: '^_', // 允许下划线开头的变量（如 _temp 临时变量）
		}],

		// 函数相关
		'no-empty-function': 'error', // 不允许出现空函数
		'no-empty': ['error', { allowEmptyCatch: true }], // 允许空的catch块
		'prefer-arrow-callback': 'warn', // 优先使用箭头函数作为回调
		'no-loop-func': 'error', // 禁止在循环中创建函数

		// 比较和逻辑相关
		'eqeqeq': ['error', 'always'], // 必须使用 === 和 !==
		'no-fallthrough': 'warn', // 禁止switch语句落空

		// 安全相关
		'no-alert': 'error', // 不允许alert
		'no-eval': 'error', // 禁止使用eval
		'no-implied-eval': 'error', // 禁止隐式eval
		'no-new-func': 'error', // 禁止使用Function构造函数
		'no-script-url': 'error', // 禁止javascript: URL

		// 最佳实践
		'prefer-const': 'warn', // 优先使用const
		'no-console': 'warn', // 警告console语句（生产环境建议设为error）
		'no-debugger': 'warn', // 警告debugger语句
		'no-return-assign': 'error', // 禁止在return语句中赋值
	},
};
