const casual = require('casual')
const { tournament } = require('./Query')
const MockTournament = require('../../test/mock-data/Tournament')
const MockBracket = require('../../test/mock-data/Bracket')

jest.mock('util', () => ({
  promisify: jest.fn(() => {
    return jest.fn(() => {})
  })
}))

describe('Query', () => {
  describe('tournament', () => {
    const context = {}
    beforeEach(() => {
      const tournamentsData = Array.from(new Array(3), () => new MockTournament())
      tournamentsData.push(new MockTournament('NCAA Mens Division I Tournament'))
      context.sportsRadar = {
        getTournaments: jest.fn(() => tournamentsData),
        getTournament: jest.fn(id => tournamentsData.find(tournament => tournament.id === id))
      }
    })
    afterEach(() => {
      delete context.sportsRadar
    })
    test('tournament calls getTournaments and getTournament', async () => {
      expect.assertions(2)
      const year = casual.year
      const { getTournament, getTournaments } = context.sportsRadar
      await tournament({}, { year }, context)
      expect(getTournaments).toBeCalledWith(year)
      expect(getTournament).toBeCalledWith(expect.any(String))
    })
    test('tournament returns a Tournament object', async () => {
      expect.hasAssertions()
      const result = await tournament({}, { year: casual.year }, context)
      expect(result).toBeInstanceOf(MockTournament)
      result.brackets.forEach(bracket => {
        expect(bracket).toBeInstanceOf(MockBracket)
      })
    })
  })
})
