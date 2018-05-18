const { uuid, title } = require('casual')
const MockTeam = require('./Team')

class MockBracket {
  constructor() {
    this.id = uuid
    this.name = title
    this.participants = Array.from(new Array(5), () => new MockTeam())
  }
}

module.exports = MockBracket
