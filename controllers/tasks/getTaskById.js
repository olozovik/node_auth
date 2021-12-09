const mongoose = require('mongoose')
const { Task } = require('../../model')

const getTaskById = async (req, res, next) => {
  const { taskId } = req.params
  const { id: userId } = req.user
  const isValidId = mongoose.Types.ObjectId.isValid(taskId)
  if (!isValidId) {
    console.log('NOT VALID')
    const error = new Error('Id is not valid')
    error.status = 400
    next(error)
  }
  const result = await Task.findOne({ _id: taskId, owner: userId })
  res.json({
    status: 'success',
    code: 200,
    result,
  })
}

module.exports = getTaskById
