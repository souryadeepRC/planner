const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          "sass-loader",
          {
            loader: "css-loader",
            options: {
              module: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: process.env.PORTAL_PORT || 3000,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new webpack.DefinePlugin({
      "process.env.ENVIRONMENT": JSON.stringify(
        process.env.ENVIRONMENT || "development"
      ),
    }),
  ],
};
