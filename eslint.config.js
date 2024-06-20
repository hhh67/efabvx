import pluginTypeScript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import reactConfigRecommended from 'eslint-plugin-react/configs/recommended.js';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  {
    ignores: ['./dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
    },
    rules: {
      ...pluginTypeScript.configs['eslint-recommended'].rules,
      ...pluginTypeScript.configs['recommended'].rules,
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {},
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      import: pluginImport,
    },
    rules: {
      ...pluginImport.configs['recommended'].rules,
      ...reactConfigRecommended.rules,
      ...pluginPrettier.rules,
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/no-unresolved': 'off',
      'no-unused-vars': 'off',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          pathGroups: [
            {
              pattern: '{react,react-dom/**,react-router-dom}',
              group: 'builtin',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'never',
        },
      ],
    },
  },
];
