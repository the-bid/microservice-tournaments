const { sortBy } = require('lodash')

module.exports = {
  teams
}

function teams(root) {
  return sortBy(root.participants, ['seed'])
}
