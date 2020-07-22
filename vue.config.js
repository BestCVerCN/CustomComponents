const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {

  outputDir: 'dist',

  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',

  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 5478,
    https: false,
    hotOnly: false,
    proxy: null,
    before: app => {}
  },

  configureWebpack: {
    devtool: 'source-map'
  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            // browsers: ['Android >= 4.0', 'iOS >= 7']      ==>修改为下面
            overrideBrowserslist: [
              'Android 4.1',
              'iOS 7.1',
              'Chrome > 31',
              'ff > 31',
              'ie >= 8'
            ]
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          })
        ]
      }
    }
  }
};
