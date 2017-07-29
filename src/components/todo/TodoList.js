import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, handleToggle, handleRemove }) =>
  <ul>
    {todos.map(todo =>
      <TodoItem
        {...todo}
        key={todo.id}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    )}
  </ul>

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}
