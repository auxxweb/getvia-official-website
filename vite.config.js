import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo at /getvia-official-website/
// (https://auxxweb.github.io/getvia-official-website/)
export default defineConfig({
  plugins: [react()],
  base: "/getvia-official-website/",
});
