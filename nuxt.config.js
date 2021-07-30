export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '3 in 2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'Use this clock to pretend there are 72 hours in 48 or 3 days in 2. Sneak an extra day into your life. Use it wisely.' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-plausible'
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: '3 in 2',
      short_name: '3 in 2',
      description: 'Use this clock to pretend there are 72 hours in 48 or 3 days in 2. Sneak an extra day into your life. Use it wisely.',
    },
    meta: {
      name: '3 in 2',
      author: 'Till Sanders',
      description: 'Use this clock to pretend there are 72 hours in 48 or 3 days in 2. Sneak an extra day into your life. Use it wisely.',
      theme_color: '#000'
    }
  },

  plausible: {
    domain: '3-in-2.com',
    trackLocalhost: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
