// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'motion-v/nuxt', '@nuxtjs/seo', '@nuxt/image'],
  alias: 
    {
      "~": "/<srcDir>",
      "@": "/<srcDir>",
      "~~": "/<rootDir>",
      "@@": "/<rootDir>",
      "#shared": "/<rootDir>/shared",
      "assets": "/<srcDir>/assets",
      "public": "/<srcDir>/public",
      "#build": "/<rootDir>/.nuxt",
      "#internal/nuxt/paths": "/<rootDir>/.nuxt/paths.mjs"
    }
})