const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './js/index.js',
    output: {
        path: path.join(__dirname, './../static/dist'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [{
            test: /\.(scss|sass)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('css/main.css'),
    ]
}

