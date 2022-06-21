import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  sourcemap: true,
  format: ["esm"],
  outDir: "lib",
  dts: true,
  minify: true,
  metafile: true,
  entry: ["./src/index.tsx"],
});
