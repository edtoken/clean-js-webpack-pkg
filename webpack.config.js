const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV !== 'development';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./src/config'),
        }),
    ],
};
