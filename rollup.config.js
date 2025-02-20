import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";

export default {
	input: "index.ts",
	output: [
		{
			file: "es/index.js",
			format: "cjs",
      sourcemap: true,
		},
    {
      file: 'es/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
	],
	plugins: [resolve(), commonjs(), typescript()],
};
