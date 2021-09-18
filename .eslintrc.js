module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': ['off'],
    'consistent-return': ['off'],
    indent: [2, 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-len': [
      'error',
      {
        code: 90,
        ignoreComments: true,
        ignoreUrls: true,
      },
    ],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'react/jsx-curly-spacing': ['warn', {
      when: 'always',
      children: {
        when: 'always',
      },
    }],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
  },
};
