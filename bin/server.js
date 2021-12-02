const app = require('../app')
const mongoose = require('mongoose')

const { PORT = 8080 } = process.env

const server = async () => {
  try {
    await mongoose.connect(process.env.DB_HOST)
    console.log('DB connection is succesfull')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

server()
