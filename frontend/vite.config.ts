import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-styled-components",
            {
              displayName: true,
              fileName: false, // Set to true if you want file names in class names
              minify: false,
              pure: true,
              ssr: false,
              namespace: "sc-",
              transpileTemplateLiterals: false,
            },
          ],
        ],
      },
    }),
  ],
});
