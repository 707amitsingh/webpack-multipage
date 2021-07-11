const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "my-button": "./src/my-button.js",
        "pokemon-image": "./src/poke-world.js"
    },
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "./dist")
    },
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "/dist"),
        index: "index.html",
        port: 9000,
        writeToDisk: true
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 3*1024 // 3 kb
                    }
                }
            },
            {
                test: /\.txt$/,
                type: "asset/source"
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [ new TerserPlugin(),
        new MiniCssExtractPlugin({ filename: "styles.[contenthash].css"}),
        new HtmlWebpackPlugin({
            filename: "my-button.html",
            title: "Amit's webpack app",
            template: "src/index.hbs",
            chunks: ["my-button"]
        }),
        new HtmlWebpackPlugin({
            filename: "pokemon-image.html",
            title: "Amit's webpack app",
            template: "src/index.hbs",
            chunks: ["pokemon-image"]
        }),
        new CleanWebpackPlugin(),
    ]
}