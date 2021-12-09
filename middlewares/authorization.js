const jwt = require('jsonwebtoken')

const authorization = (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')
    if (bearer !== 'Bearer') {
      return
    }
    const isTokenValid = jwt.verify(token, process.env.SECRET)
    req.user = { user: isTokenValid.user, id: isTokenValid.id }
    next()
  } catch (e) {
    const error = new Error(e)
    error.status = 401
    next(error)
  }
}

module.exports = authorization
