const path = require('path');

module.exports = {
    entry: './src/shoutout.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module:{
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              options: {
                  presets: ['@babel/preset-env']
              }
          }
      ]
    }
}