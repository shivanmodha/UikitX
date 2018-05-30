let path = require("path");
module.exports = {
    entry: [
        path.resolve(__dirname, "src", "index.js")
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "uikitx.js",
        libraryTarget: "commonjs2"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    externals: {
        "react": "commonjs react"
    }
}