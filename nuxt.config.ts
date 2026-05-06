export default defineNuxtConfig({
  compatibilityDate: '2026-05-06',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
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
            'Cat Tactical Airsoft 提供 Airsoft 裝備、商品諮詢、門市體驗與戰術訓練服務。',
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
