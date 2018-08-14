/*
 * webpack base
 */

const paths = require('./paths');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackHtml = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
/*
 * webpack可以把以指定入口的一系列相互依赖的模块打包成一个文件
 * 这里的模块指的不只是js，也可以是css。
 * 也就是说，当你用CommonJs规范去引用css文件时，webpack会把你引用的css文件也打包到最终的生成文件中里。
 * 这样我们如何让样式生效呢？有两种方法：
 * 一种是，在引入css时，在最后生成的js文件中进行处理，动态创建style标签，塞到head标签里。这样，html页面引用这个js文件时，就可以让样式生效了。
 * 另一种方法是，打包时把css文件拆出来，css相关模块最终打包到一个指定的css文件中，我们手动用link标签去引入这个css文件就可以了。
 * 这两种方法都需要配置响应的loader。
 */
// modules是否是全局
const styleConfig = (modules = true) => {
    return [
        // {
        //     // style-loader 将解析后的样式嵌入js代码
        //     // 使用ExtractTextPlugin，则不需要使用该loader
        //     loader: require('style-loader')
        // },
        {
            // css-loader 解析这个文件,能够使用类似@import和url（...）的方法实现require的功能
            loader: 'css-loader',
            options: {
                modules,
                localIdentName: '[name]__[local]-[hash:base64:5]'
            }
        },
        {
            // PostCSS 本身是一个功能比较单一的工具。它提供了一种方式用 JavaScript 代码来处理 CSS。它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。
            loader: 'postcss-loader',
            options: {
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                        browers: [
                            'Android>=4.0',
                            'iOS>=8'
                        ]
                    })
                ]
            }
        },
        {
            loader: 'sass-loader'
        }
    ]
}
module.exports = {
    entry: {
        main: paths.appJs
    },
    output: {
        path: paths.buildPath,
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                // include: [paths.appSrc],
                loader: require.resolve('babel-loader')
            },
            {
                // url-loader: 用于指定当文件的小于设置的限制时，可以返回一个DataUrl(base64)
                // file-loader: 生成文件到指定的输出目录，并返回public URL
                test: /\.(bmp|gif|jpe?g|png)$/,
                loader: require.resolve('url-loader'),
                options: {
                    limit: 8192,
                    fallback: 'file-loder',
                    name: 'static/media/[name][hash].[ext]'
                }
            },
            {
                oneOf: [
                    {
                        test: /\.global.(scss|css)$/,
                        loader: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            // 不使用css modules
                            use: styleConfig(false)
                        })
                    },
                    {
                        test: /\.(scss|css)$/,
                        loader: ExtractTextPlugin.extract({
                            fallback: 'style-loader',
                            // 使用css modules
                            use: styleConfig(true)
                        })
                    }
                ]
            }
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin(),
        new HtmlWebpackHtml({
            title: 'test',
            template: paths.appHtml
        })
    ]
}