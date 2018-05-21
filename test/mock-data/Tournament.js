const casual = require('casual')
const { uuid, title, date } = casual
const MockBracket = require('./Bracket')

class MockTournament {
  constructor(name) {
    this.id = uuid
    this.name = name || title
    this.status = casual.random_element(['closed', 'inProgress', 'open'])
    this.start_date = date('YYYY-MM-DD')
    this.end_date = date('YYYY-MM-DD')
    this.brackets = Array.from(new Array(4), () => new MockBracket())
  }
}

module.exports = MockTournament
