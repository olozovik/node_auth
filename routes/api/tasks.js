const express = require('express')
const router = express.Router()

const { getTasks, addTask, getTaskById } = require('../../controllers')
const { ctrlWrapper } = require('../../middlewares')

router.get('/', ctrlWrapper(getTasks))
router.get('/:taskId', ctrlWrapper(getTaskById))
router.post('/', ctrlWrapper(addTask))

module.exports = router
