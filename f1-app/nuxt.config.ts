// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  targert: "static",
  ssr: false,
  modules: ['@nuxtjs/tailwindcss'],
  
  typescript: {
    typeCheck: true,
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ],

  // modules: [
  //   ['@nuxtjs/tailwindcss'],
  //   [
  //     '@nuxtjs/firebase',
  //     {
  //       config: {
  //         apiKey: '<apiKey>',
  //         authDomain: '<authDomain>',
  //         projectId: '<projectId>',
  //         storageBucket: '<storageBucket>',
  //         messagingSenderId: '<messagingSenderId>',
  //         appId: '<appId>',
  //         measurementId: '<measurementId>'
  //       },
  //       services: {
  //         auth: true // Just as example. Can be any other service.
  //       }
  //     }
  //   ], 
  // ]
})
