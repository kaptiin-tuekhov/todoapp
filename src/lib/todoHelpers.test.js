import { addTodo, findByid, toggleTodo, updateTodos, removeTodo, filterTodos } from './todoHelpers'

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

test('findByid should return the expected item from an array', () => {
  const todos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const expected = { id: 2, name: 'two', isComplete: false }
  const result = findByid(2, todos)
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
  const targetid = 2
  const result = removeTodo(startTodos, targetid)
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
  const targetid = 2
  const result = removeTodo(startTodos, targetid)
  expect(result).not.toBe(startTodos)
})

test('filterTodo should return all items for the root route', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]

  const result = filterTodos(startTodos, '/')
  expect(result).toEqual(startTodos)
})

test('filterTodo should return pending items for the pending route', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ]
  const expected = [
    { id: 1, name: 'one', isComplete: false },
    { id: 3, name: 'three', isComplete: false }
  ]
  const result = filterTodos(startTodos, '/pending')
  expect(result).toEqual(expected)
})

test('filterTodo should return completed items for the completed route', () => {
  const startTodos = [
    { id: 1, name: 'one', isComplete: false },
    { id: 2, name: 'two', isComplete: true },
    { id: 3, name: 'three', isComplete: false }
  ]
  const expected = [
    { id: 2, name: 'two', isComplete: true }
  ]
  const result = filterTodos(startTodos, '/complete')
  expect(result).toEqual(expected)
})