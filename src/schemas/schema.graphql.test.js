const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const { graphql } = require('graphql')
const { importSchema } = require('graphql-import')
const { moment, year } = require('casual')

describe('Schema', () => {
  let schema = null
  beforeAll(() => {
    const typeDefs = importSchema(`${__dirname}/schema.graphql`)
    schema = makeExecutableSchema({ typeDefs })
    addMockFunctionsToSchema({
      schema,
      mocks: {
        //FIXME: I don't think this is the right way to do it
        Date: () => moment.toISOString()
      }
    })
  })
  afterAll(() => {
    schema = null
  })
  describe('Query', () => {
    describe('tournament', () => {
      test('returns a tournament', async () => {
        expect.hasAssertions()
        const query = `query tournament{
          tournament(year: ${year}){
            id
            name
            status
            startDate
            endDate
          }
        }`
        const { data } = await graphql(schema, query)
        expect(data.tournament).toMatchObject({
          id: expect.any(String),
          name: expect.any(String),
          status: expect.any(String),
          startDate: expect.any(String),
          endDate: expect.any(String)
        })
      })
      test('tournament contains a list of brackets', async () => {
        expect.hasAssertions()
        const query = `query tournament{
          tournament(year: ${year}){
            brackets{
              id
              name
            }
          }
        }`
        const { data } = await graphql(schema, query)
        expect(data.tournament).toMatchObject({
          brackets: expect.any(Array)
        })
        data.tournament.brackets.forEach(bracket => {
          expect(bracket).toMatchObject({
            id: expect.any(String),
            name: expect.any(String)
          })
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
          expect(bracket).toMatchObject({
            teams: expect.any(Array)
          })
          bracket.teams.forEach(team => {
            expect(team).toMatchObject({
              id: expect.any(String),
              name: expect.any(String),
              school: expect.any(String),
              seed: expect.any(Number)
            })
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
