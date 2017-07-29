const { Todo } = require('../models')
const Promise = require('bluebird')

Promise.promisifyAll(Todo)

const getAllTodos = () =>
  Todo.findAsync().then(todos =>
    todos.map(({ _id, name, isComplete }) => ({
      id: _id,
      name,
      isComplete
    }))
  )

const createNewTodo = todo => {
  const newTodo = Promise.promisifyAll(new Todo(todo))
  return newTodo
    .saveAsync()
    .then(({ _id, name, isComplete }) => ({ id: _id, name, isComplete }))
}

const saveTodo = (id, updatedTodo) =>
  Todo.findByIdAsync(id).then(todo => {
    Object.assign(todo, updatedTodo)
    Promise.promisifyAll(todo)
    return todo
      .saveAsync()
      .then(({ _id, name, isComplete }) => ({ id: _id, name, isComplete }))
  })

const deleteTodo = id => Todo.findByIdAndRemoveAsync(id)

module.exports = { getAllTodos, createNewTodo, saveTodo, deleteTodo }
