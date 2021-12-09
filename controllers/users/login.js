const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../model')

const login = async (req, res, next) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    const error = new Error('This email is not registered')
    error.status = 401
    throw error
  }

  const isPassWordValid = await bcrypt.compare(password, user.password)
  if (!isPassWordValid) {
    const error = new Error('This password is not valid')
    error.status = 401
    throw error
  }

  const { SECRET } = process.env
  const token = await jwt.sign({ user: user.email, id: user._id }, SECRET)

  res.json({
    status: 'success',
    code: 200,
    token,
  })
}

module.exports = login
