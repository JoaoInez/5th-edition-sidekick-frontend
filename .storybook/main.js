const path = require("path");

module.exports = {
  stories: ["../src/components/**/**/*.stories.tsx"],
  addons: ["@storybook/addon-a11y/register"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: {
              mode: "global",
              exportGlobals: true,
              context: path.resolve(__dirname, "src"),
            },
          },
        },
        "sass-loader",
      ],
      include: path.resolve(__dirname, "../src/"),
    });
    config.resolve.extensions.push(".ts", ".tsx");
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, "../src/"),
    ];
    return config;
  },
};
