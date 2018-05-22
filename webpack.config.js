const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
    entry:{
        main: "./src/main.js",
        ol:"./src/ol.js",
        al:"./src/al.js",
        subject:"./src/subject.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"webapp/dist/js")
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: ['./webapp','./webapp/dist/js','./webapp/dist/css','./webapp/dist/img','./webapp/dist/fonts'],
        publicPath: '/dist/js/',
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test:/.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options:{
                            minimize: true
                        }
                    }
                })
            },
            {
                test:/\.(png|svg|jpg|gif)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        outputPath: "../img/"
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        outputPath: "../fonts/"
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("../css/[name].css"),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })
    ]
}