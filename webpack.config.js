const path = require("path");

module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.resolve("frontend", "public"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,  // Handle CSS files
                use: [
                    "style-loader", // Injects CSS into the DOM
                    "css-loader"    // Translates CSS into CommonJS
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,  // Handle image files
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]",
                            outputPath: "assets/images"  // Output directory for images
                        }
                    }
                ]
            }
        ]
    }
};
