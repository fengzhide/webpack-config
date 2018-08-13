process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const prodConfig = require('../config/webpack.config.prod.js');

const complier = webpack(prodConfig);

complier.run((err, stats) => {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        return;
    }

    const info = stats.toJson();

    if (stats.hasErrors()) {
        console.error(info.errors);
    }

    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
})

