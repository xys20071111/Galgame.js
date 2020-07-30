const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/main.js',
    output: {
        filename: './dev/app.js'
    },
    devServer:{
        host:'0.0.0.0',
        hotOnly:false,
        disableHostCheck:true,
        headers: {
            'host':'127.0.0.1',
            'Access-Control-Allow-Origin': '*',
        },
    },
};