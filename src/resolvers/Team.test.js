const { school } = require('./Team')
const MockTeam = require('../mock-data/Team')

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
    expect(result).toEqual(Team.market)
    expect(result).toEqual(expect.any(String))
  })
})
