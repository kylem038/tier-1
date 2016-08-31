const path = require('path');

module.exports = {
  entry: {
    main: './lib/index.js',
    test: 'mocha!./tests/unit/index-test.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
   loaders: [
     { test: /\.css$/, loader: 'style!css' },
     { test: /\.scss$/, loader: 'style!css!sass' },
     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
     { test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
   ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};
