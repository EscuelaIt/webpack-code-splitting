const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  entry: {
    home: './src/home.js',
    contactos: './src/contactos.js',
    panel: './src/panel.js',
  },
  output: {
    filename: '[name]-es6.js',
    path: path.resolve(__dirname, 'public/js'),
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
  module: {
    rules: [
      {
      test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env',
            {
              targets: {
                "esmodules": true
              }
            }  
            ]]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/@webcomponents/webcomponentsjs/',
        to: path.resolve(__dirname, 'public/js/webcomponentsjs/')
      }
    ]),
  ],
}