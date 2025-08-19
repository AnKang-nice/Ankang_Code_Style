module.exports = {
	// 继承官方标准规则和 Prettier 兼容规则
	extends: [
		'stylelint-config-standard', // 官方标准 CSS 规则
	],

	// 插件配置（基础配置无需额外插件）
	plugins: [],

	// 自定义规则（覆盖或补充继承的规则）
	rules: {
		// --------------------------
		// 命名规范
		// --------------------------
		// "selector-class-pattern": [        // 类名使用 kebab-case（短横线连接）
		//     "^[a-z][a-z0-9-]*$",
		//     {
		//         message: "类名必须使用 kebab-case（例：.header-nav）"
		//     }
		// ],
		// "selector-id-pattern": [           // ID 名使用 camelCase（驼峰式）
		//     "^[a-z][a-zA-Z0-9]*$",
		//     {
		//         message: "ID 名必须使用 camelCase（例：#userName）"
		//     }
		// ],

		// --------------------------
		// 属性与值规则
		// --------------------------
		'property-no-unknown': true, // 禁止未知的 CSS 属性
		'value-no-vendor-prefix': true, // 禁止值的浏览器前缀（建议通过 autoprefixer 自动处理）
		'property-no-vendor-prefix': true, // 禁止属性的浏览器前缀
		'declaration-block-no-duplicate-properties': [
			// 禁止重复属性
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'], // 允许连续不同值的重复属性（用于覆盖）
			},
		],

		// --------------------------
		// 选择器规则
		// --------------------------
		'selector-max-id': 0, // 禁止使用 ID 选择器（推荐使用类选择器）
		'selector-no-vendor-prefix': true, // 禁止选择器的浏览器前缀
		'selector-max-compound-selectors': 3, // 复合选择器最多 3 层（例：.a .b .c 是 3 层）

		// --------------------------
		// 注释规则
		// --------------------------
		'comment-no-empty': true, // 禁止空注释
		'comment-whitespace-inside': [
			// 注释内容前后必须有空格（/* 内容 */）
			true,
			{
				exceptions: ['*'], // 允许 /*! 注释（用于保留版权信息）
			},
		],

		// --------------------------
		// 其他规则
		// --------------------------
		'block-no-empty': true, // 禁止空代码块
		'declaration-block-trailing-semicolon': 'always', // 声明块末尾必须有分号
		'no-descending-specificity': null, // 暂时关闭「选择器权重不能递减」的检查（视项目情况开启）
		'color-hex-length': 'short', // 颜色值使用短格式（例：#fff 而非 #ffffff）
		'unit-no-unknown': true, // 禁止未知的单位（如 px、rem 是合法的，abc 是非法的）
	},
	ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
};
