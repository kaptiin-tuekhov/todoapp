import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TodoForm, TodoList, Footer } from './components/todo/'
import {
  addTodo,
  generateId,
  findById,
  toggleTodo,
  updateTodos,
  removeTodo,
  filterTodos
} from './lib/todoHelpers'
import { pipe, partial } from './lib/utils'
import { loadTodos, createTodo } from './lib/todoService'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    todos: [],
    currentTodo: ''
  }

  static contextTypes = {
    route: PropTypes.string
  }

  componentDidMount () {
    loadTodos().then(todos =>
      this.setState(prevState => ({ ...prevState, todos }))
    )
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    this.setState(prevState => ({
      ...prevState,
      todos: removeTodo(prevState.todos, id)
    }))
  }

  handleToggle = id => {
    this.setState(prevState => {
      const getUpdatedTodos = pipe(
        findById,
        toggleTodo,
        partial(updateTodos, prevState.todos)
      )
      return {
        ...prevState,
        todos: getUpdatedTodos(id, prevState.todos)
      }
    })
  }

  handleInputChange = ({ target: { value } }) => {
    this.setState(prevState => ({ ...prevState, currentTodo: value }))
  }

  handleSubmit = evt => {
    evt.preventDefault()
    this.setState(({ currentTodo, todos }) => {
      const newTodo = {
        name: currentTodo,
        isComplete: false,
        id: generateId()
      }
      createTodo(newTodo).then(() => console.log('todo added'))
      return {
        todos: addTodo(todos, newTodo),
        currentTodo: '',
        errorMessage: ''
      }
    })
  }

  handleEmptySubmit = evt => {
    evt.preventDefault()
    this.setState(prevState => ({
      errorMessage: 'Please supply a todo name',
      ...prevState
    }))
  }

  render () {
    const { currentTodo, todos } = this.state
    const submitHandler = currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit
    const displayTodos = filterTodos(todos, this.context.route)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todos</h2>
        </div>
        <div className='Todo-App'>
          {this.state.errorMessage &&
            <span className='error'>
              {this.state.errorMessage}
            </span>}
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={currentTodo}
            handleSubmit={submitHandler}
          />
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
