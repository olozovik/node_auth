const { Task } = require('../../model')

const getTasks = async (req, res, next) => {
  const tasks = await Task.find({})
  res.json({
    status: 'success',
    code: 200,
    result: tasks,
  })
}

module.exports = getTasks
