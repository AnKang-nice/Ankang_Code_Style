const fs = require('fs-extra');
const path = require('path');

// 配置文件映射关系
const configFilesMap = {
	// ESLint - 基础配置
	'baseConfig/.eslintrc.base.cjs': 'eslint/base.js',
	'.eslintignore': 'eslint/.eslintignore',

	// Stylelint - 根据预编译语言选择
	'baseConfig/.stylelintrc.base.cjs': 'stylelint/{{stylelintConfig}}',
	'.stylelintignore': 'stylelint/.stylelintignore',

	// Prettier
	'.prettierrc.cjs': 'prettier/index.js',
	'.prettierignore': 'prettier/.prettierignore',

	// Commitlint
	'commitlint.config.cjs': 'commitlint/index.js',

	// Lint-staged
	'.lintstagedrc.cjs': 'lint-staged/index.js',

	// Husky
	'.husky/pre-commit': 'husky/pre-commit',
	'.husky/commit-msg': 'husky/commit-msg',

	// VS Code
	'.vscode/settings.json': 'vscode/settings.json',
	'.vscode/extensions.json': 'vscode/extensions.json',
};

/**
 * 复制并强制覆盖配置文件
 * @param {Object} options 项目配置选项
 */
async function copyConfigFiles(options) {
	const { preprocessor } = options;
	const projectRoot = process.cwd();
	const configRoot = path.resolve(__dirname, '../configs');

	// console.log(`📁 项目根目录: ${projectRoot}`);
	// console.log(`⚙️  配置目录: ${configRoot}`);
	// console.log(`🎨 预处理器: ${preprocessor}`);

	// 计算stylelint配置路径
	const stylelintConfig = getStylelintConfigPath(preprocessor);
	// console.log(`🎯 Stylelint配置: ${stylelintConfig}`);

	// 处理所有配置文件
	for (const [targetPath, templatePath] of Object.entries(configFilesMap)) {
		try {
			// 替换模板变量
			const resolvedTemplatePath = templatePath.replace(
				'{{stylelintConfig}}',
				stylelintConfig
			);

			const sourcePath = path.join(configRoot, resolvedTemplatePath);
			const destPath = path.join(projectRoot, targetPath);

			// console.log(`\n📋 处理配置文件: ${targetPath}`);
			// console.log(`   📤 源文件: ${sourcePath}`);
			// console.log(`   📥 目标文件: ${destPath}`);

			// 检查源文件是否存在
			if (!(await fs.pathExists(sourcePath))) {
				// console.log(`   ⚠️  源文件不存在，跳过: ${sourcePath}`);
				continue;
			}

			// 确保目标目录存在
			await fs.ensureDir(path.dirname(destPath));

			//

			await fs.copy(sourcePath, destPath);

			// copy完成后   如果项目中有eslint  stylelint 相关配置  则需要继承baseConfig下的配置文件
			if (await fs.pathExists(path.join(projectRoot, '.eslintrc.cjs'))) {
				// 读取项目中的eslint配置文件
				// let eslintConfig = require(path.join(projectRoot, '.eslintrc.cjs'));
				// console.log(eslintConfig, 1111);
				// // 项目中的继承baseConfig下的配置文件  继承不是合并
				// if (!eslintConfig.extends.includes('baseConfig/.eslintrc.base.cjs')) {
				// 	eslintConfig.extends = [
				// 		...eslintConfig.extends,
				// 		'baseConfig/.eslintrc.base.cjs',
				// 	];
				// }
				// console.log(eslintConfig, 333);
				// eslintConfig = JSON.stringify(eslintConfig);
				// console.log(eslintConfig, 222);
				// await fs.writeFile(path.join(projectRoot, '.eslintrc.cjs'), eslintConfig, 'utf8');
			} else {
				// 不存在 直接把baseConfig下的配置文件复制到项目根目录
				if (await fs.pathExists(path.join(projectRoot, 'baseConfig/.eslintrc.base.cjs'))) {
					await fs.copy(
						path.join(projectRoot, 'baseConfig/.eslintrc.base.cjs'),
						path.join(projectRoot, '.eslintrc.cjs')
					);
				}
			}

			// 如果项目中有stylelint 相关配置  则需要继承baseConfig下的配置文件
			if (await fs.pathExists(path.join(projectRoot, '.stylelintrc.cjs'))) {
				// 读取项目中的stylelint配置文件
				// const stylelintConfig = require(path.join(projectRoot, '.stylelintrc.cjs'));
				// // 项目中的继承baseConfig下的配置文件  继承不是合并
				// if (!stylelintConfig.extends.includes('baseConfig/.stylelintrc.base.cjs')) {
				// 	stylelintConfig.extends = [
				// 		'baseConfig/.stylelintrc.base.cjs',
				// 		...stylelintConfig.extends,
				// 	];
				// }
				// await fs.write(path.join(projectRoot, '.stylelintrc.cjs'), stylelintConfig);
			} else {
				// 不存在 直接把baseConfig下的配置文件复制到项目根目录
				// baseConfig/.stylelintrc.base.cjs 存在
				if (
					await fs.pathExists(path.join(projectRoot, 'baseConfig/.stylelintrc.base.cjs'))
				) {
					await fs.copy(
						path.join(projectRoot, 'baseConfig/.stylelintrc.base.cjs'),
						path.join(projectRoot, '.stylelintrc.cjs')
					);
				}
			}

			// 给husky钩子添加执行权限
			if (targetPath.startsWith('.husky/')) {
				await fs.chmod(destPath, 0o755);
				// console.log(`   🔐 设置执行权限: ${destPath}`);
			}

			// console.log(`   ✅ 完成: ${targetPath}`);
		} catch (error) {
			// console.error(`   ❌ 处理失败: ${targetPath}`, error.message);
			throw error;
		}
	}

	// console.log("\n🎉 所有配置文件处理完成！");
	// console.log("💪 团队代码规范已强制应用！");
}

/**
 * 计算stylelint配置路径
 * 根据预编译语言选择对应的配置
 */
function getStylelintConfigPath(preprocessor) {
	switch (preprocessor) {
		case 'less':
			return 'prerocessors/less.js';
		case 'sass':
		case 'scss':
			return 'prerocessors/sass.js';
		case 'stylus':
			return 'prerocessors/stylus.js';
		case 'css':
		default:
			return 'base.js';
	}
}

module.exports = { copyConfigFiles };
