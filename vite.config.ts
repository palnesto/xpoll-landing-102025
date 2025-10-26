import react from "@vitejs/plugin-react-swc";
import path from "node:path";
import { defineConfig, loadEnv, ConfigEnv } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    plugins: [react(), Pages()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      outDir: "dist",
    },
    server:
      env.VITE_MODE === "development" || env.VITE_MODE === "local"
        ? {
            host: true,
            port: 5175,
          }
        : undefined,
  };
});
