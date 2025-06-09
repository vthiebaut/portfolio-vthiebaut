// eslint.config.js
import eslintPluginVue from 'eslint-plugin-vue'
import eslintPluginPrettier from 'eslint-plugin-prettier'
import parserTypeScript from '@typescript-eslint/parser'
import pluginTypeScript from '@typescript-eslint/eslint-plugin'
import vueParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: parserTypeScript,
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      vue: eslintPluginVue,
      prettier: eslintPluginPrettier
    },
    rules: {
      ...eslintPluginVue.configs.recommended.rules,
      'prettier/prettier': 'error',
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': pluginTypeScript,
      prettier: eslintPluginPrettier
    },
    rules: {
      'prettier/prettier': 'error'
    }
  }
]
