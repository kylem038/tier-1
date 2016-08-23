const path = require('path');

module.exports = {
  entry: {
    main: "./lib/index.js",
    test: "mocha!./tests/unit/index-test.js"
  },
  output: {
    path: __dirname,
    filename: "[name].bundle.js"
  },
  module: {
   loaders: [
     { test: /\.css$/, loader: "style!css" },
     { test: /\.scss$/, loader: "style!css!sass" }
   ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  } 
}
