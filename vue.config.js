const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('section-loader')
        .loader(path.resolve('src/build/section-loader.js'))
        .end()
  }
};

