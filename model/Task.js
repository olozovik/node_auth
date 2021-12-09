const { Schema, model } = require('mongoose')

const taskSchema = new Schema(
  {
    task: {
      type: String,
      required: [true, 'There is no text'],
      minlength: 5,
      maxlength: 300,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
)

const Task = model('task', taskSchema)

module.exports = {
  Task,
}
