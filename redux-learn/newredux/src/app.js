import React, { Component } from 'react'
import TodoList from './components/TodoList'

export class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        number: {this.props.number}
        <TodoList />
      </div>
    )
  }
}

export default App
