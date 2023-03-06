import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  preview: {
    port: 4300,
    host: "localhost",
    strictPort: true,
  },

  plugins: [
    react(),
    federation({
      name: "federate-shell",
      remotes: {
        "first-app": "http://localhost:4301/assets/remoteEntry.js",
        "second-app": "http://localhost:4302/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-is"],
    }),
  ],
});
