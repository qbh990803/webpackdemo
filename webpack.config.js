const path = require('path');

module.exports = {
    entry: {
        index:'./src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: '[name].js',
    },
    mode: 'production',
    module: {
        rules: [
            {test:'/\.css$/',use:'css-loader'},
            { test: /\.ts$/, use: 'ts-loader'}
        ]
    }
}