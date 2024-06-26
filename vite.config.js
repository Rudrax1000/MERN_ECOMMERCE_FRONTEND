import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://owner-avatar-mern-ecommerce-backend.onrender.com",
      "/uploads/": "https://owner-avatar-mern-ecommerce-backend.onrender.com",
    },
  },
});
