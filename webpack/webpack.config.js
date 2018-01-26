const path = require('path');
const devServer = require('webpack-dev-server');
module.exports = {
    entry:{
        index:'./src/index.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{

    },
    plugins:[

    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        port:'8081'
    }
}