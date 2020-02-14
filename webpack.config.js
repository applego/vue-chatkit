const path = require('path')

module.exports = {
  loader: `postcss-loader`,
  options: {
    options: {},
    plugins: () => [require('autoprefixer')]
  }
}
