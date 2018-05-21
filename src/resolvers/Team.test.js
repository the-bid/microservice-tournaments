const { school } = require('./Team')
const MockTeam = require('../../test/mock-data/Team')

describe('Team', () => {
  let Team = null
  beforeEach(() => {
    Team = new MockTeam()
  })
  afterEach(() => {
    Team = null
  })
  test('school takes market and returns a string', () => {
    const result = school(Team)
    expect(result).toEqual(expect.any(String))
    expect(result).toEqual(Team.market)
  })
})
