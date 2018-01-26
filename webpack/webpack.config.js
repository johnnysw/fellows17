const path = require('path');
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
        
    }
}