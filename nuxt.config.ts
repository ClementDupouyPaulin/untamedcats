export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.css',
    '~/assets/css/style.css'
  ],
  modules: [
    'nuxt-icon',
    // '@nuxtjs/i18n'
    '@sidebase/nuxt-pdf'
  ],
  plugins: [
    '~/plugins/fontawesome.ts',
    '~/plugins/api.ts'
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      title: 'Untamed Cats'
    }
  },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'source-map';
      }
    }
  },
})
