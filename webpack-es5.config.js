const path = require('path');


module.exports = {
  entry: {
    home: [ '@webcomponents/webcomponentsjs/custom-elements-es5-adapter', '@babel/polyfill', './src/home.js'],
    contactos: ['@webcomponents/webcomponentsjs/custom-elements-es5-adapter', '@babel/polyfill', './src/contactos.js'],
    panel: ['@webcomponents/webcomponentsjs/custom-elements-es5-adapter', '@babel/polyfill', './src/panel.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: '[name]-es5.js'
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
                browsers: [
                  '>=1%',
                  'not op_mini all',
                ]
              }
            }  
            ]]
          }
        }
      }
    ]
  },
}