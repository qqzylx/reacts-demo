module.exports = {
    entry: "./js/index.js",
    output: {
        path: __dirname,
        filename: "bin/index.min.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['es2015']
              }
            }
        ]
    }
};
