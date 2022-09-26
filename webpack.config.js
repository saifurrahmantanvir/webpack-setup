const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const commonConfig = {
   entry: {
      main: path.resolve(__dirname, './src/index.tsx'),
   },
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   module: {
      rules: [
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
               },
            ],
         },
         {
            test: /\.s?css$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
         },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
         },
         {
            test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
         },
      ],
   },
   output: {
      path: path.resolve(__dirname, './build'),
      filename: '[name].js',
      clean: true
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, './public/index.html'),
         title: 'Learning Webpack'
      })
   ]
}

module.exports = (env) => {
   const modeConfig = require(`./webpack/webpack.${env.mode}.js`)
   const config = merge(commonConfig, modeConfig)

   return config;
}