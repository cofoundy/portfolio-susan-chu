import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://cofoundy.github.io",
  base: "/portfolio-susan-chu",
  vite: {
    plugins: [tailwindcss()],
  },
});
