import { defineConfig } from "vite";

export default defineConfig({
  test: {
    testTimeout: 2000,
    setupFiles: ["/Users/kavinthanesjesdapong/trackr/server/src/tests/testUtils.ts"],
    coverage: {
      reporter: ["text", "html", "json"],
    },
    globals: true,
  },
});