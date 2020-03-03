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
        headers: {
            'host':'https://8080-a1fde922-0f5f-49c7-a117-b9c506af706d.ws-ap01.gitpod.io/',
            'Access-Control-Allow-Origin': '*',
        },
    },
};