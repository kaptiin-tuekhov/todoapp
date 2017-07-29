import React from 'react'

export const TodoItem = ({name, isComplete}) =>
  <li>
    <input type='checkbox' defaultChecked={isComplete} />
    {name}
  </li>
