const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

// 依據環境變數，將對應的環境設定與 common 環境設定 merge

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
