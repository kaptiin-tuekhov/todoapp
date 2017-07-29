import { addTodo, findById, toggleTodo, updateTodos, removeTodo } from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ]
  const newTodo = { id: 3, name: 'three', isComplete: false }
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).toEqual(expected)
})

test('addTodo should not mutate todos list passed in', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false }
  ]
  const newTodo = { id: 3, name: 'three', isComplete: false }
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]

  const result = addTodo(startTodos, newTodo)

  expect(result).not.toBe(startTodos)
})

test('findById should return the expected item from an array', () => {
  const todos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const expected = { id: 2, name: 'two', isComplete: false }
  const result = findById(2, todos)
  expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const todo = { id: 1, name: 'one', isComplete: false }
  const expected = { id: 1, name: 'one', isComplete: true }
  const result = toggleTodo(todo)
  expect(result).toEqual(expected)
})

test('toggleTodo should not mutate original todo', () => {
  const originalTodo = { id: 1, name: 'one', isComplete: false }
  const result = toggleTodo(originalTodo)
  expect(result).not.toBe(originalTodo)
})

test('updateTodos should update an item by id', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ]
  const result = updateTodos(startTodos, updatedTodo)
  expect(result).toEqual(expected)
})

test('updateTodos should not update original todos', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const updatedTodo = {id: 2, name: 'two', isComplete: true}
  const result = updateTodos(startTodos, updatedTodo)
  expect(result).not.toBe(startTodos)
})

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const targetId = 2
  const result = removeTodo(startTodos, targetId)
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  expect(result).toEqual(expected)
})

test('removeTodo should not mutate original todos', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const targetId = 2
  const result = removeTodo(startTodos, targetId)
  expect(result).not.toBe(startTodos)
})

