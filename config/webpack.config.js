const path=require('path')

module.exports={
    entry:path.resolve(__dirname,'../main.js'),
    mode:'production',
    output:{
        filename:'main.js',
        path:path.resolve(__dirname,'../run'),
        clean:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
}