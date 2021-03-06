const { Task } = require('../../model')

const addTask = async (req, res, next) => {
  const { task, completed } = req.body
  const { id: userId } = req.user
  const newTask = completed ? { task, completed } : { task }
  newTask.owner = userId
  const result = await Task.create({ ...newTask })

  res.status(201).json({
    status: 'success',
    code: 201,
    result,
  })
}

module.exports = addTask
