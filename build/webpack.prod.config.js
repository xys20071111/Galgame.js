const path = require('path');

module.exports = {
    mode:'production',
    entry: './src/main.js',
    output: {
        filename: './prod/app.js'
    }
};