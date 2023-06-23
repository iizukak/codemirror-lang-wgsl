import typescript from "rollup-plugin-ts";
import { lezer } from "@lezer/generator/rollup";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/index.ts",
    external: (id) => id != "tslib" && !/^(\.?\/|\w:)/.test(id),
    output: [
      { file: "dist/index.cjs", format: "cjs" },
      { dir: "./dist", format: "es" },
    ],
    plugins: [lezer(), typescript()],
  },
  {
    input: "src/demo.ts",
    output: [{ file: "demo/demo.js", format: "iife" }],
    plugins: [typescript(), nodeResolve()],
  },
];
