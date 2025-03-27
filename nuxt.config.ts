// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    { path: '~/components', extensions: ['vue'], pathPrefix: false },
    { path: '~/components/sections', global: true },
    { path: '~/components/ui', global: true },
  ],
  modules: ['@nuxtjs/tailwindcss', 'motion-v/nuxt', '@nuxtjs/seo', '@nuxt/image'],
})
