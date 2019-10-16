const {Router} = require('express')
const Team = require('./model')

const teamRouter = new Router

teamRouter.get('/team', (req, res, next) => 
  Team.findAll()
      .then(teamlist => res.send(teamlist))
      .catch(next)
)

module.exports = teamRouter