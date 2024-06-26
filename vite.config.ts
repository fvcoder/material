import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

import packageJson from "./package.json";

const makeExternalPredicate = (externals: string[]) => {
  if (externals.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externals.join("|")})($|/)`);

  return (id: string) => pattern.test(id);
};

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.tsx",
      name: packageJson.name,
      fileName: (format) => `fvcoder-material.${format}.js`,
    },
    rollupOptions: {
      external: makeExternalPredicate([
        ...Object.keys(packageJson.dependencies),
        ...Object.keys(packageJson.peerDependencies),
      ]),
      output: {
        globals: {
          react: "React",
          "@emotion/react": "@emotion/react",
        },
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
    dts({
      exclude: ["**/*.stories.(t|j)sx", "node_modules/**"],
      insertTypesEntry: true,
    }),
  ],
});
