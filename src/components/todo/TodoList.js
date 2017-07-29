import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, handleToggle }) =>
  <ul>
    {todos.map(todo =>
      <TodoItem {...todo} key={todo.id} handleToggle={handleToggle} />
    )}
  </ul>

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired
}
