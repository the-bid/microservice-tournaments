const sleep = require('util').promisify(setTimeout)

module.exports = {
  tournament
}

async function tournament(root, { year }, { sportsRadar }, info) {
  const tournaments = await sportsRadar.getTournaments(year)
  const { id } = tournaments.find(tournament => {
    return tournament.name.toLowerCase().includes('division i')
  })
  await sleep(1000) //FIXME:REMOVE once this gets real
  return await sportsRadar.getTournament(id)
}
