const sleep = require('util').promisify(setTimeout)
module.exports = {
  tournament,
  team
}

async function tournament(root, { year }, { sportsRadar }, info) {
  const tournaments = await sportsRadar.getTournaments(year)

  const { id } = tournaments.find(tournament => {
    return tournament.name.toLowerCase().includes('division i')
  })
  await sleep(1000) //FIXME:REMOVE once this gets real
  return sportsRadar.getTournament(id)
}

async function team(root, { id, year }, { sportsRadar }, info) {
  let team
  if (year) {
    const { brackets } = await tournament(root, { year }, { sportsRadar }, `{brackets{teams{info}}}`)
    const teams = brackets.reduce((accumulator, bracket) => accumulator.concat(bracket.participants), [])
    team = teams.find(team => team.id === id)
  } else {
    team = await sportsRadar.getTeam(id)
  }
  return team
}
