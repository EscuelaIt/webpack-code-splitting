const path = require('path');

module.exports = {
  entry: {
    home: './src/home.js',
    contactos: './src/contactos.js',
    panel: './src/panel.js',
  },
  output: {
    filename: '[name].js',
    publicPath: 'http://localhost:9009/scripts/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
  }
}

