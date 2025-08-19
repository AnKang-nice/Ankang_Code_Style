module.exports = {
	extends: ['stylelint-config-standard-scss'],
	rules: {
		'scss/dollar-variable-pattern': null, // 允许使用 $ 开头的变量名
		'scss/at-import-partial-extension': null, // 解决不能使用 @import 引入 scss 文件
	},
};
