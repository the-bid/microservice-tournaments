const { startDate, endDate } = require('./Tournament')
const MockTournament = require('../../test/mock-data/Tournament')

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
      expect(result).toEqual(Tournament.start_date)
    })
  })
  describe('endDate', () => {
    test('endDate returns end_date as a string', () => {
      const result = endDate(Tournament)
      expect(result).toEqual(expect.any(String))
      expect(result).toEqual(Tournament.end_date)
    })
  })
})
