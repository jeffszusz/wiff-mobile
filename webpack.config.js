const path = require('path');

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: __dirname + '/src',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: 'json' },
      {
        test: /\.(jpg|png)$/,
        loader: 'url?limit=25000',
        include: __dirname + '/src/images'
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: __dirname + '/src'
      },
    ]
  },
  //resolve: {
    //extensions: ['', '.js', '.jsx']
  //}
};
