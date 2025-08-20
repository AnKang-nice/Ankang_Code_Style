const fs = require("fs-extra");
const path = require("path");
const json5 = require("json5");

// 配置文件映射关系
const configFilesMap = {
    // ESLint - 基础配置
    "baseConfig/.eslintrc.base.cjs": "eslint/base.js",
    ".eslintignore": "eslint/.eslintignore",

    // Stylelint - 根据预编译语言选择
    "baseConfig/.stylelintrc.base.cjs": "stylelint/{{stylelintConfig}}",
    ".stylelintignore": "stylelint/.stylelintignore",

    // Prettier
    ".prettierrc.cjs": "prettier/index.js",
    ".prettierignore": "prettier/.prettierignore",

    // Commitlint
    "commitlint.config.cjs": "commitlint/index.js",

    // Lint-staged
    ".lintstagedrc.cjs": "lint-staged/index.js",

    // Husky
    ".husky/pre-commit": "husky/pre-commit",
    ".husky/commit-msg": "husky/commit-msg",

    // VS Code
    ".vscode/settings.json": "vscode/settings.json",
    ".vscode/extensions.json": "vscode/extensions.json",
};

/**
 * 复制并强制覆盖配置文件
 * @param {Object} options 项目配置选项
 */
async function copyConfigFiles(options) {
    const { preprocessor } = options;
    const projectRoot = process.cwd();
    const configRoot = path.resolve(__dirname, "../configs");

    console.log(`📁 项目根目录: ${projectRoot}`);
    console.log(`⚙️  配置目录: ${configRoot}`);
    console.log(`🎨 预处理器: ${preprocessor}`);

    // 计算stylelint配置路径
    const stylelintConfig = getStylelintConfigPath(preprocessor);
    console.log(`🎯 Stylelint配置: ${stylelintConfig}`);

    // 处理所有配置文件
    for (const [targetPath, templatePath] of Object.entries(configFilesMap)) {
        try {
            // 替换模板变量
            const resolvedTemplatePath = templatePath.replace(
                "{{stylelintConfig}}",
                stylelintConfig
            );

            const sourcePath = path.join(configRoot, resolvedTemplatePath);
            const destPath = path.join(projectRoot, targetPath);

            console.log(`\n📋 处理配置文件: ${targetPath}`);
            console.log(`   📤 源文件: ${sourcePath}`);
            console.log(`   📥 目标文件: ${destPath}`);

            // 检查源文件是否存在
            if (!(await fs.pathExists(sourcePath))) {
                console.log(`   ⚠️  源文件不存在，跳过: ${sourcePath}`);
                continue;
            }

            // 确保目标目录存在
            await fs.ensureDir(path.dirname(destPath));

            if (await fs.pathExists(destPath)) {
                // 强制覆盖已有配置，确保团队规范一致性
                console.log(`   🔄 强制覆盖已有配置，使用团队规范`);
                await fs.copy(sourcePath, destPath);
            } else {
                // 复制新配置
                console.log(`   ✨ 复制新配置`);
                await fs.copy(sourcePath, destPath);
            }

            // 给husky钩子添加执行权限
            if (targetPath.startsWith(".husky/")) {
                await fs.chmod(destPath, 0o755);
                console.log(`   🔐 设置执行权限: ${destPath}`);
            }

            console.log(`   ✅ 完成: ${targetPath}`);
        } catch (error) {
            console.error(`   ❌ 处理失败: ${targetPath}`, error.message);
            throw error;
        }
    }

    console.log("\n🎉 所有配置文件处理完成！");
    console.log("💪 团队代码规范已强制应用！");
}

/**
 * 计算stylelint配置路径
 * 根据预编译语言选择对应的配置
 */
function getStylelintConfigPath(preprocessor) {
    switch (preprocessor) {
        case "less":
            return "prerocessors/less.js";
        case "sass":
        case "scss":
            return "prerocessors/sass.js";
        case "stylus":
            return "prerocessors/stylus.js";
        case "css":
        default:
            return "base.js";
    }
}

module.exports = { copyConfigFiles };
