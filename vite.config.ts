import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mpaPlugin from "vite-plugin-mpa-plus";
import { Pages, Rewrite } from "vite-plugin-mpa-plus";
import { resolve } from "path";

const rewrites: Array<Rewrite> = [{ from: /.*/, to: "./index.html" }];

const pages: any | Pages = [
  {
    entry: resolve(__dirname, "./src/main.ts"),
    filename: resolve(__dirname, "./src/index.html"),
    template: resolve(__dirname, "./src/index.html"),
    inject: {
      data: {
        title: "mpa",
      },
    },
  },
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mpaPlugin({
      pages,
      historyApiFallback: {
        rewrites,
      },
    }),
  ],
  appType: "mpa",
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  base: "./",
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
