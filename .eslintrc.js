module.exports = {
  env: {
    browser: false,
    commonjs: true,
    es6: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    // 每行最大属性数量控制
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: {
          max: 10,
          allowFirstLine: true,
        },
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // 关闭：强制自闭式标签
    'vue/html-self-closing': 'off',
    // 关闭：属性顺序
    'vue/attributes-order': 'off',
    // 关闭：属性强制执行特定大小写
    'vue/name-property-casing': 'off',

    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 箭头函数的箭头前后需要空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 在打开块之后和关闭块之前加空格
    'block-spacing': ['error', 'always'],
    // 大括号样式
    'brace-style': 0, // "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    // 不要尾随逗号
    'comma-dangle': [2, 'never'],
    // 逗号后面加空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 在数组元素、对象属性或变量声明之后和同一行上需要一个逗号
    'comma-style': [2, 'last'],
    // 强制缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 关键字前后加空格
    'keyword-spacing': ['error', { after: true }],
    // 禁止不必要的括号
    'no-extra-parens': [2, 'all'],
    // 禁止多个空格
    'no-multi-spaces': 2,
    // 禁止多个空行
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
      },
    ],
    // 禁止尾随空格
    'no-trailing-spaces': 2,
    // 禁止未定义的变量
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
      },
    ],
    // 禁止没必要的计算属性
    'no-useless-computed-key': 2,
    // 禁止在使用属性前加空格
    'no-whitespace-before-property': 2,
    // 注释前需要有空格
    'spaced-comment': ['error', 'always'],
    // 禁止在块内填充
    'padded-blocks': ['error', 'never'],
    // 强制分号
    semi: ['error', 'never'],
    // 强制分号后使用空格
    // "semi-spacing": ["error", {"before": false, "after": true}],
    // 强制块前空间
    'space-before-blocks': ['error', 'always'],
    // 强制函数括号前有空格
    'space-before-function-paren': ['error', 'always'],
    // 强制括号内不要空格
    'space-in-parens': ['error', 'never'],
    // 强制在运算符周围有空格
    'space-infix-ops': 'error',
    // 强制一元单词运算符有空格
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
      },
    ],
    // 比较NaN时 需要调用isNaN()
    'use-isnan': 'error',
    // 大括号内强制保持一致的间距
    'object-curly-spacing': [
      'error',
      'always',
      {
        objectsInObjects: false,
      },
    ],
    // 数组括号间距
    'array-bracket-spacing': [2, 'never'],
  },
};
