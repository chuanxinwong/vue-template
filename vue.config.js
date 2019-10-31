const path = require('path');

const config = require("./config");


module.exports = {
    publicPath: config.publicPath,
    assetsDir: "./assets",

    devServer: {
        port: 8890,
        host: '0.0.0.0',
        hot: false,
        proxy: {
            "/jumper": {
                target: 'http://xxx.xxxxx.com',
                changeOrigin: true,
            },

            "/apigroup1": {
                target: 'http://xxx.xxx.xxx.xxx:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/apigroup1': ''
                },
            },
            "/apigroup2": {
                target: 'http://xxx.xxx.xxx.xxx:8081',
                changeOrigin: true,
                pathRewrite: {
                    '^/apigroup2': ''
                },
            },
        },
        compress: true,
        disableHostCheck: true,
    },


    configureWebpack: {
        devtool: "source-map",
        resolve: {
            alias: {
                '@': path.resolve('src')
            }
        }

    },


}