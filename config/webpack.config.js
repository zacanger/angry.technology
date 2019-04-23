const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

if (process.env.NODE_ENV !== 'production') {
  throw new Error('Please set NODE_ENV=production')
}

const src = path.resolve('src')

const babelConfig = {
  babelrc: false,
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-regenerator',
    [ '@babel/plugin-transform-runtime', {
      helpers: false,
      regenerator: true,
    } ],
    '@babel/plugin-transform-react-constant-elements',
    [ '@babel/plugin-transform-react-jsx', {
      pragma: 'h',
    } ]
  ]
}

module.exports = {
  bail: true,
  entry: [
    require.resolve('./polyfills'),
    path.join(src, 'index')
  ],
  output: {
    path: path.resolve('docs'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.json' ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: src,
        use: [
          {
            loader: 'babel-loader',
            options: babelConfig,
          }
        ]
      },
      {
        test: /\/favicon.ico$/,
        include: src,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'favicon.ico?[hash:8]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [ 'link:href' ],
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
    namedModules: true,
    occurrenceOrder: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: { ascii_only: true },
          ie8: false,
          safari10: true,
        },
        sourceMap: true,
        parallel: true,
      })
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ]
}
