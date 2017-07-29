const mongoose = require('mongoose')

const todoSchema = {
  name: String,
  isComplete: Boolean
}

const Todo = mongoose.model('Todo', todoSchema, 'todolist')

module.exports = { Todo }
