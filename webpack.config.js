const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const ReactRefresherWebpackPlugin = require( '@pmmmwh/react-refresh-webpack-plugin' )

const isDevelopment = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  entry: path.resolve( __dirname, 'src/index.tsx' ),
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin( { template: path.resolve( __dirname, 'public', 'index.html' ) } ),
    // isDevelopment && new ReactRefresherWebpackPlugin()
  ],
  devServer: {
    contentBase: path.resolve( __dirname, 'public' ),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   plugins: [
          //     isDevelopment && require.resolve( 'react-refresh/babel' )
          //   ].filter( Boolean ),
          // }
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ],
  },
}
