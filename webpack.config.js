const path = require('path');

module.exports = {
    entry: './src/shoutout.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.bundle.js'
    }
}