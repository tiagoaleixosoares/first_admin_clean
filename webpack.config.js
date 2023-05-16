const webpack = require('webpack');

module.exports = {

    plugins: [
        // Work around for Buffer is undefined:
        // https://github.com/webpack/changelog-v5/issues/10
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],externals: [
        'dtrace-provider',
        'fs',
        'mv',
        'os',
        'source-map-support',
      ]
}