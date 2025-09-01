# 🚀 Project Code Rule - 前端代码规范配置包

一个开箱即用的前端代码规范配置包，为您的项目提供完整的代码质量工具链配置。

## ✨ 特性

- 🎯 **一键初始化** - 通过交互式命令行快速配置项目代码规范
- 🔧 **完整工具链** - 集成 ESLint、Stylelint、Prettier、Husky、Commitlint 等工具
- 🎨 **多预处理器支持** - 支持 Sass/SCSS、Less、纯 CSS 等预处理器
- 🚫 **Git 钩子集成** - 自动配置提交前代码检查和格式化
- 📝 **标准化提交** - 遵循 Conventional Commits 规范的提交信息检查
- 🎨 **VS Code 配置** - 提供编辑器配置和推荐扩展
- 🔄 **智能继承** - 支持项目现有配置的智能继承和合并

## 🛠️ 包含的工具

| 工具            | 版本     | 用途                               |
| --------------- | -------- | ---------------------------------- |
| **ESLint**      | ^8.57.0  | JavaScript/TypeScript 代码质量检查 |
| **Stylelint**   | ^16.12.0 | CSS/SCSS/Less 代码质量检查         |
| **Prettier**    | ^3.4.2   | 代码格式化                         |
| **Husky**       | ^9.1.7   | Git 钩子管理                       |
| **Lint-staged** | ^15.3.0  | 暂存文件检查                       |
| **Commitlint**  | ^19.6.1  | 提交信息规范检查                   |

## 📦 安装

```bash
# 使用 npm
npm install -D project-code-rule

# 使用 yarn
yarn add -D project-code-rule

# 使用 pnpm (推荐)
pnpm add -D project-code-rule
```

## 🚀 快速开始

### 1. 初始化项目代码规范

```bash
# 使用 npx
npx init-code-style

# 或使用 pnpm
pnpm exec init-code-style
```

### 2. 选择配置选项

初始化过程中，您需要选择：

- **CSS 预处理器**: Sass/SCSS、Less 或无预处理器
- **自动修复**: 是否开启提交前自动修复

### 3. 自动配置完成

工具会自动：

- 复制所有配置文件到项目根目录
- 安装必要的依赖包
- 配置 Husky Git 钩子
- 设置 VS Code 工作区配置

## 📁 项目结构

```
project-code-rule/
├── bin/                    # 可执行脚本
│   └── init.js            # 主初始化脚本
├── scripts/                # 核心脚本
│   ├── copy-files.js      # 配置文件复制
│   ├── install-deps.js    # 依赖安装
│   └── init-husky.js      # Husky 初始化
├── configs/                # 配置文件模板
│   ├── eslint/            # ESLint 配置
│   │   ├── base.js        # 基础配置
│   │   └── .eslintignore  # 忽略文件配置
│   ├── stylelint/         # Stylelint 配置
│   │   ├── base.js        # 基础配置
│   │   ├── prerocessors/  # 预处理器配置
│   │   │   ├── sass.js    # Sass/SCSS 配置
│   │   │   └── less.js    # Less 配置
│   │   └── .stylelintignore
│   ├── prettier/          # Prettier 配置
│   │   ├── index.js       # 格式化规则
│   │   └── .prettierignore
│   ├── commitlint/        # Commitlint 配置
│   │   └── index.js       # 提交规范配置
│   ├── lint-staged/       # Lint-staged 配置
│   │   └── index.js       # 暂存文件检查配置
│   ├── husky/             # Husky 钩子配置
│   │   ├── pre-commit     # 提交前钩子
│   │   └── commit-msg     # 提交信息钩子
│   └── vscode/            # VS Code 配置
│       ├── settings.json  # 工作区设置
│       └── extensions.json # 推荐扩展
└── package.json           # 包配置信息
```

## ⚙️ 配置详情

### ESLint 配置

- 继承 `eslint:recommended` 和 `prettier` 配置
- 支持 ES2020 语法
- 包含代码质量、安全性和最佳实践规则
- 自动忽略 `node_modules` 和构建文件

### Stylelint 配置

- 继承官方标准规则
- 支持 Sass/SCSS、Less 等预处理器
- 禁止使用 ID 选择器，推荐类选择器
- 支持 CSS 变量和现代特性

### Prettier 配置

- 使用 Tab 缩进（4 空格宽度）
- 单引号字符串
- 语句末尾添加分号
- 100 字符换行宽度
- 支持多种文件类型格式化

### Git 钩子配置

- **pre-commit**: 提交前自动运行代码检查和格式化
- **commit-msg**: 检查提交信息是否符合规范

### VS Code 配置

- 自动格式化保存
- ESLint 和 Stylelint 实时检查
- 推荐安装的扩展插件
- 统一的编辑器设置

## 🔧 自定义配置

### 继承基础配置

如果您的项目已有配置文件，工具会智能处理：

```javascript
// .eslintrc.cjs
module.exports = {
    extends: [
        "./baseConfig/.eslintrc.base.cjs", // 继承基础配置
        // 您的其他配置...
    ],
    // 项目特定规则...
};
```

### 修改规则

您可以在项目根目录的配置文件中覆盖默认规则：

```javascript
// .eslintrc.cjs
module.exports = {
    extends: ["./baseConfig/.eslintrc.base.cjs"],
    rules: {
        "no-console": "off", // 关闭 console 警告
        // 其他自定义规则...
    },
};
```

## 📋 支持的预处理器

### Sass/SCSS

- 继承 `stylelint-config-standard-scss`
- 支持 SCSS 语法特性
- 允许 `$` 变量名和 `@import` 语法

### Less

- 继承 `stylelint-config-standard-less`
- 支持 Less 语法特性
- 完整的 Less 规则支持

### 纯 CSS

- 继承 `stylelint-config-standard`
- 标准 CSS 规则检查
- 现代 CSS 特性支持

## 🚀 工作流程

1. **开发阶段**: 编写代码，编辑器自动格式化和检查
2. **暂存阶段**: 使用 `git add` 添加文件到暂存区
3. **提交阶段**:
    - 自动运行 ESLint 检查
    - 自动运行 Stylelint 检查
    - 自动运行 Prettier 格式化
    - 检查提交信息格式
4. **推送阶段**: 代码已通过所有质量检查

## 📝 提交信息规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
type(scope): description

feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 代码格式调整
refactor: 代码重构
test: 添加测试
chore: 构建过程或辅助工具的变动
```

## 🔍 故障排除

### 常见问题

1. **权限错误**: 确保 Husky 钩子有执行权限
2. **依赖冲突**: 检查 `peerDependencies` 版本兼容性
3. **配置不生效**: 重启 VS Code 或重新加载窗口

### 手动修复

```bash
# 重新安装依赖
pnpm install

# 重新初始化 Husky
pnpm exec husky init

# 手动设置钩子权限
chmod +x .husky/pre-commit
chmod +x .husky/commit-msg
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC License

## 👨‍💻 作者

**Ankang** - [GitHub](https://github.com/AnKang-nice)

---

⭐ 如果这个项目对您有帮助，请给它一个星标！
