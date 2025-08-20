module.exports = {
	// 继承官方标准规则
	extends: [
		'stylelint-config-standard', // 官方标准 CSS 规则
	],

	// 插件配置
	plugins: [],

	// 自定义规则配置
	rules: {
		// ================================
		// 选择器相关规则
		// ================================
		'selector-max-id': 0, // 禁止使用 ID 选择器（推荐使用类选择器）
		'selector-no-vendor-prefix': true, // 禁止选择器的浏览器前缀
		'selector-max-compound-selectors': 3, // 复合选择器最多 3 层
		'selector-class-pattern': null, // 关闭类名格式强制要求
		'keyframes-name-pattern': null, // 关闭 keyframes 名称格式强制要求

		// ================================
		// 属性与值规则
		// ================================
		'property-no-unknown': true, // 禁止未知的 CSS 属性
		'property-no-vendor-prefix': true, // 禁止属性的浏览器前缀
		'value-no-vendor-prefix': null, // 关闭值的前缀检查（解决多行省略 -webkit-box 问题）
		'declaration-block-no-duplicate-properties': [
			true,
			{
				ignore: ['consecutive-duplicates-with-different-values'], // 允许连续不同值的重复属性
			},
		],

		// ================================
		// 字体相关规则
		// ================================
		'font-family-no-missing-generic-family-keyword': null, // 关闭字体族通用关键字强制要求

		// ================================
		// 颜色和单位规则
		// ================================
		'color-hex-length': 'short', // 颜色值使用短格式（#fff 而非 #ffffff）
		'unit-no-unknown': true, // 禁止未知的单位

		// ================================
		// URL 和引号规则
		// ================================
		'function-url-quotes': 'always', // URL 必须加上引号

		// ================================
		// 代码块和空行规则
		// ================================
		'block-no-empty': true, // 禁止空代码块
		'rule-empty-line-before': 'never', // 规则前不能有空行
		'comment-no-empty': true, // 禁止空注释

		// ================================
		// 特异性规则
		// ================================
		'no-descending-specificity': null, // 关闭选择器权重降序检查

		// ================================
		// 源码规则
		// ================================
		'no-empty-source': null, // 关闭空源码检查
	},

	// 忽略的文件类型
	ignoreFiles: [
		'**/*.js',
		'**/*.jsx',
		'**/*.tsx',
		'**/*.ts'
	],
};
