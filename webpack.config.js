const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
module.exports = {
    module: {
        rules: [
            {//ES6、JSX处理
                test:/(\.jsx|\.js)$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                query:
                    {
                        presets:["react"],
                        plugins: [
                            [
                                "import",
                                {libraryName: "antd", style: 'css'}
                            ] //antd按需加载
                        ]
                    },
            },

            {//CSS处理
                test: /\.css$/,
                loader: "style-loader!css-loader?modules",
                exclude: /node_modules/,
            },

            {//antd样式处理
              test:/\.css$/,
              exclude:/src/,
              use:[
                    { loader: "style-loader"},
                    {
                        loader: "css-loader",
                        options:{
                            importLoaders:1
                        }
                    }
              ]
            },
            {
    　　　　　　  test: /\.(png|jpg)$/,
    　　　　　　  loader: 'url-loader?limit=8192'
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
        contentBase: path.join(__dirname, "dist"), //编译好的文件放在这里
        compress: true,
        port: 9000 //本地开发服务器端口
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
    ]
};