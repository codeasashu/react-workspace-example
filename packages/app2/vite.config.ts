import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    build: {
      sourcemap: true,
      lib: {
        entry: "./src/index.ts",
        fileName: format => {
          if (format === "cjs") {
            return "commonjs/index.js";
          }
          return "index.js";
        },
        // We use CommonJS output for running tests in jest.
        formats: ["cjs", "es"],
        name: "studio",
      },
      emptyOutDir: false,
      rollupOptions: {
        external: ["react", "react-dom"],
      },
    }
  };
});
