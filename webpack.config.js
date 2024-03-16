const path = require("path")
const entryGenerator = require("dtepg")

module.exports = {
  mode: "development",
  entry: Object.assign({main: './src/index.ts'}, entryGenerator("./tests")),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
}
