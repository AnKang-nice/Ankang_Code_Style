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

## 📦 包含的工具

| 工具 | 版本 | 作用 |
|------|------|------|
| **ESLint** | ^8.57.0 | JavaScript/TypeScript 代码质量检查 |
| **Stylelint** | ^16.12.0 | CSS/SCSS/Less/Stylus 代码规范检查 |
| **Prettier** | ^3.4.2 | 代码格式化工具 |
| **Husky** | ^9.1.7 | Git hooks 管理 |
| **Commitlint** | ^19.6.1 | Git 提交信息规范检查 |
| **Lint-staged** | ^15.3.0 | 暂存文件检查 |

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

- 复制所有配置文件到项目根目录(eslint、stylelint特殊处理，需要继承baseConfig下的配置文件)
- 设置正确的文件权限
- 应用团队统一的代码规范

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
│   ├── stylelint/        # Stylelint 配置
│   │   └── prerocessors/ # 预处理器特定配置
│   ├── prettier/         # Prettier 配置
│   ├── commitlint/       # Commitlint 配置
│   ├── lint-staged/      # Lint-staged 配置
│   ├── husky/            # Husky 配置
│   └── vscode/           # VS Code 配置
├── scripts/               # 脚本文件
│   ├── copy-files.js     # 文件复制脚本
│   ├── install-deps.js   # 依赖安装脚本
│   └── init-husky.js     # Husky 初始化脚本
└── package.json          # 项目配置
```

## ⚙️ 配置说明

### ESLint 配置
- 基于 `@babel/eslint-parser`
- 集成 `eslint-config-prettier` 避免与 Prettier 冲突
- 支持现代 JavaScript 特性

### Stylelint 配置
- 支持多种 CSS 预处理器
- 基于 `stylelint-config-standard` 标准
- 自动适配预处理器语法

### Prettier 配置
- 4 空格缩进，使用 Tab
- 单引号字符串
- 100 字符换行宽度
- 优化的 JSX 格式化

### Git Hooks
- **pre-commit**: 提交前代码检查
- **commit-msg**: 提交信息格式验证

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

### 3. 安装依赖

```bash
npm install
# 或
pnpm install
```

### 4. 开始开发

现在您的项目已经配置了完整的代码规范体系！

## 📝 工作流程

1. **开发阶段**: 编写代码，工具会自动格式化
2. **暂存阶段**: 使用 `git add` 添加文件
3. **提交阶段**: 
   - 自动运行 ESLint 和 Stylelint 检查
   - 验证提交信息格式
   - 如有错误，阻止提交

## 🔍 故障排除

### 常见问题

**Q: 初始化后配置文件没有生效？**
A: 确保已安装所有必需的依赖包，并重启编辑器。

**Q: Husky hooks 不工作？**
A: 检查 `.husky` 目录下的文件是否有执行权限。

**Q: 预处理器配置不正确？**
A: 重新运行 `init-code-style` 并选择正确的预处理器。

### 手动修复

如果自动初始化失败，可以手动复制配置文件：

```bash
cp -r node_modules/project-code-rule/configs/* ./
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC License

## 👨‍💻 作者

**Ankang** - [GitHub](https://github.com/AnKang-nice)

---

⭐ 如果这个项目对您有帮助，请给它一个星标！
