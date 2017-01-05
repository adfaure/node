var webpack = require("webpack");

module.exports = {
    entry: {
      app: './src/app.js',
      vendor: ['react', 'react-dom', 'codemirror', 'react-redux', 'redux', 'redux-thunk']
    },
    output: {
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {test: /\.json$/, loader: 'json-loader'}
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
}
