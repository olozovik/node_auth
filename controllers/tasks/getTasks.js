const { Task } = require('../../model')

const getTasks = async (req, res, next) => {
  const { id: userId } = req.user
  console.log(userId)
  const tasks = await Task.find({ owner: userId })
  res.json({
    status: 'success',
    code: 200,
    result: tasks,
  })
}

module.exports = getTasks
