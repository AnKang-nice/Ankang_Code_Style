const fs = require('fs-extra');
const path = require('path');
const { parse, generate } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

// 配置文件映射关系
const configFilesMap = {
  // ESLint
  '.eslintrc.cjs': 'eslint/frameworks/{{framework}}.js',
  '.eslintignore': 'eslint/.eslintignore',

  // Stylelint
  '.stylelintrc.cjs': 'stylelint/{{stylelintConfig}}',
  '.stylelintignore': 'stylelint/.stylelintignore',

  // Prettier  yes
  '.prettierrc.cjs': 'prettier/index.js',
  '.prettierignore': 'prettier/.prettierignore',

  // Commitlint  yes
  'commitlint.config.cjs': 'commitlint/index.js',

  // Lint-staged   yes
  '.lintstagedrc.cjs': 'lint-staged/index.js',

  // Husky   yes
  '.husky/pre-commit': 'husky/pre-commit',
  '.husky/commit-msg': 'husky/commit-msg',

  // VS Code  yes
  '.vscode/settings.json': 'vscode/settings.json',
  '.vscode/extensions.json': 'vscode/extensions.json'
};

/**
 * 复制并合并配置文件
 * @param {Object} options 项目配置选项
 */
async function copyConfigFiles(options) {
  const { framework, preprocessor } = options;
  const projectRoot = process.cwd();
  const configRoot = path.resolve(__dirname, '../configs');

  console.log(`📁 项目根目录: ${projectRoot}`);
  console.log(`⚙️  配置目录: ${configRoot}`);
  console.log(`🔧 框架: ${framework}`);
  console.log(`🎨 预处理器: ${preprocessor}`);

  // 计算stylelint配置路径  todo
  const stylelintConfig = getStylelintConfigPath(framework, preprocessor);
  console.log(`🎯 Stylelint配置: ${stylelintConfig}`);

  // 处理所有配置文件
  for (const [targetPath, templatePath] of Object.entries(configFilesMap)) {
    try {
      // 替换模板变量
      const resolvedTemplatePath = templatePath
        .replace('{{framework}}', framework)
        .replace('{{stylelintConfig}}', stylelintConfig);

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
        // 合并已有配置
        console.log(`   🔄 合并已有配置`);
        await mergeConfig(destPath, sourcePath, targetPath);
      } else {
        // 复制新配置
        console.log(`   ✨ 复制新配置`);
        await fs.copy(sourcePath, destPath);

        // 给husky钩子添加执行权限
        if (targetPath.startsWith('.husky/')) {
          await fs.chmod(destPath, 0o755);
          console.log(`   🔐 设置执行权限: ${destPath}`);
        }
      }

      console.log(`   ✅ 完成: ${targetPath}`);
    } catch (error) {
      console.error(`   ❌ 处理失败: ${targetPath}`, error.message);
      throw error;
    }
  }

  console.log('\n🎉 所有配置文件处理完成！');
}

/**
 * 计算stylelint配置路径
 * vue-less   vue-sass
 * react-less  react-sass
 */
function getStylelintConfigPath(framework, preprocessor) {
  if (framework === 'vue') {
    return `frameworks/vue-${preprocessor}.js`;
  }
  if (framework === 'react') {
    return `frameworks/react-${preprocessor}.js`;
  }
  return 'base.js';
}

/**
 * 合并配置文件
 */
async function mergeConfig(projectConfigPath, builtInConfigPath, fileName) {
  try {
    const projectContent = await fs.readFile(projectConfigPath, 'utf8');
    const builtInContent = await fs.readFile(builtInConfigPath, 'utf8');

    switch (fileName) {
      case '.eslintrc.js':
      case '.stylelintrc.js':
      case '.lintstagedrc.js':
      case 'commitlint.config.js':
        // 处理JS配置文件
        const mergedContent = mergeJsConfig(projectContent, builtInConfigPath);
        await fs.writeFile(projectConfigPath, mergedContent);
        break;

      case '.vscode/settings.json':
        // 处理JSON配置文件
        const projectJson = JSON.parse(projectContent);
        const builtInJson = JSON.parse(builtInContent);
        const mergedJson = { ...builtInJson, ...projectJson };
        await fs.writeFile(projectConfigPath, JSON.stringify(mergedJson, null, 2) + '\n');
        break;

      default:
        // 忽略文件不合并
        console.log(`   ℹ️  保留已有配置: ${fileName}`);
    }
  } catch (error) {
    console.error(`   ❌ 合并配置失败: ${fileName}`, error.message);
    throw error;
  }
}

/**
 * 合并JS配置文件
 */
function mergeJsConfig(projectContent, builtInConfigPath) {
  try {
    const ast = parse(projectContent, { sourceType: 'module' });
    let projectConfigNode = null;

    // 解析项目配置
    traverse(ast, {
      AssignmentExpression(path) {
        if (
          path.node.left.type === 'MemberExpression' &&
          path.node.left.object.name === 'module' &&
          path.node.left.property.name === 'exports'
        ) {
          projectConfigNode = path.node.right;
        }
      }
    });

    if (!projectConfigNode) {
      throw new Error('无法解析项目配置文件中的 module.exports');
    }

    // 计算相对路径
    const relativePath = path.relative(
      path.dirname(process.cwd()),
      builtInConfigPath
    ).replace(/\\/g, '/');

    // 生成合并后的配置
    return `module.exports = {
  ...require('${relativePath}'),
  ...${generate(projectConfigNode).code}
};`;
  } catch (error) {
    console.error(`   ❌ 解析JS配置失败:`, error.message);
    throw error;
  }
}

module.exports = { copyConfigFiles };
