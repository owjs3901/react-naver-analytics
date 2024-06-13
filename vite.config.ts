/// <reference types="vitest" />

import dts from "vite-plugin-dts";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [
    react(),
    dts({
      staticImport: true,
      entryRoot: "src",
      include: ["src"],
      exclude: ["**/__tests__/**"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["cjs", "es"],
      fileName: (format, entryName) =>
        `${entryName}.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: (source) => {
        return !(source.includes("src") || source.startsWith("."));
      },
      output: {
        exports: "named",
        assetFileNames({ name }) {
          console.log("헉");
          return name?.replace(/^src\//g, "") ?? "";
        },
        preserveModules: true,
      },
    },
  },
  test: {
    globals: true,
    coverage: {
      all: true,
      provider: "v8",
      thresholds: {
        100: true,
      },
    },
    environmentMatchGlobs: [
      ["**/*.browser.test.*", "happy-dom"],
      ["**/*.test.*", "node"],
    ],
  },
});
