const { execSync } = require('child_process');

/**
 * 安装项目依赖
 * @param {Object} options 项目配置选项
 */
function installDependencies(options) {
	const { preprocessor } = options;
	const deps = [
		'eslint@^8.57.0',
		'stylelint',
		'prettier',
		'husky',
		'lint-staged',
		'@commitlint/cli',
		'@commitlint/config-conventional',
		'eslint-config-prettier',
	];

	// 添加预处理器相关依赖
	if (preprocessor === 'sass') {
		deps.push('postcss-scss', 'stylelint-config-standard-scss');
	} else if (preprocessor === 'less') {
		deps.push('postcss-less', 'stylelint-config-standard-less');
	}

	console.log('📦 正在安装依赖...', deps);
	execSync(`pnpm install -D ${deps.join(' ')}`, { stdio: 'inherit' });
}

module.exports = { installDependencies };
