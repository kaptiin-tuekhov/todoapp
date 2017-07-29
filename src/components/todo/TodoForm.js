import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = ({ handleInputChange, currentTodo, handleSubmit }) =>
  <form onSubmit={handleSubmit}>
    <input type='text' value={currentTodo} onChange={handleInputChange} />
  </form>

TodoForm.propTypes = {
  currentTodo: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
