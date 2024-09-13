// eslint.config.cjs
const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig([
  {
    ignores: ['node_modules/**'],
  },
  {
    files: [
      '**/*.js', 
      '**/*.ts',
      '**/*.vue'
    ],
    languageOptions: {
    ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      vue: require('eslint-plugin-vue'),
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      // 기본 규칙
      'indent': [2, 2],                      // 들여쓰기 2칸
      'semi': 2,                             // 세미콜론 필수
      'no-extra-semi': 1,                    // 불필요한 세미콜론 경고
      'semi-spacing': 0,                     // 세미콜론 주변 공백 필수
      'no-unused-vars': 'off',               // 미사용 변수 경고 off
      'no-alert': 'error',                   // alert 사용 금지
  
      // 에디터 설정
      'prettier/prettier': [ 'off', {}, { usePrettierrc: false }, ],                                            // prettier 사용
  
      // 글로벌 변수
      'no-restricted-globals': ['error', 'window', 'document', 'navigator'],                                    // 글로벌 변수 사용 금지
  
      // import
      'node/no-missing-import': 'off',                                                                          // import 경로 오류 경고 off
      // 'node/no-unsupported-features/es-syntax': ['error', { 'version': '>=13.0.0', 'ignores': ['modules'] }],   // import 사용 가능한 버전
      // 'import/extensions': [ 'error', { 'js': 'ignorePackages' } ],                                             // import 확장자 생략 가능
  
      // vue
      'vue/multi-word-component-names': 0,       
    },
  },
]);