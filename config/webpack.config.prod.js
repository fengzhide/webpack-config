const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const paths = require('./paths');

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const prodConfig = {
    mode: 'production',
    output: {
        path: paths.buildPath,
        filename: 'static/js/[name].[chunkhash:8].js',
        chunkFilename: 'static/js/[name].[chunkhash].js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsWebpackPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        comparisons: false,
                        drop_console: true
                    },
                    output: {
                        comments: false,
                        ascii_only: true,
                    },
                }
            })
        ]
    },
    plugins: [
        /* 每次编译生产环境代码时先将之前的文件删除掉 */
        new CleanWebpackPlugin(
            [
                'static' // 匹配删除的文件
            ],
            {
                root: paths.buildPath,  // 根目录
                verbose: true,          // 开启在控制台输出信息
                dry: false,             // 启用删除文件
            }
        ),
    ]
}

module.exports = merge(baseConfig, prodConfig);