
var Path = require("path");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    app: ["./src/js/index.js"]
  },
  output: {
    path: Path.resolve(__dirname, "dist/js"),
    filename: "bundle.js"
  },
  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: 'localhost',
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:8080/)
        // through BrowserSync
        proxy: 'http://localhost:8080',
        files: 'dist/'
      },
      // plugin options
      {
        // prevent BrowserSync from reloading the page
        // and let Webpack Dev Server take care of this
        reload: true
      }
    )
  ]
};