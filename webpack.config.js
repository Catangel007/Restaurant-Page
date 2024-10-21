const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js", // Ensure this file exists
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  devtool: "eval-source-map",
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Ensure this directory exists
    },
    compress: true,
    port: 8080,
    watchFiles: ["./src/home.html"], // This will watch for changes in home.html
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/home.html", 
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ],
  },
};