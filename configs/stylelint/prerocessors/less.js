module.exports = {
	extends: [
		'stylelint-config-standard',
		`${process.cwd()}/node_modules/project-code-rule/configs/stylelint/base`,
	],
	rules: {
		// Less 特定规则
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'extend',
					'import',
					'media',
					'keyframes',
					'font-face',
					'supports',
					'page',
					'charset',
					'namespace',
					'viewport',
					'supports',
					'document',
					'font-feature-values',
					'counter-style',
					'property',
					'layer',
					'container',
					'starting-style',
					'scope',
				],
			},
		],
		'property-no-vendor-prefix': null, // 允许浏览器前缀
		'selector-no-vendor-prefix': null, // 允许选择器浏览器前缀
		'value-no-vendor-prefix': null, // 允许值浏览器前缀
		'selector-pseudo-class-no-unknown': [
			true,
			{
				ignorePseudoClasses: ['global', 'local'],
			},
		],
	},
};
