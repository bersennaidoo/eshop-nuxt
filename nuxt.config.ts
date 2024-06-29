// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt EShop Tailwind",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "SSG Tailwind EShop template" },
        { name: "keywords", content: "Vue, Nuxt, SSR" },
      ],
      script: [
        /*{ src: "/js/bootstrap.bundle.min.js", async: true, defer: true, tagPosition: "bodyClose" }*/
      ],
      link: [
        /*{ rel: "stylesheet", href: "/ayroui/css/starter.css" },*/
      ],
    },
  },
});
