import jsxA11y from 'eslint-plugin-jsx-a11y';
import typescriptEslintParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    ignores: [
        'node_modules/**',
        'dist/**',
        'build/**',
        '.turbo/**',
        'coverage/**'
      ],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    
    plugins: {
      'jsx-a11y': jsxA11y
    },
    
    rules: {
      ...jsxA11y.configs.recommended.rules,
      
    }
  }
];