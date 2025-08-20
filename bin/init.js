#!/usr/bin/env node
const inquirer = require('@inquirer/prompts');

const { copyConfigFiles } = require('../scripts/copy-files');
const { installDependencies } = require('../scripts/install-deps');
const { initHusky } = require('../scripts/init-husky');

// 主流程
async function main() {
	try {
		console.log('🚀 开始初始化前端代码规范...');

		// 获取用户配置
		const preprocessor = await inquirer.select({
			message: '请选择CSS预处理器',
			choices: [
				{ name: 'Sass/SCSS', value: 'sass' },
				{ name: 'Less', value: 'less' },
				{ name: 'Stylus', value: 'stylus' },
				{ name: '无预处理器 (纯CSS)', value: 'css' },
			],
			default: 'sass',
		});

		const autoFix = await inquirer.confirm({
			message: '是否开启提交前自动修复',
			default: true,
		});

		let answers = {
			preprocessor,
			autoFix,
		};

		console.log('📋 选择的配置:', answers);

		// 复制配置文件
		await copyConfigFiles(answers);

		// 安装依赖
		await installDependencies(answers);

		// 初始化husky
		await initHusky(answers);

		console.log('🎉 代码规范初始化完成！');
	} catch (error) {
		console.error('❌ 初始化失败:', error.message);
		process.exit(1);
	}
}

// 启动
main();
