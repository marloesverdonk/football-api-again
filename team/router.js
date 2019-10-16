const {Router} = require('express')
const Team = require('./model')

const teamRouter = new Router

teamRouter.get('/teams', (req, res, next) => {
  Team.findAll()
      .then(teamlist => res.send(teamlist))
      .catch(next)
})

teamRouter.post('/teams', (req, res, next) => {
  Team.create(req.body)
      .then(team => res.send(team))
      .catch(next)
})

teamRouter.get('/teams/:id', (req, res, next) => {
  Team.findByPk(req.params.id)
      .then(team => res.send(team))
      .catch(next)
})

module.exports = teamRouter