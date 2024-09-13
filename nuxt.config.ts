export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    // Simple usage
    '@nuxtjs/eslint-module',
  ],
  eslint: {
    lintOnStart: false, // 시작 시 linting 비활성화
    /* 다른 모듈 옵션 */
  }
})