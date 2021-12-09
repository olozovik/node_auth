const { Router } = require('express')
const router = Router()
const { register, login } = require('../../controllers')
const { ctrlWrapper } = require('../../middlewares')

router.post('/register', ctrlWrapper(register))
router.post('/login', ctrlWrapper(login))

module.exports = router
