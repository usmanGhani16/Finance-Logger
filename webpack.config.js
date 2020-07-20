const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    mode: 'development',
    entry: './src/app.ts',
    module: {
        rules: [{
            test: /\.ts$/,
            include: [path.resolve(__dirname, 'src')],
            use: 'ts-loader',
        }]
    },
    resolve: {
        extensions: [".js", ".ts"]
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};