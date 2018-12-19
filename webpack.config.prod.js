const path = require("path");

module.exports = {
    mode: "production",
    entry: "./index.js",
        output: {
        path: path.resolve(__dirname, "build/"),
        filename: "<DEFAULT>.js",
        libraryTarget: 'umd',
        globalObject: 'this',
        libraryExport: 'default',
        library: '<DEFAULT>'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        presets: ["babel-preset-env"]
                    }
                }
            },
        ]
    }
};