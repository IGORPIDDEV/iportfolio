// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'motion-v/nuxt',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],
  // alias: 
    // {
    //   "~": "/<srcDir>",
    //   "@": "/<srcDir>",
    //   "~~": "/<rootDir>",
    //   "@@": "/<rootDir>",
    //   "#shared": "/<rootDir>/shared",
    //   "assets": "/<srcDir>/assets",
    //   "public": "/<srcDir>/public",
    //   "#build": "/<rootDir>/.nuxt",
    //   "#internal/nuxt/paths": "/<rootDir>/.nuxt/paths.mjs"
    // }
})

// function defineNuxtConfig(arg0: { compatibilityDate: string; devtools: { enabled: boolean; }; modules: string[]; alias: { "~": string; "@": string; "~~": string; "@@": string; "#shared": string; assets: string; public: string; "#build": string; "#internal/nuxt/paths": string; }; }) {
//   throw new Error("Function not implemented.");
// }
