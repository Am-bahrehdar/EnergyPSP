// gatsby-node.js

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

/**
 * Tweak Webpack’s MiniCssExtractPlugin to ignore CSS order conflicts.
 */
exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()

  config.plugins = config.plugins.map(plugin => {
    if (plugin.constructor.name === "MiniCssExtractPlugin") {
      return new MiniCssExtractPlugin({
        ...plugin.options,
        ignoreOrder: true,
      })
    }
    return plugin
  })

  actions.replaceWebpackConfig(config)
}

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}
