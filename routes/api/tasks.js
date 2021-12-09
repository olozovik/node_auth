const express = require('express')
const router = express.Router()

const { getTasks, addTask, getTaskById } = require('../../controllers')

const { authorization, ctrlWrapper } = require('../../middlewares')

router.get('/', authorization, ctrlWrapper(getTasks))
router.get('/:taskId', authorization, ctrlWrapper(getTaskById))
router.post('/', authorization, ctrlWrapper(addTask))

module.exports = router
