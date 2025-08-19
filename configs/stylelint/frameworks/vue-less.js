module.exports = {
	root: true,
	extends: [
		`${process.cwd()}/node_modules/project-code-rule/configs/stylelint/base`,
		`${process.cwd()}/node_modules/project-code-rule/configs/stylelint/prerocessors/less`,
	],
};
