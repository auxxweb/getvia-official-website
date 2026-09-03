import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Custom domain (home.getvia.in) serves this project at the site root.
// GitHub Pages project URL redirects to that domain when CNAME is set.
export default defineConfig({
  plugins: [react()],
  base: "/",
});
