const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    search: "./src/search.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader","less-loader"] },
      { test: /\.(png|jpg|jpeg|gif)$/, use: ["file-loader"] },
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.ts$/, use: "ts-loader" },
    ],
  },
};
