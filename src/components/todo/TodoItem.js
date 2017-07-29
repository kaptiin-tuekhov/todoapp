import React from 'react'
import PropTypes from 'prop-types'
import { partial } from '../../lib/utils'

export const TodoItem = ({
  name,
  isComplete,
  handleToggle,
  id,
  handleRemove
}) =>
  <li>
    <span className='delete-item'>
      <a href='#' onClick={partial(handleRemove, id)}>
        X
      </a>
    </span>
    <input
      type='checkbox'
      checked={isComplete}
      onChange={partial(handleToggle, id)}
    />
    {name}
  </li>

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  isComplete: PropTypes.bool,
  id: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
}
