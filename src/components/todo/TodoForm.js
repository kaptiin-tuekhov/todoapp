import React from 'react'

export const TodoForm = ({handleInputChange, currentTodo}) =>
  <form>
    <input
      type='text'
      value={currentTodo}
      onChange={handleInputChange}
    />
  </form>
