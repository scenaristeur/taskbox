module.exports = {
  "stories": [
    "../src/components/**/*.stories.js",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
