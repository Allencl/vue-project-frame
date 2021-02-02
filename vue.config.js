const path = require('path');

module.exports = {
    publicPath:"./",
    devServer: {
        disableHostCheck: true,
            proxy: {
                '/api-user': {
                    // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                    // target: 'http://182.168.1.132:9900',
                    target: 'http://server.wis-longyun.com',
                    // target: 'http://182.168.1.40:8080',

                    // 允许跨域
                    changeOrigin: true,
                    ws: true,
                    pathRewrite: {
                        '^/api-user': '/api-user'
                    }
                },
                '/api': {
                    // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/
                    target: 'http://crm.wis-longyun.com',
                    // target: 'http://182.168.1.40:8080',

                    // 允许跨域
                    changeOrigin: true,
                    ws: true,
                    pathRewrite: {
                        '^/api': '/api'
                    }
                }
            }
    },
      configureWebpack:{
        resolve:{
            alias:{
                '@styles':path.resolve('./src/styles'),
                '@src':path.resolve('./src'),
                '@assets':path.resolve('./src/assets'),
                '@view':path.resolve('./view'),
            }
        }
    }
};