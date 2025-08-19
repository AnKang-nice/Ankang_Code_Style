module.exports = {
    // --------------------------
    // 基本格式化规则
    // --------------------------

    // 缩进空格数（默认 2）
    tabWidth: 4,

    // 是否使用制表符（tab）缩进（默认 false，即使用空格）
    useTabs: true,

    // 语句末尾是否添加分号（默认 true）
    semi: true,

    // 字符串使用单引号还是双引号（默认 false 即双引号）
    singleQuote: true,

    // 对象属性是否使用引号（默认 'as-needed'：仅在必要时使用）
    // 可选值：'as-needed' | 'consistent' | 'preserve'
    quoteProps: 'as-needed',

    // JSX 中使用单引号（默认 false）
    jsxSingleQuote: true,

    // 多行时是否在最后一个元素后添加逗号（默认 'es5'）
    // 可选值：'es5'（对象/数组添加） | 'none' | 'all'（包括函数参数）
    trailingComma: 'es5',

    // 是否在括号间插入空格（默认 true）
    // 例：{ foo: bar } 而非 {foo: bar}
    bracketSpacing: true,

    // JSX 标签多行写法时，是否将 > 单独放一行（默认 false）
    // false: <div
    //          className="foo"
    //        >
    // true:  <div
    //          className="foo"
    //        >
    jsxBracketSameLine: true,

    // 箭头函数参数是否添加括号（默认 'always'）
    // 可选值：'always'（(x) => x） | 'avoid'（x => x，单个参数时省略）
    arrowParens: 'always',

    // --------------------------
    // 换行与长度控制
    // --------------------------

    // 换行的字符宽度（默认 80）
    printWidth: 100,

    // 换行符类型（默认 'lf'）
    // 可选值：'lf' | 'crlf' | 'cr' | 'auto'
    endOfLine: 'lf',

    // HTML 空白区域是否保留（默认 'css'）
    // 'css'：遵循 CSS 的 white-space 属性
    // 'strict'：所有空白都被认为是有意义的
    htmlWhitespaceSensitivity: 'css',

    // Vue 单文件组件中，<script> 和 <style> 标签内的缩进是否与 <template> 同步（默认 false）
    vueIndentScriptAndStyle: false,

    // --------------------------
    // 特殊文件处理
    // --------------------------

    // 是否格式化嵌入在 HTML 中的代码（默认 true）
    embeddedLanguageFormatting: 'auto',

    // 对于 Markdown 中的代码块，是否只格式化能识别的语言（默认 true）
    // false 会尝试格式化所有代码块，可能导致错误
    proseWrap: 'preserve',

    // 解析器配置（一般不需要手动设置，Prettier 会自动识别文件类型）
    // parser: 'babel', // 例如：强制使用 babel 解析器

    // 插件配置（如需扩展 Prettier 功能）
    // plugins: ['prettier-plugin-tailwindcss']
};
