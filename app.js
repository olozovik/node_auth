const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()

const tasksRouter = require('./routes/api/tasks')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(morgan(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/tasks', tasksRouter)

app.use((req, res, next) => {
  res.status(404).json('Not found')
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({
    status: 'error',
    code: status,
    error: message,
  })
})

module.exports = app

/*
  JOI
*/
