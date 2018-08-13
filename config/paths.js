const path = require('path');
const fs = require('fs');
const url = require('url');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appJs: resolveApp('./src/index.js'),
    appSrc: resolveApp('./src'),
    buildPath: resolveApp('./build'),
    // publicPath: resolveApp('./build'),
    appHtml: resolveApp('./src/index.html')
};