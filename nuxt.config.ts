// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    display: "swap",
    download: true,
    families: {
      Poppins: {
        wght: [300, 400, 500, 600, 700],
        ital: [400],
      },
      Oswald: {
        wght: [300, 400, 500, 600, 700],
      },
      "Dancing Script": {
        wght: [400, 500, 600, 700],
      },
    },
  },
});
