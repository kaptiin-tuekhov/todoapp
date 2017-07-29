import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = ({ handleInputChange, currentTodo }) =>
  <form>
    <input type='text' value={currentTodo} onChange={handleInputChange} />
  </form>

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}
