const db = require('./db')
const express = require('express')
const Team = require('./team/model')
const teamRouter = require('./team/router')
const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const app = express()

app.use(jsonParser)
app.use(teamRouter)


const port = process.env.PORT || 4000

app.listen(port, () => console.log('listening on', port))
