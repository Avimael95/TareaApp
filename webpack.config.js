const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    mode: 'development',
    optimization: {
      minimizer: [new OptimizeCssAssetsPlugin()]
    },
    module: {
      rules: [
        {
          test:/\.css$/, //Haha esta evaluacion pero
          exclude:/style\.css$/, //Excluya a este
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        {
          test:/style\.css$/,
          use:[
            MiniCssExtractPlugin.loader,
            'css-loader'
          ]
        },
        {
          test: /\.html$/,
          use:[
              {
                loader: 'html-loader',
                options: { minimize: false}
              }
          ]
          
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
            use: [
              {
                loader:'file-loader',
                options:{
                  esModule:false
                }
              }
            ]
        },
      ],
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html'
        }),
        new MiniCssExtractPlugin({
          // filename: '[name].[contenthash].css',
          filename: '[name].css',
          ignoreOrder: false
        })
      ],
  };