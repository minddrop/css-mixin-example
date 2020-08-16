const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: `${__dirname}/src/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers')
              }
            }
          },
        ]
      }
    ]
  }
}
