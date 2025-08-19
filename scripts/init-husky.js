const { execSync } = require('child_process');
const fs = require('fs-extra');
/**
 * 初始化Husky钩子
 * @param {Object} options 项目配置选项
 */
function initHusky(options) {
	console.log('🔧 配置Husky钩子...');

	// 初始化husky
	execSync('pnpm exec husky init', { stdio: 'inherit' });

	// 设置pre-commit钩子
	if (!fs.existsSync('.husky/pre-commit')) {
		execSync('npx husky add .husky/pre-commit "npx lint-staged"', { stdio: 'inherit' });
	}

	// 设置commit-msg钩子
	if (!fs.existsSync('.husky/commit-msg')) {
		execSync('npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"', {
			stdio: 'inherit',
		});
	}
	console.log(process.cwd());
	fs.copySync(
		`${process.cwd()}/node_modules/project-code-rule/configs/husky/pre-commit`,
		'.husky/pre-commit'
	);
	fs.copySync(
		`${process.cwd()}/node_modules/project-code-rule/configs/husky/commit-msg`,
		'.husky/commit-msg'
	);

	// 添加prepare脚本自动启用husky
	// execSync('npm set-script prepare "husky"');

	console.log('✅ Husky配置完成');
}

module.exports = { initHusky };
