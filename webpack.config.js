module.exports = {
    entry: './app/src/app.ts',
    output: {
        filename: 'app/dist/compiled.js'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'ts'}
        ]
    }
}