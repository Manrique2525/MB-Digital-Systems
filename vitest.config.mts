import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": root,
    },
  },
  test: {
    environment: "jsdom",
    clearMocks: true,
    restoreMocks: true,
    setupFiles: ["./test/setup.ts"],
    env: {
      NEXT_PUBLIC_API_URL: "https://api.test",
    },
  },
});
