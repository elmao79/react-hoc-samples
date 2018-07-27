
const Path = require('path');

const { PATHS } = require('./webpack.config.js');

module.exports = {
    entry: {
        demo1: Path.resolve(PATHS.SRC, 'jsx/demo1.jsx'),
        demo2: Path.resolve(PATHS.SRC, 'jsx/demo2.jsx'),
        demo3: Path.resolve(PATHS.SRC, 'jsx/demo3.jsx'),
        demo4: Path.resolve(PATHS.SRC, 'jsx/demo4.jsx')
    },
    output: {
        path: PATHS.DIST,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: [ Path.resolve(__dirname, 'src/jsx') ],
                exclude: [ Path.resolve(__dirname, 'node_modules') ]
            }
        ]
    }
};
