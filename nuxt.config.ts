import tailwindcss from "@tailwindcss/vite";

const baseURL = process.env.NUXT_APP_BASE_URL || "/";
const normalizedBaseURL = baseURL.endsWith("/") ? baseURL : `${baseURL}/`;

export default defineNuxtConfig({
  compatibilityDate: "2026-07-06",
  devtools: { enabled: false },
  ssr: true,
  css: ["~/assets/css/main.css"],
  app: {
    baseURL: normalizedBaseURL,
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
        { property: "og:url", content: "https://dev-mo-ali.github.io/resume/" },
        { property: "og:type", content: "website" },
      ],
      link: [
        { rel: "canonical", href: "https://dev-mo-ali.github.io/resume/" },
        { rel: "icon", type: "image/svg+xml", href: `${normalizedBaseURL}favicon.svg` },
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
