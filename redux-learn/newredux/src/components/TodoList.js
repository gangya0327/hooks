import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

export class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log('this.TodoList', this.props.todos)
    this.state = {
      todos: [
        { text: 'ggg', completed: false },
        { text: 'aaa', completed: false },
        { text: 'eqe', completed: false }
      ]
    }
  }

  onClick() {
    console.log(123)
  }

  render() {
    return (
      <ul>
        {
          this.state.todos.map(todo => {
            return (
              <Todo onClick={this.onClick} {...todo} key={todo.text} />
            )
          })
        }
      </ul>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     todos: state.todos
//   }
// }

// const VisibleTodoList = connect(
//   mapStateToProps
// )(TodoList)

// export default VisibleTodoList
export default TodoList
