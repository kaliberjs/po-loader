const gettextParser = require('gettext-parser')

module.exports = PoLoader

/** @type {import('webpack').LoaderDefinitionFunction} */
function PoLoader(source) {
  return `module.exports = ${JSON.stringify(gettextParser.po.parse(source))};`
}
