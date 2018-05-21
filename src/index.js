const { GraphQLServer } = require('graphql-yoga')
const { ApolloEngine } = require('apollo-engine')
const { GraphQLDateTime: DateTime } = require('graphql-iso-date')
const Query = process.env.NODE_ENV === 'production' ? require('./resolvers/Query') : require('./mock-resolvers/Query')
const Tournament = require('./resolvers/Tournament')
const Team = require('./resolvers/Team')
const TournamentStatus = require('./resolvers/TournamentStatus')
const Bracket = require('./resolvers/Bracket')
const { PORT, APOLLO_ENGINE_API_KEY } = require('../config')
const sportsRadar = require('./services/sports-radar')

const resolvers = {
  Bracket,
  DateTime,
  Query,
  Tournament,
  TournamentStatus,
  Team
}

const server = new GraphQLServer({
  typeDefs: __dirname + '/schemas/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    sportsRadar
  })
})
const engine = new ApolloEngine({ apiKey: APOLLO_ENGINE_API_KEY })
const graphQLServer = server.createHttpServer({
  tracing: true,
  cacheControl: true
})
/* eslint-disable no-console */
engine.listen(
  {
    port: PORT,
    httpServer: graphQLServer,
    graphqlPaths: ['/']
  },
  () => console.log(`the-bid-tournament is running on port: ${PORT}`)
)
/* eslint-enable no-console */
