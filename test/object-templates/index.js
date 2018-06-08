const tournamentObjectTemplate = {
  id: expect.any(String),
  name: expect.any(String),
  status: expect.any(String),
  startDate: expect.any(String),
  endDate: expect.any(String),
  brackets: expect.any(Array)
}

const bracketObjectTemplate = {
  id: expect.any(String),
  name: expect.any(String),
  teams: expect.any(Array)
}

const teamObjectTemplate = {
  id: expect.any(String),
  name: expect.any(String),
  school: expect.any(String),
  seed: expect.any(Number)
}

function missingFieldErrorMessage({ method, field, type }) {
  return {
    message: `Field "${method}" argument "${field}" of type "${type}!" is required but not provided.`
  }
}

module.exports = { tournamentObjectTemplate, bracketObjectTemplate, teamObjectTemplate, missingFieldErrorMessage }
