/**
 * Created by Administrator on 2017/8/10.
 */
var webpack=require("webpack");
var path = require('path');//node的path模块是处理文件路径的工具
module.exports = {
    entry:  __dirname + "/app/main.js",//唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },
    module: {
        loaders: [
            {//把es6转为es5
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
           }

        ]
    }

}

