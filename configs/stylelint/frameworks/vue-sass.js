// @see: https://stylelint.io

module.exports = {
	root: true,
	// 继承某些已有的规则
	extends: [
		`${process.cwd()}/node_modules/project-code-rule/configs/stylelint/base`,
		`${process.cwd()}/node_modules/project-code-rule/configs/stylelint/prerocessors/sass`,
		'stylelint-config-standard-vue/scss',
	],

	overrides: [
		// 扫描 .vue/html 文件中的 <style> 标签内的样式
		{
			files: ['**/*.{vue,html}'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		// 'function-url-quotes': 'always', // URL 的引号 "always(必须加上引号)"|"never(没有引号)"
		// 'color-hex-length': 'long', // 指定 16 进制颜色的简写或扩写 "short(16进制简写)"|"long(16进制扩写)"
		// 'rule-empty-line-before': 'never', // 要求或禁止在规则之前的空行 "always(规则之前必须始终有一个空行)"|"never(规则前绝不能有空行)"|"always-multi-line(多行规则之前必须始终有一个空行)"|"never-multi-line(多行规则之前绝不能有空行)"
		// 'font-family-no-missing-generic-family-keyword': null, // 禁止在字体族名称列表中缺少通用字体族关键字
		// 'scss/at-import-partial-extension': null, // 解决不能使用 @import 引入 scss 文件
		// 'property-no-unknown': null, // 禁止未知的属性
		// 'no-empty-source': null, // 禁止空源码
		// 'selector-class-pattern': null, // 强制选择器类名的格式
		// 'value-no-vendor-prefix': null, // 关闭 vendor-prefix (为了解决多行省略 -webkit-box)
		// 'no-descending-specificity': null, // 不允许较低权重的选择器出现在覆盖较高权重的选择器
		// 'value-keyword-case': null, // 解决在 scss 中使用 v-bind 大写单词报错
		// 'selector-pseudo-class-no-unknown': [
		// 	true,
		// 	{
		// 		ignorePseudoClasses: ['global', 'v-deep', 'deep']
		// 	}
		// ],
		// 'keyframes-name-pattern': null, // 强制 keyframes 名称的格式
		// "scss/dollar-variable-pattern": null, // 允许使用 $ 开头的变量名
	},
};
