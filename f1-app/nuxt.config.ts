// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  targert: "static",
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true,
  },
})
