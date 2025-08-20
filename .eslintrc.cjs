module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	// 环境配置：指定代码运行的环境，每个环境会预设一组全局变量
	env: {
		browser: true, // 浏览器环境（window、document等）
		es2021: true, // ES2021 及以下语法支持
		node: true, // Node.js 环境（require、module等）
		commonjs: true, // CommonJS 模块系统
	},
	// 解析器配置：指定如何解析代码
	parserOptions: {
		ecmaVersion: 'latest', // 支持最新的 ECMAScript 语法
		sourceType: 'module', // 使用 ES 模块（import/export）
		ecmaFeatures: {
			jsx: false, // 不启用 JSX 支持
		},
	},
	rules: {
		semi: 2, // 末尾加分号
		eqeqeq: [2, 'always'], // 必须=== !==
		'no-var': 2, // 不可使用var
		'no-alert': 2, // 不允许alert
		'no-empty-function': 2, // 不允许出现空函数
		'no-unused-vars': 2, // 不允许出现未使用的变量
		'semi-spacing': [2, { before: false, after: true }], // 分号前不可加空格
		'no-const-assign': 2, //禁止修改const声明的变量
		'no-dupe-args': 2, //函数参数不能重复`
		'no-func-assign': 2, //禁止重复的函数声明
		'no-redeclare': 2, //禁止重复声明变量
		'no-mixed-spaces-and-tabs': 2, //禁止混用tab和空格
		// try catch 必须有错误信息
		'no-useless-catch': 'off',
	},
};
