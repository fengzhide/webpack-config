const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const paths = require('./paths');

const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const prodConfig = {
    mode: 'production',
    entry: {
        index: paths.appJs,
        // indexA: paths.appJsA
    },
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
        ],
        // runtimeChunk: "single",
        // https://juejin.im/post/5af15e895188256715479a9a
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                lib: {
                    // chunks: 'all',
                    test: /react/,
                    name: 'lib',
                    // minChunks: 2
                  }, 
                  jQuery: {
                    // chunks: 'all',
                    test: /jquery/,
                    name: 'lib',
                    // minChunks: 2
                  }
            },
            // minSize: 30000,
            // minChunks: 2,
            // maxAsyncRequests: 5,
            // maxInitialRequests: 3,
            // name: true,
            // cacheGroups: {
            //     default: {
            //         minChunks: 2,
            //         priority: -20,
            //         reuseExistingChunk: true,
            //     },
            //     vendors: {
            //         test: /[\\/]node_modules[\\/]/,
            //         priority: -10
            //     }
            // }
        },
        // runtimeChunk: {
        //     name: 'manifest'
        // }
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
        new ExtractTextPlugin({
            filename: 'static/css/[name].[md5:contenthash:hex:20].css',
            allChunks: true
        }),
        new Visualizer(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html'
        })
    ]
}

module.exports = merge(baseConfig, prodConfig);