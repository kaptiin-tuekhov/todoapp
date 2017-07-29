import React from 'react'
import PropTypes from 'prop-types'

export const TodoItem = ({ name, isComplete }) =>
  <li>
    <input type='checkbox' defaultChecked={isComplete} />
    {name}
  </li>

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired
}
