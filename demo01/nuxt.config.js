export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'demo02',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //引入全局css
    '@/static/reset',
    'element-ui/lib/theme-chalk/index.css'
  ],
  // loading: false,
  // loading: {
  //   color: 'blue',
  //   height: '10px'
  // },
  loading: '~/components/loading.vue',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // '~/plugins/router.js'
    '~/plugins/element.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // 使用router.js创建自定义路由
    // '@nuxtjs/router',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router:{
    middleware: 'auth'
  }
}
