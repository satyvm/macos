import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import autoImport from "unplugin-auto-import/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss(),
    react(),
    autoImport({
      imports: ["react"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/hooks", "src/stores", "src/components/**"]
    })
  ],
  base: '/macos/',
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  }
});
