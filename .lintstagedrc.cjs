module.exports = {
    // 对所有 JS/TS 文件执行 ESLint 检查并自动修复
    "src/**/*.{js,jsx,cjs,mjs,ts,tsx,vue}": ["eslint --fix", "eslint"],
    // 对所有 CSS/SCSS/LESS 文件执行 Stylelint 检查并自动修复
    "src/**/*.{css,scss,sass,less,html,vue}": ["stylelint --fix", "stylelint"],
    // 对所有文件执行 Prettier 格式化
    "src/**/*": ["prettier --write"]
};