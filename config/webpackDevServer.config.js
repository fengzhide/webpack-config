const paths = require('./paths');

const protocol = process.env.HTTPS ? 'https' : 'http';
const host = process.env.HOST || '0.0.0.0';
const config = require('./config');

module.exports = (proxy, allowedHost) => {
    return {
        port: config.port,
        disableHostCheck: true,
        compress: true,
        https: protocol === 'https',
        host,
        public: allowedHost,
        // publicPath: './',
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy,
        open: true,
        // 必须有 webpack.HotModuleReplacementPlugin 才能完全启用 HMR
        hot: true,
        // contentBase: paths.buildPath,
    };
};
