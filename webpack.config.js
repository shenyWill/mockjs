const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const htmlPlugin = require('html-webpack-plugin');
const extractPlugin = require('extract-text-webpack-plugin'); // 分离css
const purifyCssPlugin = require('purifycss-webpack');   // 清除无用的css

const webpack_entry = require('./config/webpack_entry.js');
const webpack_router = require('./config/webpack_router');
const webpack_module = require('./config/webpack_module');

var output_path, htmlPluginArr = [];

for (let item of webpack_router) {
    // 分离html
    htmlPluginArr.push(
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/template/' + item.html,
            filename: item.html,
            chunks: [...item.js]
        })
    )
}
if (process.env.type === 'dev') {
    output_path = path.resolve(__dirname, 'dist');
}

const webpack_config = {
    mode: 'development',
    // 入口
    entry: webpack_entry,
    // 出口
    output: {
        path: output_path,
        filename: 'js/[name].js'
    },
    module: webpack_module,
    // 插件
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),

        new extractPlugin('css/[name].css'),

        /* 必须配合extractPlugin插件一起使用 */
        new purifyCssPlugin({
            paths: glob.sync(path.join(__dirname, 'src/template/*.html'))
        }),
    ],
    // 热更新
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '172.16.33.116',
        compress: true, // 配置服务器压缩
        port: 80
    }
    
}
for (let item of htmlPluginArr) {
    webpack_config.plugins.push(item);
}

module.exports = webpack_config;