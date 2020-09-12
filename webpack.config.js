const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.ts",
    button: "./src/Components/Button/Button.tsx",
    link:  "./src/Components/Link/Link.tsx",
    // tabPanel: "",
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    library: "react-common-components-library",
    libraryTarget: "umd"
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
        Assets: path.resolve(__dirname, "src/assets/")
      }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("ts-loader")
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src")
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};