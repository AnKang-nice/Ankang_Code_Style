#!/usr/bin/env node
const inquirer = require('@inquirer/prompts');

const { copyConfigFiles } = require('../scripts/copy-files');
const { installDependencies } = require('../scripts/install-deps');
const { initHusky } = require('../scripts/init-husky');

// 命令行交互问题

// 主流程
async function main() {
	try {
		console.log('🚀 开始初始化前端代码规范...');

		// 获取用户配置
		const framework = await inquirer.select({
			message: '请选择项目框架',
			choices: ['react', 'vue'],
			default: 'vue',
		});
		const preprocessor = await inquirer.select({
			message: '请选择CSS预处理器',
			choices: ['sass', 'less'],
			default: 'sass',
		});

		const autoFix = await inquirer.confirm({
			message: '是否开启提交前自动修复',
			default: true,
		});

		let answers = {
			framework,
			preprocessor,
			autoFix,
		};
		console.log(answers);

		// // 复制配置文件
		await copyConfigFiles(answers);

		// // 安装依赖
		await installDependencies(answers);

		// // 初始化husky
		await initHusky(answers);

		console.log('🎉 代码规范初始化完成！');
	} catch (error) {
		console.error('❌ 初始化失败:', error.message);
		process.exit(1);
	}
}

// 启动
main();
