import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/skogsbilveg": {
        target: "http://server:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/skogsbilveg/, "/api/v1/forestryroads"),
        secure: false,
      },
    }
  },
});
