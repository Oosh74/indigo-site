import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
export default defineConfig({
  site: "https://www.yourwebsite.com", // update me!
  integrations: [
    icon(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  image: {
    layout: "constrained",
  },
});
