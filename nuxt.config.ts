// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-08-05",
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
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: ["@nuxtjs/i18n", "@nuxt/eslint"],
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
});
