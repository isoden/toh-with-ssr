const ngtools = require('@ngtools/webpack');
const webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: './src/main-aot.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        path: __dirname + '/src/dist',
        filename: 'build.js'
    },
    plugins: [
        new ngtools.AotPlugin({
            tsConfigPath: './tsconfig-aot.json'
        }),
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
    ],
    module: {
        rules: [
            { test: /\.css$/, loader: 'raw-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.ts$/, loader: '@ngtools/webpack' }
        ]
    }
}
