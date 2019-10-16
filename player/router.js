const {Router} = require('express')
const Player = require('./model')
const Team = require('../team/model')

const playerRouter = new Router

playerRouter.get('/players', (req, res, next) => {
  Player.findAll()
      .then(playerlist => res.send(playerlist))
      .catch(next)
})

playerRouter.post('/players', (req, res, next) => {
  Player.create(req.body)
      .then(player => res.send(player))
      .catch(next)
})

playerRouter.get('/players/:id', (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team]})
      .then(player => res.send(player))
      .catch(next)
})

module.exports = playerRouter