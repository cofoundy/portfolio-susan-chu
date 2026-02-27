import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://susan-chu.cofoundy.dev",
  vite: {
    plugins: [tailwindcss()],
  },
});
