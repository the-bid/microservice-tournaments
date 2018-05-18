const { startDate, endDate } = require('./Tournament')
const MockTournament = require('../mock-data/Tournament')

describe('Tournament', () => {
  let Tournament = null
  beforeEach(() => {
    Tournament = new MockTournament()
  })
  afterEach(() => {
    Tournament = null
  })
  describe('startDate', () => {
    test('startDate returns start_date as a string', () => {
      const result = startDate(Tournament)
      expect(result).toEqual(expect.any(String))
    })
  })
  describe('endDate', () => {
    test('endDate returns end_date as a string', () => {
      const result = endDate(Tournament)
      expect(result).toEqual(expect.any(String))
    })
  })
})
