import React, { Component } from 'react'
import { TodoForm, TodoList } from './components/todo/'
import { addTodo, generateId } from './lib/todoHelpers'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor () {
    super()
    this.state = {
      todos: [
        { id: 1, name: 'Learn JSX', isComplete: true },
        { id: 2, name: 'Build', isComplete: false },
        { id: 3, name: 'Ship', isComplete: false }
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange ({ target: { value } }) {
    this.setState(prevState => ({ ...prevState, currentTodo: value }))
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.setState(({ currentTodo, todos }) => ({
      todos: addTodo(todos, {
        name: currentTodo,
        isComplete: false,
        id: generateId()
      }),
      currentTodo: ''
    }))
  }
  render () {
    const { currentTodo, todos } = this.state
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React Todos</h2>
        </div>
        <div className='Todo-App'>
          <TodoForm
            handleInputChange={this.handleInputChange}
            currentTodo={currentTodo}
            handleSubmit={this.handleSubmit}
          />
          <TodoList todos={todos} />
        </div>
      </div>
    )
  }
}

export default App
