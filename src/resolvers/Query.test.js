const casual = require('casual')
const { tournament, team } = require('./Query')
const MockTournament = require('../../test/mock-data/Tournament')
const MockBracket = require('../../test/mock-data/Bracket')
const MockTeam = require('../../test/mock-data/Team')

jest.mock('util', () => ({
  promisify: jest.fn(() => {
    return jest.fn(() => {})
  })
}))

describe('Query', () => {
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
  describe('tournament', () => {
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
  describe('team', () => {
    beforeEach(() => {
      context.sportsRadar = {
        ...context.sportsRadar,
        getTeam: jest.fn(() => new MockTeam())
      }
    })
    test('team returns a Team object', async () => {
      expect.assertions(1)
      const result = await team({}, { id: casual.uuid }, context)
      expect(result).toBeInstanceOf(MockTeam)
    })
    test('team calls getTeam if no year is provided', async () => {
      expect.assertions(1)
      const id = casual.uuid
      await team({}, { id }, context)
      const { getTeam } = context.sportsRadar
      expect(getTeam).toBeCalledWith(id)
    })
    test('team calls getTournament and getTournaments if year is provided', async () => {
      expect.assertions(2)
      const year = casual.year
      await team({}, { id: casual.uuid, year }, context)
      const { getTournaments, getTournament } = context.sportsRadar
      expect(getTournaments).toBeCalledWith(year)
      expect(getTournament).toBeCalledWith(expect.any(String))
    })
  })
})
