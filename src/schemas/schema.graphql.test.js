const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools')
const { graphql } = require('graphql')
const { importSchema } = require('graphql-import')
const { date } = require('casual')

describe('Schema', () => {
  let schema = null
  beforeAll(() => {
    const typeDefs = importSchema(__dirname + '/schema.graphql')
    schema = makeExecutableSchema({
      typeDefs
    })
    addMockFunctionsToSchema({
      schema,
      mocks: {
        //FIXME: I don't think this is the right way to do it
        Date: () => new Date(date('YYYY-MM-DD')).getTime()
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
          tournament(year: 2018){
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
          startDate: expect.any(Number),
          endDate: expect.any(Number)
        })
      })
      test('tournament contains a list of brackets', async () => {
        expect.hasAssertions()
        const query = `query tournament{
          tournament(year: 2018){
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
          tournament(year: 2018){
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
    })
  })
})
