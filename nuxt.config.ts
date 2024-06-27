export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/style.css'],
  modules: [
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
  },
  nitro: {
    preset: 'node-server' 
  },
  server: {
    port: 5000 // Définir le port sur 5000
  }
});
