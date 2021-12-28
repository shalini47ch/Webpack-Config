const path = require('path')
module.exports={
    mode:"development",
    entry:'./src/App.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: "output.js"

    },
    //module is the place where we can put most of our loaders
    module:{
        rules:[
            {
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
        ]

    },
    devServer:{
        static:path.join(__dirname,'dist'),
        compress:true,
        port:3500

    }
}