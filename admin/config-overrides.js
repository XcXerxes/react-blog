/*
 * @Description: webpack配置文件
 * @Author: leo
 * @Date: 2019-09-16 20:07:06
 * @LastEditors: leo
 * @LastEditTime: 2019-09-16 21:02:41
 */
const { paths } = require("react-app-rewired")
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  addWebpackAlias({
    '@assets': `${paths.appSrc}/assets/`
  })
)
