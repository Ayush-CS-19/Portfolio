import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import { a } from "framer-motion/client";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), autoprefixer(), postcss()],
  assetsInclude: ["**/*.glb"],
});
