const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const { graphql } = require('graphql')
const { importSchema } = require('graphql-import')
const casual = require('casual')
const {
  tournamentObjectTemplate,
  bracketObjectTemplate,
  teamObjectTemplate,
  missingFieldErrorMessage
} = require('../../test/object-templates')

describe('Schema', () => {
  let schema = null
  beforeAll(() => {
    const typeDefs = importSchema(`${__dirname}/schema.graphql`)
    schema = makeExecutableSchema({ typeDefs })
    addMockFunctionsToSchema({
      schema,
      mocks: {
        Date: () => casual.date('YYYY-MM-DD')
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
          tournament(year: ${casual.year}){
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
          tournament(year: ${casual.year}){
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
          tournament(year: ${casual.year}){
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
      test('returns a GraphQLError for missing id field', async () => {
        expect.assertions(1)
        const query = `query tournament{
          tournament{
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
        const result = await graphql(schema, query)
        expect(result).toHaveProperty(
          'errors',
          expect.arrayContaining([
            expect.objectContaining(missingFieldErrorMessage({ method: 'tournament', field: 'year', type: 'Int' }))
          ])
        )
      })
    })
  })
})
