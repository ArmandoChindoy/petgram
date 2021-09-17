const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@/components': path.resolve(__dirname, 'src/components/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.json/,
        use: ['json-loader']
      },
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash]-[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
    // new WebpackPwaManifest({
    //   name: 'petgram',
    //   shortname: 'Petgram',
    //   description: 'Petgram',
    //   background_color: '#fff',
    //   theme_color: '#fff',
    //   icons: [
    //     {
    //       src: path.resolve(__dirname, './src/assstes/img/logo-min.png'),
    //       sizes: [96, 128, 192, 256, 384, 512]
    //     }
    //   ]
    // }),
    // new GenerateSW({
    //   runtimeCaching: [
    //     {
    //       // eslint-disable-next-line prefer-regex-literals
    //       urlPattern: new RegExp(
    //         'https://(res.cloudinary.com | images.unsplash.com)'
    //       ),
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'images'
    //       }
    //     },
    //     {
    //       // eslint-disable-next-line prefer-regex-literals
    //       urlPattern: new RegExp('https://petgram-server-olive.vercel.app'),
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'api'
    //       }
    //     }
    //   ]
    // })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000,
    liveReload: true,
    open: true,
    historyApiFallback: true
  }
}
