export const addTodo = (todos, newTodo) => [...todos, newTodo]

export const generateId = () => Math.floor(Math.random() * 1000000)