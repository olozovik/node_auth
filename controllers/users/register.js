const bcrypt = require('bcrypt');
const { User } = require('../../model');

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  const isEmailExist = await User.findOne({ email });

  if (isEmailExist) {
    const error = new Error('Email already registered');
    error.status = 409;
    throw error;
  }

  const hashPassword = await bcrypt.hash(password, bcrypt.genSaltSync(10));
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.status(201).json({
    status: 'success',
    code: 201,
    result: { name: user.name, email: user.email, id: user._id },
  });
};

module.exports = register;
