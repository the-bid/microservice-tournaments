const { uuid, title, word, integer } = require('casual')

class MockTeam {
  constructor() {
    this.id = uuid
    this.name = title
    this.market = title + word
    this.seed = integer(1, 16)
  }
}

module.exports = MockTeam
