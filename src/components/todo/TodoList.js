import React from 'react'
import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }) =>
  <ul>
    {todos.map(todo => <TodoItem {...todo} key={todo.id} />)}
  </ul>

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}
