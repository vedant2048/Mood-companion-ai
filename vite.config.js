import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mood-companion-ai/",  

  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});