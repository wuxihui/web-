const path = require('path');
const VueloaderPlugin = require('vue-loader/lib/plugin')
//webpack配置文件会默认找到webpack.config.js
module.exports = {
    entry: './src/index.js' , //单入口设置
    // entry: {
    //       app: './src/index.js',
    //       app2: './src/main.js'
    // } //多入口设置
    output: {//出口配置,要先引入path
     path:path.resolve(__dirname,'./dist'), //打包到dist文件中,dist文件会自动生成
    //  filename: '[name].js' //多出口的name占位符
    filename: 'bundel.js'
    },

    mode: "production", //环境

    module: {//转换的规则,把用到的东西转换能在页面上渲染的东西
        //loader 转换规则
        rules: [
            {
                test: /\.js$/, //哪种文件类型需要用到这条规则
                use: 'babel-loader' //从es678转换成es5
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', //支持css的加载与解析
                    'css-loader'          
            ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader' //将less文件转换成css文件
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader' //将sass|scss转换成css文件
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: 'file-loader' //图片类型的转换
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
          // title: '我的天，李威真帅'
          template: path.resolve(__dirname, './public/index.html'), // 选择一个现有的html文件作为生成的html文件的根据
        }),
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, './public'),
          }
        ]),
        new CleanWebpackPlugin()
      ],
    
      // webpack-dev-server 的相关配置
      devServer: {
        port: 9090,
        contentBase: './dist'
      }
}