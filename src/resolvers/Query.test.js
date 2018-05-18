const { year } = require('casual')
const { tournament } = require('./Query')
const MockTournament = require('../mock-data/Tournament')
const MockBracket = require('../mock-data/Bracket')
const BRACKETS = 4

jest.mock('util', () => ({
  promisify: jest.fn(() => {
    return jest.fn(() => {})
  })
}))

describe('Query', () => {
  describe('tournament', () => {
    const context = {}
    beforeEach(() => {
      const tournamentsData = Array.from(new Array(BRACKETS - 1), () => new MockTournament())
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
      const { getTournament, getTournaments } = context.sportsRadar
      await tournament({}, { year }, context)
      expect(getTournaments).toBeCalledWith(year)
      expect(getTournament).toBeCalledWith(expect.any(String))
    })
    test('tournament returns a Tournament object', async () => {
      expect.assertions(BRACKETS + 1)
      const result = await tournament({}, { year }, context)
      expect(result).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          start_date: expect.any(String),
          end_date: expect.any(String),
          status: expect.any(String),
          brackets: expect.any(Array)
        })
      )
      result.brackets.forEach(bracket => {
        expect(bracket).toBeInstanceOf(MockBracket)
      })
    })
  })
})
