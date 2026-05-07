export default defineNuxtConfig({
  compatibilityDate: '2026-05-06',
  ssr: false,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant',
      },
      title: 'Cat Tactical Airsoft',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Cat Tactical Airsoft 是 Airsoft 裝備選購、門市諮詢、維修升級與訓練體驗的戰術運動用品網站。',
        },
      ],
    },
  },
  vite: {
    server: {
      host: '127.0.0.1',
    },
  },
});
