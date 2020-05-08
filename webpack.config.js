 const path = require('path');
 const ExtractTextPlugin = require('extract-text-webpack-plugin');
 //entry -> output the final bundle file
 console.log(path.join(__dirname,"public"));

 module.exports = (env) => {
     const isProduction = env === 'production';
     return{
        entry: "./src/app.js",
        output:{
            path: path.join(__dirname),
            filename:'bundle.js'
        },
        module:{
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map':'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname)
        }  ,
        performance: {
            maxEntrypointSize: 512000,
            maxAssetSize: 512000,
            hints:false
          },
          mode: 'development' 
     }
 };

