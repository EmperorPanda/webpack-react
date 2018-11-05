const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: true }
                    }
                ]
            },{
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'  // 可以把css放在页面上
                    },
                    {
                        loader: 'css-loader?modules'    // 放在后面的先被解析
                    }
                ]
            }
            // {
            //     test:/\.css$/,   
            //     use:[{loader:"style-loader"},{loader:"css-loader"}]
            //     //css-loader 后加modules表示用modules方式加载。即用import obj from '../../index.css',
            //     // 否则用 import 
            // }
        ]
    },
    devServer: {
        contentBase: require('path').join(__dirname, "dist"),
        compress: true,
        port: 8099,
        host: "localhost",
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
    ]
};