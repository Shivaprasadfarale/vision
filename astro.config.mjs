// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ronnsquare.fr",
  trailingSlash: "always",
  build: { format: "directory" },
  server: { host: true, port: 4321 },
  devToolbar: { enabled: false },
  vite: {
    server: { allowedHosts: true },
  },
});
