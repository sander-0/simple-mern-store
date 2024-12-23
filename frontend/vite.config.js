import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Explicitly set the output directory to 'dist'
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
