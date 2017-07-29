export const addTodo = (todos, newTodo) => [...todos, newTodo]

export const generateId = () => Math.floor(Math.random() * 1000000)

export const findById = (id, todos) => todos.find(todo => todo.id === id)

export const toggleTodo = todo => ({
  ...todo,
  isComplete: !todo.isComplete
})

export const updateTodos = (todos, updatedTodo) => {
  const updateIndex = todos.findIndex(({ id }) => id === updatedTodo.id)
  return [
    ...todos.slice(0, updateIndex),
    updatedTodo,
    ...todos.slice(updateIndex + 1)
  ]
}

export const removeTodo = (todos, targetId) => {
  const removeIndex = todos.findIndex(({ id }) => id === targetId)
  return [...todos.slice(0, removeIndex), ...todos.slice(removeIndex + 1)]
}

export const filterTodos = (todos, route) => {
  switch (route) {
    case '/pending':
      return todos.filter(todo => !todo.isComplete)
    case '/completed':
      return todos.filter(todo => todo.isComplete)
    default:
      return todos
  }
}
