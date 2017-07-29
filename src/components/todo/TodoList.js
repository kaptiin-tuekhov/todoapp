import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos }) =>
  <ul>
    {todos.map(todo =>
      <TodoItem {...todo} key={todo.id} />
    )}
  </ul>
