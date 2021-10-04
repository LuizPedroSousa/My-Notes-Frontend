const path = require('path');

module.exports = {
  "stories": ['../src/components/**/stories.tsx'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-css-modules-preset"
  ],
  webpackFinal: (config) => {
        config.resolve.modules.push(process.cwd() + "/node_modules");
        config.resolve.modules.push(process.cwd() + "/src");

        // this is needed for working w/ linked folders
        config.resolve.symlinks = false;


        return config;
    }
}