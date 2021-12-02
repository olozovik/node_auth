const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const tasksRouter = require('./routes/api/tasks')

require('dotenv').config()

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(morgan(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/tasks', tasksRouter)

module.exports = app

/*
  JOI
  Errors, middlewares
*/
