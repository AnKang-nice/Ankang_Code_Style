module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	env: {
		node: true,
		es2020: true,
		commonjs: true,
	},
	parserOptions: {
		ecmaVersion: 2020,
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
	},
};
