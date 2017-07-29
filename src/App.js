import React, { Component } from 'react'
import { TodoForm, TodoList } from './components/todo/'
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
  }

  handleInputChange ({ target: { value } }) {
    this.setState(prevState => ({ ...prevState, currentTodo: value }))
  }
  render () {
    const {currentTodo, todos} = this.state
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
          />
          <TodoList todos={todos} />
        </div>
      </div>
    )
  }
}

export default App
