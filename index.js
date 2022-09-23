module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier'],
  root: true,
  rules: {
    'import/order': [
      2,
      {
        groups: ['external', 'internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    'react/jsx-sort-props': 2,
    'prettier/prettier': [
      2,
      {
        semi: false,
        singleAttributePerLine: true,
        singleQuote: true,
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        project: './tsconfig.json',
      },
    },
  },
}
