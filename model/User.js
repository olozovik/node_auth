const { Schema, model } = require('mongoose')

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: 'There is no name',
      minlength: 3,
    },
    email: {
      type: String,
      required: 'There is no email',
      minlength: 5,
    },
    password: {
      type: String,
      required: 'There is no password',
      minlength: 5,
    },
  },
  { versionKey: false, timestamps: true },
)

const User = model('user', registerSchema)

//JOJOJOJOJOJOJOJOJOJOJOJOJOI!!!!!!!!!!!!!!!!

module.exports = {
  User,
}
