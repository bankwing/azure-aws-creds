var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
  entry: {
    app: './src/main.js',
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  target: 'node',
  externals: [nodeExternals({
    allowlist: [
      'jquery',
      'bootstrap/dist',
      'datatables.net-dt/css'
    ]
  })]
};
