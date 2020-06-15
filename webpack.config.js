
var path = require('path');
module.exports = {
    mode:'production',
    entry: './source/index.js',
    output:{
        path:path.resolve(__dirname,"public"),
        filename:'index_bundle.js'
    }
    ,
    module:{
        rules:[
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
,
    devServer: {
        host : '127.0.0.1',
        contentBase: path.join(__dirname, "/"),
        compress: true,
        hot : true,
        inline: true,
        port: 9000,
        open : true
      }
};
