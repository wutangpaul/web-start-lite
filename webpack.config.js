
var path = require("path");

module.exports = {
  entry: {
    app: ["./src/js/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};