const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = env => {
  // const isDevelopment = env.env !== 'production'
  return {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              // options: {
              //   plugins: [
              //     isDevelopment && require.resolve('react-refresh/babel')
              //   ]
              // }
            }
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        }
      ]
    },
    output: {
      path: path.resolve(__dirname, '..', './build'),
      filename: 'bundle.js'
    },
    mode: 'development',
    // devServer: {
    //   contentBase: path.resolve(__dirname, '..', './build'),
    //   hot: true
    // },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '..', './src/index.html') // 將 bundle.js 注入到 index.html
      }),
    ]
  }
}