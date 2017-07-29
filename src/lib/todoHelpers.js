export const addTodo = (todos, newTodo) => [...todos, newTodo]

export const generateId = () => Math.floor(Math.random() * 1000000)

export const findById = (id, todos) => todos.find(todo => todo.id === id)

export const toggleTodo = todo => ({
  ...todo,
  isComplete: !todo.isComplete
})

export const updateTodo = (todos, updatedTodo) => {
  const updateIndex = todos.findIndex(({ id }) => id === updatedTodo.id)
  return [
    ...todos.slice(0, updateIndex),
    updatedTodo,
    ...todos.slice(updateIndex + 1)
  ]
}
