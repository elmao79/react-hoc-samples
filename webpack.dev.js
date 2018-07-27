
const { PATHS } = require('./webpack.config.js');
const projectConf = require('./webpack.base.js');

projectConf.devServer = {
    port: 8081,
    contentBase: PATHS.DIST,
    publicPath: '/js/'
};

module.exports = projectConf;
