const db = require('./db')
const express = require('express')
const Team = require('./team/model')

const app = express()

const port = process.env.PORT || 4000

app.listen(port, () => console.log('listening on', port))
