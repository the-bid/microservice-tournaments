const serviceConfig = require('./service.config')
const sportsRadarConfig = require('./sports-radar.config')
const apolloConfig = require('./apollo.config')

module.exports = {
  ...serviceConfig,
  ...sportsRadarConfig,
  ...apolloConfig
}
