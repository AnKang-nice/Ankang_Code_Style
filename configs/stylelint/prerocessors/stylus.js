module.exports = {
	extends: [
		'stylelint-config-standard',
		`${process.cwd()}/node_modules/project-code-rule/configs/stylelint/base`,
	],
	rules: {
		// Stylus 特定规则
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'extend',
					'define-placeholder',
					'define-mixin',
					'mixin',
					'include',
					'content',
					'return',
					'if',
					'else',
					'for',
					'each',
					'while',
					'function',
					'return',
				],
			},
		],
		'property-no-vendor-prefix': null, // 允许浏览器前缀
		'selector-no-vendor-prefix': null, // 允许选择器浏览器前缀
		'value-no-vendor-prefix': null, // 允许值浏览器前缀
	},
};
