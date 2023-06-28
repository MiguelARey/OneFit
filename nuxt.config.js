export default {
  ssr: false,

  target: "static",

  head: {
    title: "oneFit",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [{ rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" }],
  },

  css: [],

  plugins: [],

  // auto add components
  components: true,

  buildModules: [],

  modules: ["@nuxtjs/axios"],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  build: {},
};
