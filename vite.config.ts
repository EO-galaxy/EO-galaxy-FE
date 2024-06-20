import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";
import history from "connect-history-api-fallback";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFaviconsPlugin({
      logo: "public/logo.png",
    }),
    {
      name: "single-page-app",
      configureServer(server) {
        const middleware = history();
        server.middlewares.use((req, res, next) => {
          middleware(req as any, res as any, next);
        });
      },
    },
  ],
});
