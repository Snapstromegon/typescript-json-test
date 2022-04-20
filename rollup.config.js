// rollup.config.js
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./index.ts",
    output: { file: "index.js", format: "es" },

    plugins: [json(), commonjs(), resolve(), typescript()],
  },
  {
    input: "./index.ts",
    output: { file: "index_tersed.js", format: "es" },

    plugins: [json(), commonjs(), resolve(), typescript(), terser()],
  },
];
