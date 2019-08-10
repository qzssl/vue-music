// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  rules: {
    // 箭头函数用小括号括起来
    'arrow-parens': 0,
    // 生成器函数*的前后空格
    'generator-star-spacing': 0,
    // 2-禁止使用debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 文件以单一的换行符结束
    'eol-last': 0,
    // 函数定义时括号前面要不要有空格
    'space-before-function-paren': 0,
    //不校验缩进
    indent: 'off',
    /**
     * 配置标签是否自我关闭
     * 在Vue.js模板中，我们可以为没有内容的元素使用两种样式：
     *    <YourComponent></YourComponent>
     *    <YourComponent/> （自闭，但HTML规范不支持。）
     */
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'never', //众所周知的HTML void元素的样式，never不允许自我关闭
          normal: 'any', //除void元素之外的众所周知的HTML元素的样式
          component: 'any' //Vue.js自定义组件的样式,any不要强制自我封闭的风格
        },
        svg: 'always', //要求在没有内容的元素上自我关闭
        math: 'always'
      }
    ],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  }
}
