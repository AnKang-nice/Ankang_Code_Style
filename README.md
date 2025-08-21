# Project Code Rule - 前端代码规范包

[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D16.0.0-brightgreen.svg)](https://nodejs.org/)
[![Package Manager](https://img.shields.io/badge/package%20manager-pnpm-orange.svg)](https://pnpm.io/)

一个用于快速初始化前端项目代码规范的工具包，支持多种CSS预处理器，提供完整的代码质量保障体系。

## 🚀 特性

- **一键初始化** - 通过命令行工具快速配置项目代码规范
- **多预处理器支持** - 支持 Sass/SCSS、Less、Stylus 和纯 CSS
- **完整工具链** - 集成 ESLint、Stylelint、Prettier、Husky、Commitlint 等工具
- **团队规范统一** - 强制应用团队代码规范，确保代码质量一致性
- **自动化流程** - 支持提交前自动修复和代码检查
- **智能配置继承** - 自动处理现有配置文件的继承关系
- **VS Code 集成** - 提供完整的编辑器配置和扩展推荐

## 📦 包含的工具

| 工具            | 版本     | 作用                               |
| --------------- | -------- | ---------------------------------- |
| **ESLint**      | ^8.57.0  | JavaScript/TypeScript 代码质量检查 |
| **Stylelint**   | ^16.12.0 | CSS/SCSS/Less/Stylus 代码规范检查  |
| **Prettier**    | ^3.4.2   | 代码格式化工具                     |
| **Husky**       | ^9.1.7   | Git hooks 管理                     |
| **Commitlint**  | ^19.6.1  | Git 提交信息规范检查               |
| **Lint-staged** | ^15.3.0  | 暂存文件检查                       |

## 🛠️ 安装

### 全局安装（推荐）

```bash
npm install -g project-code-rule
# 或
pnpm add -g project-code-rule
```

### 本地安装

```bash
npm install --save-dev project-code-rule
# 或
pnpm add -D project-code-rule
```

## 🎯 使用方法

### 1. 初始化项目代码规范

在项目根目录下运行：

```bash
# 全局安装后
init-code-style

# 本地安装后
npx init-code-style
```

### 2. 交互式配置

工具会引导您完成以下配置：

- **CSS预处理器选择**：Sass/SCSS、Less、Stylus 或纯 CSS
- **自动修复选项**：是否开启提交前自动修复

### 3. 自动完成

工具会自动完成以下操作：

- 复制所有配置文件到项目根目录
- 根据预处理器选择配置 Stylelint
- 设置正确的文件权限
- 应用团队统一的代码规范
- 智能处理现有配置文件的继承关系

## 📁 项目结构

```
project-code-rule/
├── bin/                    # 命令行工具
│   └── init.js            # 主入口文件
├── baseConfig/            # 基础配置文件
│   ├── .eslintrc.base.cjs # ESLint 基础配置
│   └── .stylelintrc.base.cjs # Stylelint 基础配置
├── configs/               # 配置文件模板
│   ├── eslint/           # ESLint 配置
│   │   └── base.js       # 基础 ESLint 规则
│   ├── stylelint/        # Stylelint 配置
│   │   ├── base.js       # 基础 Stylelint 规则
│   │   └── prerocessors/ # 预处理器特定配置
│   │       ├── sass.js   # Sass/SCSS 配置
│   │       ├── less.js   # Less 配置
│   │       └── stylus.js # Stylus 配置
│   ├── prettier/         # Prettier 配置
│   │   └── index.js      # 格式化规则配置
│   ├── commitlint/       # Commitlint 配置
│   │   └── index.js      # 提交信息规范
│   ├── lint-staged/      # Lint-staged 配置
│   │   └── index.js      # 暂存文件检查规则
│   ├── husky/            # Husky 配置
│   │   ├── pre-commit    # 提交前钩子
│   │   └── commit-msg    # 提交信息钩子
│   └── vscode/           # VS Code 配置
│       ├── settings.json # 编辑器设置
│       └── extensions.json # 推荐扩展
├── scripts/               # 脚本文件
│   ├── copy-files.js     # 文件复制脚本
│   ├── install-deps.js   # 依赖安装脚本
│   └── init-husky.js     # Husky 初始化脚本
└── package.json          # 项目配置
```

## ⚙️ 配置说明

### ESLint 配置

- 基于 `eslint:recommended` 推荐规则
- 集成 `eslint-config-prettier` 避免与 Prettier 冲突
- 支持现代 JavaScript 特性 (ES2020)
- 包含团队自定义规则：
    - 强制使用 `===` 和 `!==`
    - 禁止使用 `eval`、`alert` 等危险函数
    - 优先使用 `const` 和箭头函数
    - 智能处理未使用变量

### Stylelint 配置

- 支持多种 CSS 预处理器
- 基于 `stylelint-config-standard` 标准
- 预处理器特定配置：
    - **Sass/SCSS**: 继承 `stylelint-config-standard-scss`
    - **Less**: 支持 Less 特定语法和规则
    - **Stylus**: 支持 Stylus 语法特性
    - **纯 CSS**: 标准 CSS 规则

### Prettier 配置

- **缩进**: 4 空格，使用 Tab
- **引号**: 单引号字符串
- **换行**: 100 字符宽度
- **JSX**: 优化的 JSX 格式化
- **分号**: 语句末尾添加分号
- **逗号**: ES5 兼容的尾随逗号

### Git Hooks

- **pre-commit**:
    - 运行 lint-staged 检查暂存文件
    - 检测配置文件修改并提示确认
    - 自动修复代码格式问题
- **commit-msg**:
    - 验证提交信息格式
    - 基于 Conventional Commits 规范

### Lint-staged 配置

- **JavaScript/TypeScript**: ESLint 检查和自动修复
- **CSS/SCSS/Less**: Stylelint 检查和自动修复
- **所有文件**: Prettier 格式化

### VS Code 配置

- **自动格式化**: 保存时自动格式化
- **ESLint 集成**: 保存时自动修复 ESLint 问题
- **Stylelint 集成**: 支持多种 CSS 预处理器
- **推荐扩展**: 包含必要的代码质量工具

## 🔧 依赖要求

### 必需依赖 (Peer Dependencies)

```json
{
    "@commitlint/cli": "^19.6.1",
    "@commitlint/config-conventional": "^19.6.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^10.1.8",
    "husky": "^9.1.7",
    "lint-staged": "^15.3.0",
    "prettier": "^3.4.2",
    "stylelint": "^16.12.0",
    "stylelint-config-standard": "^39.0.0"
}
```

### 预处理器特定依赖

根据选择的预处理器，还需要安装：

```bash
# Sass/SCSS
npm install --save-dev stylelint-config-standard-scss postcss-scss

# Less
npm install --save-dev stylelint-config-standard

# Stylus
npm install --save-dev stylelint-config-standard
```

### 内部依赖

```json
{
    "@inquirer/prompts": "^7.8.3",
    "fs-extra": "^11.3.1"
}
```

## 🚀 快速开始

### 1. 创建新项目

```bash
mkdir my-project
cd my-project
npm init -y
```

### 2. 初始化代码规范

```bash
init-code-style
```

选择配置选项：

- CSS 预处理器: `Sass/SCSS` (推荐)
- 自动修复: `是`

### 3. 安装依赖

```bash
npm install
# 或
pnpm install
```

### 4. 开始开发

现在您的项目已经配置了完整的代码规范体系！

## 📝 工作流程

### 开发阶段

1. 编写代码，VS Code 自动格式化
2. 保存时自动修复 ESLint 问题
3. 实时显示代码质量提示

### 暂存阶段

1. 使用 `git add` 添加文件
2. 文件自动通过 lint-staged 检查

### 提交阶段

1. **pre-commit 钩子**:
    - 自动运行 ESLint 和 Stylelint 检查
    - 自动修复可修复的问题
    - 检测配置文件修改并提示确认
2. **commit-msg 钩子**:
    - 验证提交信息格式
    - 基于 Conventional Commits 规范

### 提交信息格式

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
# 功能新增
feat: 添加用户登录功能

# 问题修复
fix: 修复登录页面样式问题

# 文档更新
docs: 更新 README 文档

# 代码重构
refactor: 重构用户认证逻辑

# 性能优化
perf: 优化图片加载性能

# 测试相关
test: 添加用户登录测试用例

# 构建相关
build: 更新构建配置
```

## 🔍 故障排除

### 常见问题

**Q: 初始化后配置文件没有生效？**
A:

1. 确保已安装所有必需的依赖包
2. 重启 VS Code 编辑器
3. 检查 `node_modules` 是否正确安装

**Q: Husky hooks 不工作？**
A:

1. 检查 `.husky` 目录下的文件是否有执行权限
2. 运行 `npx husky install` 重新初始化
3. 确保 Git 仓库已正确初始化

**Q: 预处理器配置不正确？**
A:

1. 重新运行 `init-code-style` 并选择正确的预处理器
2. 检查是否安装了对应的预处理器依赖
3. 验证 Stylelint 配置文件路径

**Q: ESLint 和 Prettier 冲突？**
A:

1. 确保安装了 `eslint-config-prettier`
2. 检查 ESLint 配置中是否正确继承了 Prettier 配置
3. 重启编辑器

**Q: VS Code 扩展不工作？**
A:

1. 安装推荐的 VS Code 扩展
2. 检查工作区设置是否正确
3. 重启 VS Code

### 手动修复

如果自动初始化失败，可以手动复制配置文件：

```bash
# 复制配置文件
cp -r node_modules/project-code-rule/configs/* ./

# 设置执行权限
chmod +x .husky/*

# 重新安装依赖
npm install
```

### 调试模式

启用详细日志输出：

```bash
DEBUG=* init-code-style
```

## 🎨 自定义配置

### 修改 ESLint 规则

在项目根目录创建 `.eslintrc.cjs`：

```javascript
module.exports = {
    extends: [
        "./baseConfig/.eslintrc.base.cjs", // 继承基础配置
    ],
    rules: {
        // 自定义规则
        "no-console": "off", // 允许 console
        "prefer-const": "error", // 强制使用 const
    },
};
```

### 修改 Prettier 配置

在项目根目录创建 `.prettierrc.cjs`：

```javascript
module.exports = {
    ...require("./configs/prettier/index.js"), // 继承基础配置
    tabWidth: 2, // 自定义缩进
    printWidth: 80, // 自定义换行宽度
};
```

### 修改 Stylelint 配置

在项目根目录创建 `.stylelintrc.cjs`：

```javascript
module.exports = {
    extends: [
        "./baseConfig/.stylelintrc.base.cjs", // 继承基础配置
    ],
    rules: {
        // 自定义规则
        "color-hex-length": "short", // 使用短十六进制颜色
    },
};
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发环境设置

```bash
# 克隆项目
git clone https://github.com/AnKang-nice/project-code-rule.git
cd project-code-rule

# 安装依赖
npm install

# 链接到全局
npm link

# 测试命令
init-code-style
```

## 📄 许可证

ISC License

## 👨‍💻 作者

**Ankang** - [GitHub](https://github.com/AnKang-nice)

## 🙏 致谢

感谢以下开源项目的支持：

- [ESLint](https://eslint.org/) - JavaScript 代码质量工具
- [Stylelint](https://stylelint.io/) - CSS 代码规范检查
- [Prettier](https://prettier.io/) - 代码格式化工具
- [Husky](https://typicode.github.io/husky/) - Git hooks 管理
- [Commitlint](https://commitlint.js.org/) - 提交信息规范检查

---

⭐ 如果这个项目对您有帮助，请给它一个星标！
