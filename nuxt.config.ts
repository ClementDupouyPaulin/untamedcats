// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
  modules: [
    // '@nuxtjs/i18n'
    '@sidebase/nuxt-pdf'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      charset: 'utf-8',
      title: 'Untamed Cats'
    }
  }
})