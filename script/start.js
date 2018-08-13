process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackDevConfig = require('../config/webpack.config.dev');
const detect = require('detect-port');
const webpackDevServerConfig = require('../config/webpackDevServer.config')();
const chalk = require('chalk');
const childProcess = require('child_process');
const compiler = webpack(webpackDevConfig);
const config = require('../config/config');
// compiler.watch({}, (err, stats) => {
//     if (err) {
//         console.error(err.stack || err);
//         if (err.details) {
//             console.error(err.details);
//         }
//         return;
//     }

//     const info = stats.toJson();

//     if (stats.hasErrors()) {
//         console.error(info.errors);
//     }

//     if (stats.hasWarnings()) {
//         console.warn(info.warnings);
//     }

//     // 记录结果...
// });
const devServer = new WebpackDevServer(compiler, webpackDevServerConfig);

const HOST = process.env.HOST || '127.0.0.1';
const PORT = config.port;
const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
// detect 选择端口
detect(PORT)
    .then(port => {
        devServer.listen(port, PORT, err => {
            if (port !== PORT) {
                console.log(`${PORT} is occupied, use ${port} ....`)
            }
            url = `${protocol}://${HOST}:${port}/`;
            console.log('Starting the development server...\n');
            console.log(url);
            childProcess.exec(`start ${url}`);
        });
    }).catch(err => {
        if (err && err.message) {
            console.log(err.message);
        }
        process.exit(1);
    });

['SIGINT', 'SIGTERM'].forEach(function (sig) {
    process.on(sig, function () {
        devServer.close();
        process.exit();
    });
});