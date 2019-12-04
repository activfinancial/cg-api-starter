import nodeResolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";

const config = {
    input: "./src/index.ts",
    output: {
        file: "./lib/index.js",
        format: "umd",
        name: "activ_cg_api_starter",
        sourcemap: true,
        globals: {
            "@activfinancial/cg-api": "activCgApi"
        }
    },
    external: [ "@activfinancial/cg-api" ],
    plugins: [
        nodeResolve({
            mainFields: ["browser"],
            modulesOnly: true
        }),
        typescript()
    ]
};

export default function(args) {
    if (args["config-serve"]) {
        config.plugins.push(new serve({
            contentBase: ".",
            port: 8880
        }));
        // NB can't get livereload working...
        config.plugins.push(new livereload());
    }

    if (args["config-production"]) {
        config.plugins.push(new terser());
    }

    return config;
};
