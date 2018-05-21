const { teams } = require('./Bracket')
const MockBracket = require('../../test/mock-data/Bracket')
const MockTeam = require('../../test/mock-data/Team')
/* eslint-disable security/detect-object-injection */
describe('Bracket', () => {
  let Bracket = null
  beforeEach(() => {
    Bracket = new MockBracket()
  })
  afterEach(() => {
    Bracket = null
  })
  describe('teams', () => {
    test('teams takes participants returns array of Teams', () => {
      const result = teams(Bracket)
      result.forEach(team => {
        expect(team).toBeInstanceOf(MockTeam)
      })
    })
    test('teams are sorted by seed', () => {
      const result = teams(Bracket)
      result.forEach((team, index, teams) => {
        if (index < teams.length - 1) {
          expect(team.seed).toBeLessThanOrEqual(teams[index].seed)
        }
      })
    })
  })
})
/* eslint-enable security/detect-object */
