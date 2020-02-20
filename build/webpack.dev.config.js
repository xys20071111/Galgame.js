const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/main.js',
    output: {
        filename: './dev/app.js'
    },
    devServer:{
        hotOnly:false,
        disableHostCheck:true,
    },
};