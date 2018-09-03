const extractPlugin = require('extract-text-webpack-plugin');
const webpack_module = {
    rules: [
        
        {
            test: /\.scss$/,
            use: extractPlugin.extract(
                {
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                        'postcss-loader'
                    ],
                    fallback: 'style-loader'
                }
            )
        },
        {
            test: /\.js$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }
    ]
}

module.exports = webpack_module;