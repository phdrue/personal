// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: false,
  }), alpinejs()],
});