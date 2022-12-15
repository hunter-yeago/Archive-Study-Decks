const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    //Creates  `style` nodes from JS strings
                    'style-loader', 
                    //Translates CSS into CommonJS
                    'css-loader', 
                    //Comples SASS to CSS
                    'sass-loader'],
            },
        ],
    },
};