const { date, unix_time } = require('casual')
const { astFromValue, GraphQLString, GraphQLInt } = require('graphql')
const Date = require('./Date')

describe('Date', () => {
  describe('parseValue', () => {
    test('parseValue takes in a date string and outputs a millisecond number', () => {
      const result = Date.parseValue(date('YYYY-MM-DD'))
      expect(result).toEqual(expect.any(Number))
    })
  })
  describe('serialize', () => {
    const result = Date.serialize(date('YYYY-MM-DD'))
    expect(result).toEqual(expect.any(Number))
  })
  describe('parseLiteral', () => {
    test('returns null if ast is a string', () => {
      const result = Date.parseLiteral(astFromValue(date('YYYY-MM-DD'), GraphQLString))
      expect(result).toBeNull()
    })
    test('returns string if ast is an integer', () => {
      const result = Date.parseLiteral(astFromValue(unix_time, GraphQLInt))
      expect(result).toEqual(expect.any(Number))
    })
  })
})
