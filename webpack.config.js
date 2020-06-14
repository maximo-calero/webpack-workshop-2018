const webpack = require('webpack');

const HtmlWebpackPLugin = require('html-webpack-plugin');

module.exports = ({ mode }) => {
    console.log(mode);
    return {
        mode,
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPLugin(),
            new webpack.ProgressPlugin()
        ]
    };
};