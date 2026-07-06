import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-07-06",
  devtools: { enabled: false },
  ssr: true,
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || "/",
    head: {
      title: "Mohammad Ali - Senior DevOps Engineer",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Resume website for Mohammad Ali, Senior DevOps Engineer and AWS Cloud Architect based in Kuala Lumpur.",
        },
        { property: "og:title", content: "Mohammad Ali - Senior DevOps Engineer" },
        {
          property: "og:description",
          content:
            "AWS Cloud Architect, DevOps Engineer, Terraform, Kubernetes, EKS, CI/CD, observability, and cloud security.",
        },
        { property: "og:type", content: "website" },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    preset: "static",
  },
});
