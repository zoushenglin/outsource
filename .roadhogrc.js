const path = require('path');
const pxtorem = require('postcss-pxtorem');

export default {
  entry: 'src/index*.js',
  disableCSSModules:true,
  publicPath:'./',
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
      ],
      extraPostCSSPlugins: [

      ],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        ['import', { 'libraryName': 'antd-mobile', 'libraryDirectory': 'lib', 'style': true }]
      ],
      extraPostCSSPlugins: [

      ],
    }
  }
}

