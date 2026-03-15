import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({ jsxRuntime: "automatic" })],
  server: {
    port: 3000, // mismo puerto que CRA para no cambiar tus hábitos
    open: true, // abre el browser automáticamente con npm start
  },
  build: {
    outDir: "dist", // CRA usaba 'build', Vite usa 'dist' por defecto
  },
});
