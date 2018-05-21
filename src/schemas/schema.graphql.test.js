const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const { graphql } = require('graphql')
const { importSchema } = require('graphql-import')
const { date, year } = require('casual')
const { tournamentObjectTemplate, bracketObjectTemplate, teamObjectTemplate } = require('../../test/utils')

describe('Schema', () => {
  let schema = null
  beforeAll(() => {
    const typeDefs = importSchema(`${__dirname}/schema.graphql`)
    schema = makeExecutableSchema({ typeDefs })
    addMockFunctionsToSchema({
      schema,
      mocks: {
        //FIXME: I don't think this is the right way to do it
        Date: () => date('YYYY-MM-DD')
      }
    })
  })
  afterAll(() => {
    schema = null
  })
  describe('Query', () => {
    describe('tournament', () => {
      test('returns a tournament', async () => {
        expect.assertions(1)
        const query = `query tournament{
          tournament(year: ${year}){
            id
            name
            status
            startDate
            endDate
            brackets{
              id
            }
          }
        }`
        const { data } = await graphql(schema, query)
        expect(data.tournament).toMatchObject(tournamentObjectTemplate)
      })
      test('tournament contains a list of brackets', async () => {
        expect.hasAssertions()
        const query = `query tournament{
          tournament(year: ${year}){
            brackets{
              id
              name
              teams{
                id
              }
            }
          }
        }`
        const { data } = await graphql(schema, query)
        data.tournament.brackets.forEach(bracket => {
          expect(bracket).toMatchObject(bracketObjectTemplate)
        })
      })
      test('tournament brackets contain a list of teams', async () => {
        expect.hasAssertions()
        const query = `query tournament{
          tournament(year: ${year}){
            brackets{
              teams{
                id
                name
                school
                seed
              }
            }
          }
        }`
        const { data } = await graphql(schema, query)
        data.tournament.brackets.forEach(bracket => {
          bracket.teams.forEach(team => {
            expect(team).toMatchObject(teamObjectTemplate)
          })
        })
      })
      test('returns a GraphQLError for unknown query property', async () => {
        expect.assertions(2)
        const query = `query tournament{
          tournament(year: ${year}){
            unknown
          }
        }`
        const result = await graphql(schema, query)
        expect(result).toHaveProperty('errors')
        expect(result.errors[0]).toHaveProperty('message', 'Cannot query field "unknown" on type "Tournament".')
      })
    })
    test('returns a GraphQLError for unknown query', async () => {
      expect.assertions(2)
      const query = `query unknown{
        unknown{
          id
        }
      }`
      const result = await graphql(schema, query)
      expect(result).toHaveProperty('errors')
      expect(result.errors[0]).toHaveProperty('message', 'Cannot query field "unknown" on type "Query".')
    })
  })
})
