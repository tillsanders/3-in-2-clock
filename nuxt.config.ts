// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-05",
  ssr: false,
  app: {
    head: {
      title: "3 in 2",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0, viewport-fit=cover",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Use this clock to pretend there are 72 hours in 48 or 3 days in 2. Sneak an extra day into your life. Use it wisely.",
        },
        { name: "format-detection", content: "telephone=no" },
        { name: "msapplication-TileColor", content: "#000000" },
        { name: "theme-color", content: "#000000" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        { name: "apple-mobile-web-app-title", content: "3 in 2" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/i18n", "@nuxt/eslint", "v-plausible", "@vite-pwa/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  i18n: {
    baseUrl: () => process.env.BASE_URL || "https://3-in-2.com",
    locales: [
      { code: "en", iso: "en" },
      { code: "de", iso: "de" },
    ],
    strategy: "prefix",
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  pwa: {
    manifest: {
      name: "3 in 2",
      short_name: "3 in 2",
      description:
        "Use this clock to pretend there are 72 hours in 48 or 3 days in 2. Sneak an extra day into your life. Use it wisely.",
      theme_color: "#000000000",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
  },
  plausible: {
    init: {
      domain: "3-in-2.com",
      trackLocalhost: true,
    },
  },
});
