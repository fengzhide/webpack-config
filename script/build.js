process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const prodConfig = require('../config/webpack.config.prod.js');
const chalk = require('chalk');

const complier = webpack(prodConfig);

complier.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    console.log('File sizes :\n');
    stats.toJson().assets.filter(asset => /\.(js|css)$/.test(asset.name)).
        map(asset => {
            console.log(chalk.cyan(`    ${asset.name}  size: ${asset.size / 1000}kb`));
        }
    );

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
})

