var webpack = require("webpack");

module.exports = {
    entry: {
      app: './src/app.js',
      vendor: [ 'react',
                'react-dom',
                'react-redux',
                'redux',
                'redux-thunk' ]
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
        {test: /\.json$/, loader: 'json-loader'},
        { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
      new webpack.DefinePlugin({
        "require.specified": "require.resolve"
      })
    ]
}
