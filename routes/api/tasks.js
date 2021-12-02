const express = require('express')
const router = express.Router()

const { getTasks, addTask } = require('../../controllers')

router.get('/', getTasks)
router.post('/', addTask)

module.exports = router
