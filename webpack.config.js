const path = require("path");

const config = {
    entry: "./src/index.ts",
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "lib"),
        library: "activ_cg_api_starter",
        libraryTarget: "umd"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".js"]
    },
    externals: {
        "@activfinancial/cg-api": {
            root: "activCgApi",
            commonjs: "@activfinancial/cg-api",
            commonjs2: "@activfinancial/cg-api",
            amd: "@activfinancial/cg-api"
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "source-map-loader",
                enforce: "pre"
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        // Note webpack-dev-server won't watch non-generated files for changes,
        // so to reload if e.g. the top level html is updated we need this config section.
        // publicPath is required even though it should be implicit from output.path.
        port: 8880,
        contentBase: __dirname,
        watchContentBase: true,
        publicPath: "/lib/"
    }
};

module.exports = config;
