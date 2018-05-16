const axios = require('axios')
const { SPORTS_RADAR_URL, SPORTS_RADAR_API_KEY } = require('../../config')

module.exports = {
  getTournaments,
  getTournament
}

const sportsRadar = axios.create({
  baseURL: SPORTS_RADAR_URL,
  params: {
    api_key: SPORTS_RADAR_API_KEY
  }
})

async function getTournaments(year) {
  const {
    data: { tournaments }
  } = await sportsRadar.get(`tournaments/${year}/PST/schedule.json`)
  return tournaments
}

async function getTournament(id) {
  const { data } = await sportsRadar.get(`tournaments/${id}/summary.json`)
  return data
}
