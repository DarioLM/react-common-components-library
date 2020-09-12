const path = require("path");
const webpackConfig = require("../webpack.config");
module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  // Storybook addons: https://storybook.js.org/addons/
  addons: [],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../")
    });
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]]
      }
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.alias = webpackConfig.resolve.alias;
    return config;
  }
};
