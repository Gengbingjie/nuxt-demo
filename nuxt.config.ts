// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $production : {
    routeRules : {
      '/**' : {isr : true}
    }
  },
  $development : {

  },
  runtimeConfig : {
    apiSecret : '123',
    public : {
      apiBase : '/api'
    }
  }
})
