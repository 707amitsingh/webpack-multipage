const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanPlugin } = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        "pokemon-image": "./src/poke-world.js",
        "my-button": "./src/my-button.js"
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "./dist"),
        publicPath: "static/"
    },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1000 // 1kb by default if dependency size is more than 30kb then it creates a seperate chunk for it
        }
    },
    mode: "production",
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
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contenthash].css"}),
        new CleanPlugin(),
        new HtmlWebpackPlugin({
            filename: "pokemon-image.html",
            title: "Amit's webpack app",
            template: "src/index.hbs",
            minify: false,
            chunks: ["pokemon-image"]
        }),
        new HtmlWebpackPlugin({
            filename: "my-button.html",
            title: "Amit's webpack app",
            template: "src/index.hbs",
            chunks: ["my-button"]
        })
    ]
}