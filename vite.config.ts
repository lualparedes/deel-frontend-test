import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
  server: { port: 5173, host: true, hmr: { host: "localhost" } },
});
