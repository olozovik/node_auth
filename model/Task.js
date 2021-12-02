const { Schema, model } = require('mongoose')

const taskSchema = new Schema(
  {
    task: {
      type: String,
      require: [true, 'There is no text'],
      min: 5,
      max: 300,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true },
)

const Task = model('task', taskSchema)

module.exports = {
  Task,
}
