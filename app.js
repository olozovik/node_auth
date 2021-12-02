const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { Task } = require('./model/Task')

require('dotenv').config()

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(morgan(formatsLogger))
app.use(cors())
app.use(express.json())

app.post('/tasks', async (req, res) => {
  try {
    const { task } = req.body
    const newTask = await Task.create({ task })
    res.status(201).json({
      status: 'success',
      code: 201,
      result: newTask,
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = app

/*
  JOI
  Structure:
    Controllers
    Routs
    Functions to communicate with DB
  Errors, middlewares
*/
